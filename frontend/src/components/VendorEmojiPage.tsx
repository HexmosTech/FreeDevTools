import React, { useState } from "react";
import { toast } from "@/components/ToastProvider";

// ----------------------
// Helpers
// ----------------------

const cleanDescription = (text?: string) => {
  if (!text) return "";
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[?]{2,}/g, "")
    .trim();
};

const copyRasterImage = async (url: string) => {
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    toast.success("Image copied to clipboard!");
  } catch {
    toast.error("Failed to copy image.");
  }
};

// ----------------------
// Main Emoji Box
// ----------------------

const MainEmojiBox: React.FC<{ emoji: any; vendor: "apple" | "discord" }> = ({
  emoji,
  vendor,
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  const emojiChar =
    emoji.code || emoji.fluentui_metadata?.glyph || emoji.glyph || "";

  // Pick vendor-specific fields
  const vendorTitle = vendor === "apple" ? "Apple" : "Discord";
  const latestImage =
    vendor === "apple" ? emoji.latestAppleImage : emoji.latestDiscordImage;
  const vendorDescription =
    vendor === "apple"
      ? emoji.apple_vendor_description
      : emoji.discord_vendor_description;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 md:p-6 mb-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
      <img
        src={latestImage}
        alt={`${emoji.title || emoji.slug} ${vendorTitle} Emoji`}
        className="w-24 h-24 md:w-28 md:h-28 cursor-pointer"
        onClick={() => copyRasterImage(latestImage)}
      />

      <div className="flex-1 text-center md:text-left">
        <h1
          className="text-2xl md:text-3xl font-semibold mb-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-2"
          style={{ textTransform: "capitalize" }}
        >
          {emoji.title || emoji.slug} ({vendorTitle})
        </h1>

        {/* Copy character */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 mb-4">
          <button
            onClick={() => {
              navigator.clipboard.writeText(emojiChar);
              setCopiedCode(true);
              setTimeout(() => setCopiedCode(false), 1200);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              copiedCode
                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
            }`}
          >
            {copiedCode ? "✓ Copied!" : `Copy ${emojiChar}`}
          </button>

          {emoji.codepointsHex?.length > 0 && (
            <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
              Unicode: {emoji.codepointsHex.join(", ")}
            </div>
          )}
        </div>

        <p className="text-slate-600 dark:text-slate-300 mt-2">
          {cleanDescription(vendorDescription || emoji.description)}
        </p>
      </div>
    </div>
  );
};

// ----------------------
// Vendor Emoji Page
// ----------------------

const VendorEmojiPage: React.FC<{ emoji: any; vendor: "apple" | "discord" }> = ({
  emoji,
  vendor,
}) => {
  const evolution =
    vendor === "apple"
      ? emoji.appleEvolutionImages
      : emoji.discordEvolutionImages;

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 mt-[74px]">
      <MainEmojiBox emoji={emoji} vendor={vendor} />

      {/* Evolution */}
      {!!evolution?.length && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-center md:text-left">
            Evolution
          </h2>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {evolution.map((item: any) => (
              <div
                key={item.url}
                className="flex flex-col items-center min-w-[80px] cursor-pointer"
                onClick={() => copyRasterImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={`${vendor} Emoji ${item.version}`}
                  className="w-16 h-16 md:w-20 md:h-20 mb-1"
                />
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {item.version}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mb-12 flex justify-center md:justify-start">
        <a
          href={`/freedevtools/emojis/${emoji.slug}/`}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-300 
            bg-blue-100 dark:bg-blue-900/30 rounded-xl shadow-sm 
            hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200"
        >
          <span>See Full Emoji Details</span>
          <span className="text-base">→</span>
        </a>
      </div>
    </div>
  );
};

export default VendorEmojiPage;
