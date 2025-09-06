### Design Philosophy & Goals
The purpose of this specification is to ensure that every tool we build follows a consistent design language. All tools that are built with this design instructions should be consistent.

Our goals are:
* Consistency: Every tool should look and behave as part of the same ecosystem.
* Reusability: Use only predefined components and classnames, so styles and behaviors remain unified.
* Simplicity: Avoid ad-hoc HTML or custom classes that drift from the shared design system.
* Scalability: By following these standards, new tools can be added quickly without reinventing layouts or styles.


### General Instructions

1. Do not use sizes for H1, H2, H3, H4, H5, H6 & P like text-sm, md:text-lg, lg:text-2xl like that. We have defined rules globally so do not mention sizes for these elements.
2. Read the folder @src/components/ui for Shadcn components, Don't use any component outside of @src/components/ui. If you think any component is needed for your implementation and it is not present here - DO NOT PROCEED further, but rather ask on how to proceed. Usually a new component will have to be added in this directory.
3. For copy button use @src/components/ui/copy-button.tsx component.
4. Use react-toastify for adding toast where ever applicable @src/components/ToastProvider.tsx.
5. There is a skeleton loader component present in the same directory of the tool, after creating the tool, update the skeleton for handling the loader (example: @src/pages/tool-name/_ToolNameSkeleton.tsx), so the loading state is more accurate.
6. Do not modify any of the standard components in src/components/ui and src/components/tools. If a change is absolutely necessary, then ask before doing so.


### Making the Tool Body

1. Ensure each component is a card component from @src/components/ui/card.tsx. 
2. Differentiate between Tool and Contents. Tool Cards should be wrapped under the ToolCardWrapper component. Other cards should be wrapped under ToolContentCardWrapper. These are available from src/components/tool/ToolCardWrapper.tsx and src/components/tool/ToolContentCardWrapper.tsx
3. Cards inside ToolCardWrapper should have the tool-card-bg classname. No classname needed for the cards inside ToolContentCardWrapper.
4. Card titles should have default font weight.
5. The ToolCardWrapper and the ToolContentCardsWrapper should be wrapped under ToolBody component (Located in src/components/tool/ToolBody.tsx )


### Making the UI Responsive

1. In larger screens, when layouts leave excessive unused space (e.g., textboxes, textareas, dropdowns, or input fields stretching unnecessarily across the full width, or cards looking too wide with lots of empty padding), adjust the structure as follows:
    1.1 Wrap the Cards under ToolGridContainer component (Located in src/components/tools/ToolGridContainer.tsx).
    1.2 Cards wrapped under ToolCardWrapper should have tool-card-bg-grid classname
    1.3 Cards wrapped under ToolContentCardsWrapper should have tool-content-card-bg-grid
    1.4 Do not modify the existing ToolGridContainer component.
2. For making the UI compatible with smaller screens, consider the following
    2.1 Use only the standard layout components (ToolBody, ToolCardWrapper, ToolContentCardWrapper, Card) instead of raw HTML containers. This ensures consistent structure, styling, and responsive behavior across all tools.

