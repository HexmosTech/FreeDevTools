1. Do not use sizes for H1, H2, H3, H4, H5, H6 & P like text-sm, md:text-lg, lg:text-2xl like that. We have defined rules globally so do not mention sizes for these elements.
2. Read the folder @src/components/ui for Shadcn components, wherever required, use them.
3. For copy button use @src/components/ui/copy-button.tsx component.
4. Use react-toastify for adding toast where ever applicable @src/components/ToastProvider.tsx.
5. There is skeleton present in the same directory of the tool, after creating the tool, update the skeleton for handling the loader (example: @src/pages/tool-name/_ToolNameSkeleton.tsx).
6. Ensure the implementation is responsive across all screen sizes.
7. Ensure each component is in a card. Differentiate between Tool and Contents. Tool Cards should have className="bg-gray-200 dark:bg-slate-900" classname so it can be differentiated from the rest of the contents. Remaining contents should not have a color defined in classname. Also group the tool cards and the content cards separately without altering its structure. Card titles should have default font weight.


### If there is large amounts of unused spaces
1. Wrap the Cards under ToolGridContainer component with the card having w-full break-inside-avoid mb-6 classname
2. Do not modify the existing ToolGridContainer component.

