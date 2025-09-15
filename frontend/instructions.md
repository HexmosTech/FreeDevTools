# **New tool Requirements: Free SVG Icon Repository**

Create folder in pages svgicons

### **Project Overview**

You are building a static site that hosts thousands of free SVG icons to drive SEO and traffic for the main site, [Freedevtools](https://hexmos.com/freedevtools/). The site will be fully static, generated using Astro, and optimized for performance, responsiveness, and search engines.

All SVG files will be stored in one folder and loaded dynamically at build time to create static pages for each icon.

---

## **Folder Structure**

- All SVG files will be placed in the following directory:

  ```
  hex/freedevtools/frontend/src/pages/svg_pages/icons/
  ```

- Each icon will have its own page generated based on this folder’s contents.

---

## **Core Features**

### ✅ **Static Generation**

- A static page should be generated for every SVG in the folder.
- Pages should include:
  - The SVG image.
  - Icon name and description (if available).
  - SEO-friendly meta tags (title, description, structured data).

---

### ✅ **Icon Display**

- Icons should be displayed in a grid layout that adjusts to screen size.
- Clicking on an icon should open a popup or overlay with:
  - A larger view of the icon.
  - Buttons for:
    - Edit icon.
    - Download as SVG.
    - Download as PNG.
    - Copy SVG.
    - Copy PNG.
    - Adjust size (small, medium, large).

---

### ✅ **Edit Mode**

When the user clicks the **Edit** button, a new page or modal should open where they can:

- See all colors used in the icon.
- Select any color and replace it with another.
- Enter custom hex codes to change colors.
- Add background shapes (circle, square) with adjustable color and size.
- The UI should allow real-time preview of changes before downloading.
- Recommended package: `react-color` (`npm i react-color`).

---

## **Responsive Design**

### ✅ **Phone View**

- Single-column layout with vertical scrolling.
- Search bar pinned at the top.
- Icon grid with 2–3 columns depending on screen width.
- Popups or overlays should be full screen when opened.

### ✅ **Tablet View**

- 3–5 column grid layout for better browsing.
- Search bar accessible at the top.
- Popup view should be smaller than the screen but prominent.

### ✅ **Desktop View**

- Wider grid with more columns.
- Search bar visible at the top.
- Edit and download options clearly displayed without clutter.

---

## **Performance Considerations**

- All pages should be statically generated at build time.
- Metadata should be preprocessed and stored in JSON format for faster loading.
- SVGs should be optimized to reduce file size without losing quality.

---

## **SEO Requirements**

- Each icon page should have:
  - A unique URL based on the icon name.
  - SEO-friendly meta tags including title, description, and keywords.
  - Structured data markup to help search engines understand the content.

- All pages should be discoverable via search and indexed appropriately.

---

## **User Interaction Flow**

1. The user lands on the home page showing a grid of icons.
2. They can search by icon name to narrow results.
3. Clicking an icon opens a detailed view with editing and download options.
4. In edit mode, they can change colors, add shapes, and preview the result.
5. The user can download or copy the icon in multiple formats.

---

## **Additional Notes**

- Accessibility should be considered with appropriate labels and keyboard navigation.
- The UI should be intuitive and visually clean, avoiding unnecessary distractions.

### ✅ **UI Breakdown – SVG Icon Popup Selecting a svg from the UI**

**1. Popup Container**

- A modal window appearing on top of the existing page when a user selects an icon.
- Has a close button (`X`) at the top-right corner.

**2. Icon Preview Area**

- Shows the selected icon
- Centered and large enough to give a clear view.
- May have a subtle border or background to highlight the icon.

**3. Icon Information**

- Title/Name of the icon: _Beagle free icon_ is displayed near the preview.

**4. Edit Option**

- A button or link labeled **Edit icon** (likely allows editing the SVG like changing colors, shapes, etc.).

**5. Download Options**

- Two main formats are available:
  1. **PNG**
     - Green button
     - Dropdown to choose size (512px, etc.)
     - Copy option (“Copy PNG” button)

  2. **SVG**
     - Yellow button with crown icon (indicating premium feature or special option)
     - Copy option (“Copy SVG” button)

**6. Interaction Elements**

- Buttons with hover effects
- Dropdown for PNG size selection
- Copy buttons to quickly copy the icon data
- Possibly tooltips or confirmation on copying

**7. Background UI**

- Underlying page is darkened or blurred, focusing attention on the popup.

---

### ✅ Features You Can Ask Cursor to Implement

1. **Popup structure**
   - Overlay background with blur/dark layer
   - Centered modal with icon preview, buttons, and text

2. **Icon preview**
   - Display selected SVG dynamically

3. **Edit icon functionality**
   - Opens editor (color picker, shape adjustments)

4. **Download buttons**
   - PNG format with size selection
   - SVG format with copy option

5. **Copy functionality**
   - Clipboard interaction to copy PNG or SVG data

6. **Responsiveness**
   - Looks good on desktop and mobile screens

7. **Transitions**
   - Smooth open/close animations for the popup

### ✅ **UI Breakdown – Edit Icon (Within the Existing Popup)**

**1. Popup Structure**

- Opens when the user clicks **Edit icon** in the previous popup.
- Displays a centered interface with:
  - The selected icon preview on the right.
  - Editing tools on the left.

- Includes:
  - A close button (`X`) at the top-right corner.
  - A **Download** button at the top-right to save the edited icon.

---

### ✅ **Left Panel – Editing Options**

#### **Tabs/Sections**

- Contains two sections where only one can be active at a time:
  1. **Colors** (default active)
  2. **Shapes (Background)** – allows adding and customizing shapes behind the icon.

---

#### **Colors Section**

> _You can use a package like `react-color` to implement the color picker interface._

1. **Select a color from the icon**
   - Displays color swatches extracted from the icon’s current colors.
   - User clicks on a swatch to select it and edit that part of the SVG.
   - The selected color is applied in real time to the icon.

2. **Choose a new color**
   - Offers a color wheel for manual selection.
   - Allows fine control over the chosen color beyond the swatches.

---

#### **Shapes (Background) Section**

1. **Select a Shape**
   - Options include:
     - No shape (transparent background)
     - Circle
     - Square
     - Rounded square

   - User selects one shape to apply as the background.

2. **Size**
   - A slider to adjust the size of the background shape.
   - A numeric input for precise size adjustments (e.g., 100%).

3. **Color**
   - A color picker to choose the shape’s color.
   - Supports opacity adjustment and full color control.

---

### ✅ **Right Panel – Icon Preview**

1. **Live Preview**
   - Displays the icon with all current edits applied.
   - Shows a transparent background grid to indicate optional areas.

2. **Undo/Redo**
   - Provides buttons to undo or redo changes.

3. **Reset**
   - Resets the icon to its original state before edits.

---

### ✅ **Top Controls**

1. **Exit editor**
   - Returns to the previous popup without saving changes.

2. **Download**
   - Allows the user to download the edited icon in the desired format.

3. **Close**
   - Closes the entire popup.

---

### ✅ **Key Features for Implementation**

✔ **Color editing interface**

- Extracts existing colors from the SVG.
- Displays them as selectable swatches.
- Offers a color wheel for custom color selection.
- Applies changes in real time to the preview.

✔ **Undo, redo, and reset functionality**

✔ **Download button**

- Allows immediate download of the edited icon.

✔ **Preview area with transparent background**

✔ **Navigation buttons**

- Includes Exit editor and Close popup options.

✔ **Shape selection**

- Provides basic shapes for background decoration.

✔ **Size adjustment**

- Allows interactive scaling of the background shape.

✔ **Color customization**

- Enables full control over the shape’s color, including opacity.

✔ **Real-time preview**

- Updates are reflected instantly.

✔ **Reset option**

- Reverts changes and removes shapes if needed.
