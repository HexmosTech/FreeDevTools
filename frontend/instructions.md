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

**4. Edit Option**

- A button or link labeled **Edit icon** (likely allows editing the SVG like changing colors, shapes, etc.).

### ✅ **UI Breakdown – Edit Icon )**

- Opens when the user clicks **Edit icon** in the page.
- From left there should be one more container very thin like showing a sidbear outside the canvas on left.

- Includes:
  - A close button (`X`) at the top-right corner instead of edit icon meaning edit canvas is activated

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

### ✅ **Inside the canvas – Icon Preview**

1. **Live Preview**
   - Displays the icon with all current edits applied.
   - Shows a transparent background grid to indicate optional areas.

2. **Undo/Redo**
   - Provides buttons to undo or redo changes.

3. **Reset**
   - Resets the icon to its original state before edits.

---

### ✅ **Top Right Controls**

1. **Exit editor**
   - Returns to the previous popup without saving changes.

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
