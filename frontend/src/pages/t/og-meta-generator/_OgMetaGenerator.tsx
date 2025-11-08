import React, { useState, useEffect } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import OgMetaGeneratorSkeleton from "./_OgMetaGeneratorSkeleton";
import ToolVideo from "@/components/tool/ToolVideo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import CopyButton from "@/components/ui/copy-button";
import AdBanner from "../../../components/banner/AdBanner";

const PAGE_TYPES = [
  { value: "website", label: "Website" },
  { value: "article", label: "Article" },
  { value: "book", label: "Book" },
  { value: "profile", label: "Profile" },
  { value: "music", label: "Music" },
  { value: "video", label: "Video" },
];

function generateMetaTags({
  pageType,
  title,
  description,
  url,
  image,
  imageAlt,
  twitterCard,
  twitterSite,
  twitterCreator,
}: {
  pageType: string;
  title: string;
  description: string;
  url: string;
  image: string;
  imageAlt: string;
  twitterCard: string;
  twitterSite: string;
  twitterCreator: string;
}) {
  let ogMeta = `<!-- og meta -->\n<meta property="og:type" value="${pageType}" />\n<meta property="og:title" value="${title}" />\n<meta property="og:description" value="${description}" />\n<meta property="og:url" value="${url}" />\n<meta property="og:image" value="${image}" />\n<meta property="og:image:alt" value="${imageAlt}" />`;

  if (pageType === "article") {
    ogMeta += `\n<meta property="article:author" value="${twitterCreator}" />`;
  } else if (pageType === "book") {
    ogMeta += `\n<meta property="book:author" value="${twitterCreator}" />`;
  } else if (pageType === "profile") {
    ogMeta += `\n<meta property="profile:username" value="${twitterSite}" />`;
  } else if (pageType === "music") {
    ogMeta += `\n<meta property="music:musician" value="${twitterCreator}" />`;
  } else if (pageType === "video") {
    ogMeta += `\n<meta property="video:actor" value="${twitterCreator}" />`;
  }

  let twitterMeta = `\n\n<!-- twitter meta -->\n<meta name="twitter:card" value="${twitterCard}" />\n<meta name="twitter:site" value="${twitterSite}" />\n<meta name="twitter:creator" value="${twitterCreator}" />\n<meta name="twitter:title" value="${title}" />\n<meta name="twitter:description" value="${description}" />\n<meta name="twitter:image" value="${image}" />\n<meta name="twitter:image:alt" value="${imageAlt}" />`;

  return ogMeta + twitterMeta;
}

const OgMetaGenerator: React.FC = () => {
  const [meta, setMeta] = useState({
    pageType: "website",
    title: "",
    description: "",
    url: "",
    image: "",
    imageAlt: "",
    twitterCard: "summary_large_image",
    twitterSite: "",
    twitterCreator: "",
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMetaChange = (key: string, value: string) => {
    setMeta((prev) => ({ ...prev, [key]: value }));
  };

  const metaTags = generateMetaTags(meta);

  return (
    <ToolContainer>
      <div className="mb-16 mt-[74px]">
        <AdBanner />
      </div>
      <ToolHead
        name="Open Graph Meta Generator"
        description="Generate Open Graph and Twitter meta tags instantly. Customize page type, title, description, image, and more for perfect social sharing and SEO."
      />
      {!loaded ? (
        <OgMetaGeneratorSkeleton />
      ) : (
        <ToolBody>
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Page Type
                      </label>
                      <Select
                        value={meta.pageType}
                        onValueChange={(v) => handleMetaChange("pageType", v)}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {PAGE_TYPES.map((pt) => (
                            <SelectItem key={pt.value} value={pt.value}>
                              {pt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Title
                      </label>
                      <Input
                        value={meta.title}
                        onChange={(e) =>
                          handleMetaChange("title", e.target.value)
                        }
                        placeholder="Page title"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Description
                      </label>
                      <Input
                        value={meta.description}
                        onChange={(e) =>
                          handleMetaChange("description", e.target.value)
                        }
                        placeholder="Page description"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Page URL
                      </label>
                      <Input
                        value={meta.url}
                        onChange={(e) =>
                          handleMetaChange("url", e.target.value)
                        }
                        placeholder="https://yourdomain.com/page"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Image URL
                      </label>
                      <Input
                        value={meta.image}
                        onChange={(e) =>
                          handleMetaChange("image", e.target.value)
                        }
                        placeholder="https://yourdomain.com/image.png"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Image Alt
                      </label>
                      <Input
                        value={meta.imageAlt}
                        onChange={(e) =>
                          handleMetaChange("imageAlt", e.target.value)
                        }
                        placeholder="Image alt text"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Twitter Card Type
                      </label>
                      <Select
                        value={meta.twitterCard}
                        onValueChange={(v) =>
                          handleMetaChange("twitterCard", v)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="summary">Summary</SelectItem>
                          <SelectItem value="summary_large_image">
                            Summary with large image
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Twitter Site Account
                      </label>
                      <Input
                        value={meta.twitterSite}
                        onChange={(e) =>
                          handleMetaChange("twitterSite", e.target.value)
                        }
                        placeholder="@site_account"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Twitter Creator Account
                      </label>
                      <Input
                        value={meta.twitterCreator}
                        onChange={(e) =>
                          handleMetaChange("twitterCreator", e.target.value)
                        }
                        placeholder="@creator_account"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    {/* Output box (right) */}
                    <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block font-medium text-slate-700 dark:text-slate-300">
                          Your meta tags
                        </label>
                        <CopyButton
                          text={metaTags}
                          disabled={metaTags.length === 0}
                        />
                      </div>
                      <pre className="w-full min-h-[320px] p-3 border border-slate-300 rounded-lg bg-slate-50 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-100 font-mono text-sm overflow-x-auto">
                        <code>{metaTags}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>
          <ToolContentCardWrapper>
            <ToolVideo
              title="Learn More: The Open Graph Protocol - Why And How You Should Use it On Your Website"
              description="Learn how to create Open Graph and Twitter meta tags for your website."
              videoUrl="https://www.youtube.com/embed/RW5HCOMbvuQ"
            />
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  What are OG & Twitter Meta Tags?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    OG (Open Graph) and Twitter meta tags help control how your
                    website appears when shared on social media. This tool lets
                    you generate and copy meta tags for better SEO and sharing.
                  </p>
                  <p>
                    Fill in the fields above to customize your meta tags. Copy
                    and paste the generated tags into your website's HTML for
                    instant results.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-blue-800 dark:text-blue-200 text-sm">
                      <strong>💡 Tip:</strong> Use descriptive titles and images
                      for better social sharing.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-700 dark:text-slate-300">
                  Official Resources
                </CardTitle>
                <CardDescription>
                  Explore documentation and guides
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3">
                  <a
                    href="https://ogp.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">
                        📋
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        Open Graph Protocol
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Official OG meta tag documentation
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                        🔗
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        Twitter Card Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Twitter meta tag documentation
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-semibold text-sm">
                        🤖
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-green-600 dark:group-hover:text-green-400">
                        Meta Tag - MDN Docs
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        HTML meta tag documentation
                      </div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default OgMetaGenerator;
