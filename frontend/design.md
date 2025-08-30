1. Do not use sizes for H1, H2, H3, H4, H5, H6 & P like text-sm, md:text-lg, lg:text-2xl like that. We have defined rules globally so do not mention sizes for these elements.
2. Read the folder @src/components/ui for Shadcn components, whreever required, use them.
3. For copy butto use @src/components/ui/copy-button.tsx component
4. Use react-toastify for adding toast where ever applicable @src/components/ToastProvider.tsx
5. There is skeleton present in the same direcotry of the tool, after creating the tool, update the skeleton for handling the loader ex name @src/pages/tool-name/\_ToolNameSkeleton.tsx
