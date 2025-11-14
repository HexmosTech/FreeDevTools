import React from "react";
import { useState } from 'react';
import { toast } from "@/components/ToastProvider"; // Adjust the import path as needed

type EvolutionImage = {
  url: string;
  version: string;
};
type EmojiData = {
  title: string;
  slug: string;
  unicode?: string;
  latestAppleImage: string;
  description?: string;
  apple_vendor_description?: string;
  appleEvolutionImages: EvolutionImage[];
};

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
    const response = await fetch(url);
    const blob = await response.blob();
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    toast.success("Image copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy image:", err);
    toast.error("Failed to copy image.");
  }
};

const MainEmojiBox: React.FC<{ emoji: any }> = ({ emoji }) => {
  // Helpers for copy feedback
  const [copiedCode, setCopiedCode] = useState(false);
  const emojiChar = emoji.code || emoji.fluentui_metadata?.glyph || (emoji as any).glyph || '';


  // Copy emoji character to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(true);

      setTimeout(() => setCopiedCode(false), 1200);
    } catch (err) {
      setCopiedCode(false);
    }
  };

  return (
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4 md:p-6 mb-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
  <img
    src={emoji.latestAppleImage}
    alt={`${emoji.title  || emoji.slug || emoji.fluentui_metadata?.cldr} Apple Emoji`}
    className="w-24 h-24 md:w-28 md:h-28 cursor-pointer"
    onClick={() => copyRasterImage(emoji.latestAppleImage)}
  />
  <div className="flex-1 text-center md:text-left">
    <h1 className="text-2xl md:text-3xl font-semibold mb-2 flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-2"   style={{ textTransform: 'capitalize' }}>
      {emoji.title  || emoji.slug || emoji.fluentui_metadata?.cldr} (Apple)
      <button
        className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 mt-1 md:mt-0"
        onClick={() => navigator.clipboard.writeText(emoji.latestAppleImage)}
        title="Copy image URL"
      >
        {/* Copy Icon */}
      </button>
    </h1>
    {/* Copy Buttons and Unicode Info */}
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 mb-4">
      <button
        onClick={() => copyToClipboard(emojiChar, 'code')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          copiedCode
            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
            : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30'
        }`}      >
                        {copiedCode ? '✓ Copied!' : `Copy ${emojiChar}`}

      </button>
      {emoji.codepointsHex && emoji.codepointsHex.length > 0 && (
        <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
          Unicode: {emoji.codepointsHex.join(', ')}
        </div>
      )}
    </div>

    {/* Description */}
    <p className="text-slate-600 dark:text-slate-300 mt-2">{cleanDescription(emoji.apple_vendor_description || emoji.description)}</p>
  </div>
</div>

          );
  };



const VendorEmojiPage: React.FC<{ emoji: EmojiData }> = ({ emoji }) => (
  <div className="max-w-6xl mx-auto px-4 md:px-6 mt-[74px]">
    {/* AdBanner can still be a client:only astro component, or use React if desired */}
    {/* <AdBanner /> */}

    <MainEmojiBox emoji={emoji}/>

    {/* Evolution Section */}
    {!!emoji.appleEvolutionImages?.length && (
      <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Evolution</h2>
      
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        {emoji.appleEvolutionImages.map((item) => (
          <div
            key={item.url}
            className="flex flex-col items-center min-w-[80px] cursor-pointer"
            onClick={() => copyRasterImage(item.url)}
          >
            <img
              src={item.url}
              alt={`Apple Emoji ${item.version}`}
              className="w-16 h-16 md:w-20 md:h-20 mb-1"
            />
            <span className="text-sm text-slate-500 dark:text-slate-400">{item.version}</span>
          </div>
        ))}
      </div>

    </div>

    )}

    {/* Link Back to Original Emoji Button */}
    <div className="mb-12 flex justify-center md:justify-start">
      <a
        href={`/freedevtools/emojis/${emoji.slug}/`}
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-blue-700 dark:text-blue-300 
                  bg-blue-100 dark:bg-blue-900/30 rounded-xl shadow-sm 
                  hover:bg-blue-200 dark:hover:bg-blue-900/50 
                  hover:shadow-md transition-all duration-200"
      >
        <span>See Full Emoji Details</span>
        <span className="text-base">→</span>
      </a>
    </div>
  </div>
);

export default VendorEmojiPage;
