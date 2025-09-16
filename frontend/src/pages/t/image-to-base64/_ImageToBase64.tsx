import React, { useState, useEffect, useCallback } from "react";
import ToolContainer from "@/components/tool/ToolContainer";
import ToolHead from "@/components/tool/ToolHead";
import ToolBody from "@/components/tool/ToolBody";
import ToolCardWrapper from "@/components/tool/ToolCardWrapper";
import ToolContentCardWrapper from "@/components/tool/ToolContentCardWrapper";
import ImageToBase64Skeleton from "./_ImageToBase64Skeleton";
import CopyButton from "@/components/ui/copy-button";
import { toast } from "@/components/ToastProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import ToolVideo from "@/components/tool/ToolVideo";
// Image Upload Component
interface ImageUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onClear: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onFileSelect,
  selectedFile,
  onClear,
}) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        if (file.type.startsWith("image/")) {
          onFileSelect(file);
        } else {
          toast.error("Please select a valid image file");
        }
      }
    },
    [onFileSelect]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        if (file.type.startsWith("image/")) {
          onFileSelect(file);
        } else {
          toast.error("Please select a valid image file");
        }
      }
    },
    [onFileSelect]
  );

  return (
    <div className="space-y-4">
      <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
        Select Image
      </Label>

      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
          accept="image/*"
        />

        {selectedFile ? (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <ImageIcon className="w-12 h-12 text-green-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                {selectedFile.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              className="mt-2"
            >
              <X className="w-4 h-4 mr-1" />
              Remove
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <Upload className="w-12 h-12 text-slate-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                Drop your image here, or{" "}
                <span className="text-blue-600 dark:text-blue-400">browse</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Supports: PNG, JPG, JPEG, GIF, WebP, SVG
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ImageToBase64: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [base64Output, setBase64Output] = useState("");
  const [imgTagOutput, setImgTagOutput] = useState("");
  const [cssOutput, setCssOutput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleFileSelect = useCallback((file: File) => {
    setError("");
    setSelectedFile(file);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setBase64Output(result);
      setImgTagOutput(`<img src="${result}" alt="Base64 Image" />`);
      setCssOutput(`background-image: url(${result});`);
      toast.success("Image converted to Base64 successfully!");
    };
    reader.onerror = () => {
      setError("Failed to read the image file");
      toast.error("Failed to convert image");
    };
    reader.readAsDataURL(file);
  }, []);

  const handleClear = () => {
    setSelectedFile(null);
    setBase64Output("");
    setImgTagOutput("");
    setCssOutput("");
    setError("");
  };

  const truncateOutput = (text: string, maxLength: number = 100): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <ToolContainer>
      <ToolHead
        name="Image to Base64 Converter"
        description="Convert images to Base64 format instantly. Upload your image and get Base64 string, HTML img tag, and CSS background-image code. Free, fast, and secure - everything runs in your browser."
      />

      {!loaded ? (
        <ImageToBase64Skeleton />
      ) : (
        <ToolBody>
          {/* TOOL CARDS SECTION */}
          <ToolCardWrapper>
            <Card className="tool-card-bg">
              <CardContent className="space-y-6 pt-6">
                {/* Image Upload Section */}
                <ImageUpload
                  onFileSelect={handleFileSelect}
                  selectedFile={selectedFile}
                  onClear={handleClear}
                />

                {/* Error Display */}
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                    {error}
                  </div>
                )}

                {/* Output Sections */}
                {base64Output && (
                  <div className="space-y-6">
                    {/* Base64 Output */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Base64 Output
                        </Label>
                        <CopyButton text={base64Output} size="sm" />
                      </div>
                      <Textarea
                        value={base64Output}
                        readOnly
                        placeholder="Base64 result will appear here..."
                        className="h-32 font-mono text-sm bg-slate-50 dark:bg-slate-800"
                      />
                    </div>

                    {/* HTML img tag */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          HTML &lt;img&gt; tag
                        </Label>
                        <CopyButton text={imgTagOutput} size="sm" />
                      </div>
                      <Textarea
                        value={truncateOutput(imgTagOutput, 200)}
                        readOnly
                        placeholder="HTML img tag will appear here..."
                        className="h-16 font-mono text-sm bg-slate-50 dark:bg-slate-800"
                      />
                    </div>

                    {/* CSS Background */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          CSS Background
                        </Label>
                        <CopyButton text={cssOutput} size="sm" />
                      </div>
                      <Textarea
                        value={truncateOutput(cssOutput, 200)}
                        readOnly
                        placeholder="CSS background will appear here..."
                        className="h-16 font-mono text-sm bg-slate-50 dark:bg-slate-800"
                      />
                    </div>
                  </div>
                )}

                {/* Info Banner */}
                <div className="p-3 bg-blue-50 text-center dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 Your images are processed locally in your browser. No
                    files are uploaded to our servers - everything stays private
                    and secure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </ToolCardWrapper>

          {/* CONTENT CARDS SECTION */}
          <ToolContentCardWrapper>
            {/* About Base64 Image Conversion */}
            <Card>
              <CardHeader>
                <CardTitle>About Base64 Image Conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-4">
                  <p>
                    Base64 encoding converts binary image data into ASCII text
                    format, making it possible to embed images directly into
                    HTML, CSS, or JSON without requiring separate image files.
                    This is particularly useful for small images, icons, and
                    cases where you want to reduce HTTP requests.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Reduces HTTP requests by embedding images directly
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            No external dependencies - images are self-contained
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Perfect for email templates and offline applications
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Works across all browsers and platforms</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100">
                        Considerations
                      </h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>Increases file size by approximately 33%</span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Not ideal for large images due to size overhead
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Cannot be cached separately from the document
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span>
                            Best for images under 10KB for optimal performance
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Use Cases */}
            <Card>
              <CardHeader>
                <CardTitle>Common Use Cases for Base64 Images</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-slate-800 dark:text-slate-400 space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Web Development */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-blue-600 dark:text-blue-400">
                            🌐
                          </span>
                        </span>
                        Web Development
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Small Icons & Sprites:</strong> Embed
                            favicon, UI icons, and sprite images directly in CSS
                            for faster page loads.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data URIs in CSS:</strong> Use as background
                            images to eliminate additional HTTP requests for
                            decorative elements.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Inline SVG Alternative:</strong> Convert
                            small raster images to Base64 when SVG isn't
                            available or suitable.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Progressive Web Apps:</strong> Embed
                            essential images for offline functionality and
                            faster initial load.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Email & Documents */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-green-600 dark:text-green-400">
                            📧
                          </span>
                        </span>
                        Email & Documents
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Email Templates:</strong> Embed logos and
                            graphics in HTML emails to ensure they display even
                            when images are blocked.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>PDF Generation:</strong> Include images in
                            HTML-to-PDF conversion without external file
                            dependencies.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Document Export:</strong> Embed charts,
                            diagrams, and signatures in exported documents and
                            reports.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Newsletter Graphics:</strong> Include small
                            graphics and buttons in email newsletters for better
                            deliverability.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* API & Data Transfer */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-purple-600 dark:text-purple-400">
                            🔗
                          </span>
                        </span>
                        API & Data Transfer
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>JSON APIs:</strong> Include image data in
                            JSON responses for profile pictures, thumbnails, and
                            small graphics.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Configuration Files:</strong> Embed default
                            images and icons in application configuration files.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Data Export:</strong> Include visual
                            elements when exporting data to formats that support
                            embedded images.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Offline Storage:</strong> Store images in
                            localStorage or IndexedDB for offline-capable
                            applications.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Mobile & App Development */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-lg flex items-center">
                        <span className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-orange-600 dark:text-orange-400">
                            📱
                          </span>
                        </span>
                        Mobile & App Development
                      </h4>
                      <ul className="space-y-3 ml-11">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Hybrid Apps:</strong> Embed small images in
                            Cordova, PhoneGap, or React Native applications for
                            better performance.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>WebView Content:</strong> Include images in
                            HTML content loaded in mobile app WebViews without
                            file system access.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>Push Notifications:</strong> Include small
                            images in rich push notifications for better user
                            engagement.
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <div>
                            <strong>App Previews:</strong> Generate preview
                            images and thumbnails that can be easily shared or
                            displayed.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>💡 Pro Tip:</strong> Base64 encoding is most
                      effective for images smaller than 10KB. For larger images,
                      consider using traditional image files with proper caching
                      headers, WebP format for better compression, or lazy
                      loading techniques for optimal performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <ToolVideo
              title="Learn More: What are Base64 Encoded Images and why are they used?"
              description="This video explains the concept of Base64-encoded images and their use cases in web development, such as embedding images directly into HTML or CSS files."
              videoUrl="https://www.youtube.com/embed/MI0W6FdDjTY"
            />
          </ToolContentCardWrapper>
        </ToolBody>
      )}
    </ToolContainer>
  );
};

export default ImageToBase64;
