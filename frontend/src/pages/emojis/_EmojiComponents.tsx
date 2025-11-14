import toast from '@/components/ToastProvider';
import { useState } from 'react';

// Shared interfaces
interface Shortcode {
  code: string;
  vendor: {
    title: string;
  };
}

interface ImageVariant {
  type: string;
  url: string;
}

interface CopyButtonsProps {
  emojiChar: string;
  shortcodes?: { [vendor: string]: string };
}

export function CopyButtons({ emojiChar, shortcodes }: CopyButtonsProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedVendor, setCopiedVendor] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: 'code' | 'vendor', vendor?: string) => {
    const onSuccess = () => {
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } else if (type === 'vendor' && vendor) {
        setCopiedVendor(vendor);
        setTimeout(() => setCopiedVendor(null), 2000);
      }
    };

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        onSuccess();
        return;
      }
    } catch {
      // fallback
    }

    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) onSuccess();
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {/* Copy Emoji */}
      <button
        onClick={() => copyToClipboard(emojiChar, 'code')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          copiedCode
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30'
        }`}
      >
        {copiedCode ? '✓ Copied!' : `Copy ${emojiChar}`}
      </button>

      {/* Vendor Shortcodes */}
      {shortcodes && Object.keys(shortcodes).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(shortcodes).map(([vendor, code]) => (
            <button
              onClick={() => copyToClipboard(vendor, code)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors min-w-[60px] text-center ${
                copiedVendor === vendor
                  ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {copiedVendor === vendor ? 'Copied!' : 'Copy'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
// ImageVariants Component
interface ImageVariantsProps {
  emojiId: string;
  emojiTitle: string;
  variants: ImageVariant[];
}

export function ImageVariants({
  emojiId,
  emojiTitle,
  variants,
}: ImageVariantsProps) {
  const copySvgAsPng = async (svgUrl: string) => {
    try {
      const response = await fetch(svgUrl);
      const svgText = await response.text();

      const svgBlob = new Blob([svgText], { type: 'image/svg+xml' });
      const svgUrlBlob = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.src = svgUrlBlob;

      img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width * 5 || 1024;
        canvas.height = img.height * 5 || 1024;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
          if (!blob) return;
          await navigator.clipboard.write([
            new ClipboardItem({ [blob.type]: blob }),
          ]);
          toast.success('Image copied to clipboard!');
        }, 'image/png');
      };
    } catch (err) {
      console.error('Failed to copy SVG:', err);
      toast.error('Failed to copy image.');
    }
  };

  const copyRasterImage = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);

      toast.success('Image copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy image:', err);
      toast.error('Failed to copy image.');
    }
  };

  const handleCopy = async (variant: ImageVariant) => {
    try {
      let blob: Blob;
  
      // Step 1: Get blob from base64 or URL
      if (variant.url.startsWith("data:")) {
        const [header, base64] = variant.url.split(",");
        const mimeMatch = header.match(/:(.*?);/);
        const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
        const binary = atob(base64);
        const len = binary.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
        blob = new Blob([bytes], { type: mime });
      } else {
        const res = await fetch(variant.url);
        blob = await res.blob();
      }
  
      // Step 2: Convert unsupported types (WebP, SVG) → PNG for clipboard
      if (
        blob.type === "image/webp" ||
        blob.type === "image/svg+xml" ||
        blob.type === "application/octet-stream"
      ) {
        const img = await createImageBitmap(blob);
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        blob = await new Promise<Blob>((resolve) =>
          canvas.toBlob((b) => resolve(b!), "image/png")
        );
      }
  
      // Step 3: Write final PNG or supported image to clipboard
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob }),
      ]);
  
      toast.success("Image copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy image:", err);
      toast.error("❌ Failed to copy image.");
    }
  };
  
  

  if (variants.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        Image Variants
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {variants.map((variant) => (
          <div key={variant.type} className="text-center">
            <div
              className={`${variant.type === 'High Contrast'
                  ? 'bg-slate-50 dark:bg-white'
                  : 'bg-slate-50 dark:bg-slate-800'
                } rounded-lg p-4 mb-2 border border-slate-200 dark:border-slate-700 cursor-pointer hover:opacity-80 transition`}
              onClick={() => handleCopy(variant)}
            >
              <img
                src={variant.url}
                alt={`${emojiTitle} ${variant.type}`}
                className="w-16 h-16 mx-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {variant.type}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ShortcodesTable Component
interface ShortcodesTableProps {
  emojiId: string;
  shortcodes: Record<string, string>; // vendor → shortcode
}
export function ShortcodesTable({ emojiId, shortcodes }: ShortcodesTableProps) {
  const [copiedVendor, setCopiedVendor] = useState<string | null>(null);

  const copyToClipboard = async (vendor: string, text: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        setCopiedVendor(vendor);
        setTimeout(() => setCopiedVendor(null), 2000);
        return;
      }
    } catch {}
  
    // fallback
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);
  
      if (success) {
        setCopiedVendor(vendor);
        setTimeout(() => setCopiedVendor(null), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };
  

  const entries = Object.entries(shortcodes);
  if (entries.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
        Shortcodes
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-700">
              <th className="text-left py-2 font-medium text-slate-600 dark:text-slate-400">Platform</th>
              <th className="text-left py-2 font-medium text-slate-600 dark:text-slate-400">Shortcode</th>
              <th className="text-left py-2 font-medium text-slate-600 dark:text-slate-400">Action</th>
            </tr>
          </thead>

          <tbody>
            {entries.map(([vendor, code]) => (
              <tr key={vendor} className="border-b border-slate-100 dark:border-slate-800">
                <td className="py-3 text-slate-900 dark:text-slate-100 capitalize">
                  {vendor}
                </td>
                <td className="py-3 font-mono text-slate-700 dark:text-slate-300">
                  {code}
                </td>
                <td className="py-3">
                <button
                    onClick={() => copyToClipboard(vendor, code)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      copiedVendor === vendor
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {copiedVendor === vendor ? 'Copied!' : 'Copy'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}