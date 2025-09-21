## How to Test SEO for Your Project

Once your tool is partially or fully completed, you can run validation steps to identify any SEO issues.

### Steps for Comprehensive SEO Testing

1. Open the AI Chat window in your IDE (such as Cursor or Copilot).
2. Select the relevant files for your tool—mainly the main source file, `tools.ts` (which contains configurations and details), and any subcomponents if applicable.
3. Attach the `seo.md` file.
4. Run this prompt:  
   `Go through all the attached files of this tool [tool name] and find any SEO issues based on the instructions provided in #seo.md file.`
5. Wait for the analysis to complete, then fix any issues found.

### Testing Specific Sections

If you want to test a particular section (for example, the meta description):

1. Attach all relevant files.
2. Run the prompt:  
   `Check the meta description of the tool [tool name] is valid based on seo.md file.`

## Improving Results

If you find any SEO issues in your tool that are not addressed in `seo.md`, you can improve the file by adding those issues along with validation methods.  
Make sure to follow the same format for any new sections you

## SEO testing tools

- https://tools.backlinko.com/seo-checker
- https://pagespeed.web.dev/analysis
- https://seositecheckup.com/
- https://rankmath.com/tools/seo-analyzer/
