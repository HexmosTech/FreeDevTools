import { generate } from 'critical';
import CleanCSS from 'clean-css';
import fs from 'fs';

const urls = [
    'http://localhost:4321/freedevtools/',
    'http://localhost:4321/freedevtools/emojis/baby-chick/',
    'http://localhost:4321/freedevtools/svg_icons/kodak/kodak/',
    "http://localhost:4321/freedevtools/man-pages/device-files/audio-devices/snd_cmi/",
    "http://localhost:4321/freedevtools/installerpedia/tool/kamranahmedse-developer-roadmap/",
    "http://localhost:4321/freedevtools/man-pages/device-files/",
    "http://localhost:4321/freedevtools/emojis/animals-nature/"
];
const cssFile = 'assets/css/output.css';
const targetFile = 'assets/css/critical.css';

console.log(`Generating critical CSS for ${urls.join(', ')}...`);

(async () => {
    let combinedCss = '';

    for (const url of urls) {
        console.log(`Generating for ${url}...`);
        try {
            const output = await generate({
                src: url,
                css: [cssFile],
                dimensions: [
                    {
                        width: 375,
                        height: 800
                    },
                    {
                        width: 1280,
                        height: 800
                    }
                ],
                extract: false,
                inline: false,
                // Include dark mode background class to prevent flickering
                include: [
                    /^\.dark$/,           // .dark root selector only
                ],
            });

            const css = output.css || output;
            combinedCss += css;
        } catch (err) {
            console.error(`Error generating for ${url}:`, err);
        }
    }

    if (combinedCss) {
        console.log('Optimizing and deduplicating CSS...');

        const optimized = new CleanCSS({
            level: {
                2: {
                    mergeAdjacentRules: true,
                    mergeIntoShorthands: true,
                    mergeMedia: true,
                    mergeNonAdjacentRules: true,
                    mergeSemantically: false,
                    overrideProperties: true,
                    removeEmpty: true,
                    reduceNonAdjacentRules: true,
                    removeDuplicateFontRules: true,
                    removeDuplicateMediaBlocks: true,
                    removers: true,
                    restructureRules: true,
                }
            }
        }).minify(combinedCss);

        if (optimized.errors.length > 0) {
            console.error('CleanCSS errors:', optimized.errors);
        }
        if (optimized.warnings.length > 0) {
            console.warn('CleanCSS warnings:', optimized.warnings);
        }

        const finalCss = optimized.styles;

        fs.writeFileSync(targetFile, finalCss);
        console.log('Critical CSS generated successfully!');
        console.log(`Original Size: ${combinedCss.length} bytes`);
        console.log(`Optimized Size: ${finalCss.length} bytes`);
        console.log('First 500 characters:');
        console.log(finalCss.substring(0, 500));

    } else {
        console.error('No combined CSS generated');
    }
})();
