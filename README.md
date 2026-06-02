# AD Mark Logistics Website

A premium, modern, and highly interactive enterprise web presence for **AD Mark Logistics**—India's leading supply chain and logistics partner. Built utilizing semantic HTML5, custom utility-driven styling (via Tailwind CSS and custom stylesheets), and robust vanilla JavaScript.

---

## 🏗️ Project Directory Structure

```filepath
ADMark_website/
├── README.md                          # Project documentation and architectural overview
├── assets/                            # Global raw media assets and high-res imagery
│   ├── container-crane-operation.png
│   ├── container-grid-wall.png
│   ├── container-road-perspective.png
│   ├── container-symmetry-corridor.png
│   ├── container-worker-corridor.png
│   ├── container-yard-stack-blocks.png
│   ├── container-yard-sunset.png
│   ├── container-yard-wet-reflection.png
│   ├── port-aerial-topview.png
│   ├── port-container-overview.png
│   └── port-logistics-terminal.png
└── admark-website/                    # Core web application directory
    ├── index.html                     # Homepage (End-to-End Solutions, Bento layout, Industry tabs)
    ├── about.html                     # Corporate details, leadership profiles, mission/values
    ├── warehousing.html               # Service: Grade-A Industrial Warehousing & 3PL
    ├── transport.html                 # Service: High-efficiency Surface Transport (FTL/PTL)
    ├── cfs.html                       # Service: Container Freight Station Operations
    ├── consulting.html                # Service: Supply Chain Design & Consulting
    ├── control-tower.html             # Service: Control Tower & Real-time Operations Analytics
    ├── components/                    # Reusable HTML template components
    │   ├── navbar.html                # Responsive sticky navigation bar with hover dropdowns
    │   └── footer.html                # Unified corporate footer with columns and contact details
    ├── css/                           # Stylesheets
    │   └── styles.css                 # Custom industrial designs, gradients, shadow classes, and keyframes
    ├── js/                            # Interactive scripts
    │   └── main.js                    # Dynamic component loaders, observer animations, tab switchers
    └── assets/                        # Localized web images (symlinked/mirrored or custom web crops)
```

---

## 🧩 Architectural Highlights & Core Technologies

### 1. **Core Web Stack**
*   **Structure:** Semantic HTML5 for clean, accessible markup.
*   **Styling:** Modern styling driven by **Tailwind CSS** (via CDN for flexible, light-weight components) coupled with a dedicated custom system stylesheet (`css/styles.css`).
*   **Behavior:** 100% pure **Vanilla JavaScript** (`js/main.js`) with zero third-party framework overhead, yielding sub-millisecond initial loading times.

### 2. **Client-Side Component Loading Framework**
To maximize code reusability without requiring a full server-side rendering stack, the website implements a custom client-side HTML dynamic inclusion script inside `js/main.js`:
*   Target pages contain dynamic component container hooks:
    ```html
    <div id="global-navbar" class="sticky-navbar"></div>
    ...
    <div id="global-footer"></div>
    ```
*   `initComponentLoader()` asynchronously `fetch`es the reusable component templates (`components/navbar.html` and `components/footer.html`), injects them into target page DOM containers, and fires callback routines (e.g., drawer binders and link activation).

### 3. **Dynamic Navigation Link Highlighting**
The navigation bar automatically parses the active browser viewport URL path via `initActiveNavHighlights()`:
*   Matches active paths to navigation and mobile drawer elements.
*   Resolves active states for exact pages or dynamic child services dropdown items, highlighting the parent elements (e.g., keeping "Services" active when viewing `control-tower.html`).

### 4. **Industrial-Grade Animation Engine**
The site features custom-tailored micro-interactions and transitions to establish a premium aesthetic:
*   **Viewport Scroll Reveal:** A high-performance `IntersectionObserver` detects when grid panels, text contents, or bento cards enter the viewport and triggers smooth fade/slide-up transitions via the `.reveal` utility.
*   **Statistic Numeric Counters:** An optimized rendering loop (`requestAnimationFrame`) drives smooth decimal-precise numeric increment animations for enterprise metrics (e.g., `2.5M+` sq. ft. storage) once they roll into the viewport.
*   **Infinite Image Marquee:** Seamless, high-framerate horizontal image sliders running via pure CSS keyframe engines.
*   **Interactive Tabs:** Clean cross-fade states and state tracking for the sector tabs (e.g., Retail, Pharma, Industrial) utilizing an elegant tab content lookup structure.

---

## 🚀 How to Run Locally

Since the project uses asynchronous JavaScript fetch queries (`fetch()`) to inject the `navbar.html` and `footer.html` elements dynamically from the `components/` directory, **opening the HTML files directly from your file system (using the `file://` protocol) will trigger browser CORS restrictions.**

To run the project, serve it using any local HTTP web server.

### Option A: Using VS Code Live Server (Recommended)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Click the **Go Live** button in the status bar at the bottom-right of the window.

### Option B: Using Python
If you have Python installed, run one of the following terminal commands in the root of the workspace directory:
```bash
# Python 3
python -m http.server 8000
```
Then, open `http://localhost:8000/admark-website/index.html` in your browser.

### Option C: Using Node.js (npx)
If you have Node.js installed, run:
```bash
npx serve .
```
Then, open the URL provided by the command in your browser.
