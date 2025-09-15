import { useState } from 'react';
import type { EmojiData, EmojiImageVariants } from '../lib/emojis';

interface EmojiPageProps {
  emoji: EmojiData;
  images: EmojiImageVariants;
}

export default function EmojiPage({ emoji, images }: EmojiPageProps) {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedShortcode, setCopiedShortcode] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: 'code' | 'shortcode', shortcode?: string) => {
    const onSuccess = () => {
      if (type === 'code') {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      } else if (type === 'shortcode' && shortcode) {
        setCopiedShortcode(shortcode);
        setTimeout(() => setCopiedShortcode(null), 2000);
      }
    };

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        onSuccess();
        return;
      }
    } catch (err) {
      // fall through to legacy
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
      if (successful) {
        onSuccess();
      } else {
        throw new Error('execCommand copy failed');
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const cleanDescription = (description?: string) => {
    if (!description) return '';
    return description
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
      .replace(/&amp;/g, '&') // Replace &amp; with &
      .replace(/&lt;/g, '<') // Replace &lt; with <
      .replace(/&gt;/g, '>') // Replace &gt; with >
      .replace(/&quot;/g, '"') // Replace &quot; with "
      .replace(/&#39;/g, "'") // Replace &#39; with '
      .trim();
  };

  const getImageVariants = () => {
    const variants = [];
    if (images['3d']) variants.push({ type: '3D', url: images['3d'] });
    if (images['color']) variants.push({ type: 'Color', url: images['color'] });
    if (images['flat']) variants.push({ type: 'Flat', url: images['flat'] });
    if (images['high_contrast']) variants.push({ type: 'High Contrast', url: images['high_contrast'] });
    return variants;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Large Emoji Display */}
          <div className="text-8xl md:text-9xl flex-shrink-0">
            {emoji.code}
          </div>
          
          {/* Emoji Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {emoji.title || emoji.fluentui_metadata?.cldr || emoji.slug || 'Unknown'}
            </h1>
            
            {emoji.alsoKnownAs && emoji.alsoKnownAs.length > 0 && (
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Also known as: {emoji.alsoKnownAs.join(', ')}
              </p>
            )}
            
            {/* Copy Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button
                onClick={() => copyToClipboard(emoji.code, 'code')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  copiedCode
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30'
                }`}
              >
                {copiedCode ? '✓ Copied!' : `Copy ${emoji.code}`}
              </button>
              
              {emoji.shortcodes && emoji.shortcodes.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {emoji.shortcodes.slice(0, 3).map((shortcode) => (
                    <button
                      key={shortcode.code}
                      onClick={() => copyToClipboard(shortcode.code, 'shortcode', shortcode.code)}
                      className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                        copiedShortcode === shortcode.code
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                      }`}
                    >
                      {copiedShortcode === shortcode.code ? '✓' : shortcode.code}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Unicode Info */}
            {emoji.codepointsHex && emoji.codepointsHex.length > 0 && (
              <div className="text-sm text-slate-500 dark:text-slate-400">
                Unicode: {emoji.codepointsHex.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      {emoji.description && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
            Description
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {cleanDescription(emoji.description)}
          </p>
        </div>
      )}

      {/* Image Variants */}
      {getImageVariants().length > 0 && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Image Variants
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {getImageVariants().map((variant) => (
              <div key={variant.type} className="text-center">
                <div className={`${variant.type === 'High Contrast' ? 'bg-slate-50 dark:bg-white' : 'bg-slate-50 dark:bg-slate-800'} rounded-lg p-4 mb-2 border border-slate-200 dark:border-slate-700`}> 
                  <img
                    src={variant.url}
                    alt={`${emoji.title || emoji.fluentui_metadata?.cldr || emoji.slug || 'Unknown'} ${variant.type}`}
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
      )}

      {/* Technical Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Version Info */}
        {(emoji.emojiVersion || emoji.version) && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Version Information
            </h3>
            <div className="space-y-2 text-sm">
              {emoji.emojiVersion && (
                <div>
                  <span className="font-medium text-slate-600 dark:text-slate-400">Emoji Version:</span>
                  <span className="ml-2 text-slate-900 dark:text-slate-100">{emoji.emojiVersion.name}</span>
                </div>
              )}
              {emoji.version && (
                <div>
                  <span className="font-medium text-slate-600 dark:text-slate-400">Unicode Version:</span>
                  <span className="ml-2 text-slate-900 dark:text-slate-100">{emoji.version.name}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Keywords */}
        {emoji.fluentui_metadata?.keywords && emoji.fluentui_metadata.keywords.length > 0 && (
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
              Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {emoji.fluentui_metadata.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-blue-900/20 dark:text-blue-400"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Shortcodes Table */}
      {emoji.shortcodes && emoji.shortcodes.length > 0 && (
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
                {emoji.shortcodes.map((shortcode, index) => (
                  <tr key={index} className="border-b border-slate-100 dark:border-slate-800">
                    <td className="py-3 text-slate-900 dark:text-slate-100">
                      {shortcode.vendor.title}
                    </td>
                    <td className="py-3 font-mono text-slate-700 dark:text-slate-300">
                      {shortcode.code}
                    </td>
                    <td className="py-3">
                      <button
                        onClick={() => copyToClipboard(shortcode.code, 'shortcode', shortcode.code)}
                        className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                          copiedShortcode === shortcode.code
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                        }`}
                      >
                        {copiedShortcode === shortcode.code ? 'Copied!' : 'Copy'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Additional Data */}
      {emoji.emoji_net_data && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Additional Information
          </h2>
          <div className="space-y-3 text-sm">
            {emoji.emoji_net_data.category && (
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Category:</span>
                <span className="ml-2 text-slate-900 dark:text-slate-100">{emoji.emoji_net_data.category}</span>
              </div>
            )}
            {emoji.emoji_net_data.definition && (
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Definition:</span>
                <p className="mt-1 text-slate-700 dark:text-slate-300">
                  {cleanDescription(emoji.emoji_net_data.definition)}
                </p>
              </div>
            )}
            {/* Parts of speech from senses */}
            {emoji.emoji_net_data.senses?.adjectives && Array.isArray(emoji.emoji_net_data.senses.adjectives) && emoji.emoji_net_data.senses.adjectives.length > 0 && (
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Adjectives:</span>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {emoji.emoji_net_data.senses.adjectives.flatMap((obj: Record<string, string[]>) => Object.values(obj)).flat().slice(0, 12).map((desc: string, idx: number) => (
                    <li key={`adj-${idx}`}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
            {emoji.emoji_net_data.senses?.verbs && Array.isArray(emoji.emoji_net_data.senses.verbs) && emoji.emoji_net_data.senses.verbs.length > 0 && (
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Verbs:</span>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {emoji.emoji_net_data.senses.verbs.flatMap((obj: Record<string, string[]>) => Object.values(obj)).flat().slice(0, 12).map((desc: string, idx: number) => (
                    <li key={`verb-${idx}`}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
            {emoji.emoji_net_data.senses?.nouns && Array.isArray(emoji.emoji_net_data.senses.nouns) && emoji.emoji_net_data.senses.nouns.length > 0 && (
              <div>
                <span className="font-medium text-slate-600 dark:text-slate-400">Nouns:</span>
                <ul className="mt-2 list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  {emoji.emoji_net_data.senses.nouns.flatMap((obj: Record<string, string[]>) => Object.values(obj)).flat().slice(0, 12).map((desc: string, idx: number) => (
                    <li key={`noun-${idx}`}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
