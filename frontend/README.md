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

## Pull DBs to local repo

Run `make pull-db` in FreeDevTools/frontend folder.

1. List all LFS-tracked files

```
git lfs ls-files
```

2. Check whether the actual files (not pointers) are downloaded

```
git lfs status
```

3.

```
git lfs fetch --all
git lfs ls-files --size
```

## Pull DBs from blackblaze

If you're adding db to a new category or updating the DB, first upload it.
https://tree-iad1-0000.secure.backblaze.com/b2_browse_files2.htm
<img width="716" height="439" alt="image" src="https://github.com/user-attachments/assets/66f2635d-3e34-4498-b589-d7bca3c0c7a6" />


Then in buid_deploy.yml

> - name: Download database files from Backblaze B2

Add your db name in that file, do not commit the db to repo.
