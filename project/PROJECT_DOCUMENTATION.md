# Spark Soul - Project Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies & Languages Used](#technologies--languages-used)
3. [Project Structure](#project-structure)
4. [File-by-File Explanation](#file-by-file-explanation)
5. [Animations & Effects](#animations--effects)
6. [Color Scheme & Design](#color-scheme--design)
7. [How to Run the Project](#how-to-run-the-project)
8. [How to Modify](#how-to-modify)

---

## 🎯 Project Overview

**Spark Soul** is a modern, single-page e-commerce website for a handcrafted jewelry and gift hamper business. The website showcases:
- Handmade jewelry (bracelets, rings, accessories)
- Customized gift hampers
- Gallery of products
- Contact information and social media links

**Purpose**: To provide an elegant online presence for a small creative business that specializes in handcrafted items.

---

## 💻 Technologies & Languages Used

### Core Technologies
1. **React 18.3.1** - JavaScript library for building user interfaces
2. **TypeScript 5.5.3** - Typed superset of JavaScript for better code quality
3. **Vite 5.4.2** - Fast build tool and development server
4. **Tailwind CSS 3.4.1** - Utility-first CSS framework for styling

### Animation & UI Libraries
1. **Framer Motion 12.23.24** - Animation library for smooth transitions and effects
2. **Lucide React 0.344.0** - Icon library for modern, clean icons

### Development Tools
1. **ESLint** - Code linting and quality checking
2. **PostCSS & Autoprefixer** - CSS processing
3. **TypeScript ESLint** - TypeScript-specific linting rules

---

## 📁 Project Structure

```
project/
├── public/                          # Static assets (images)
│   ├── bracelet.jpeg
│   ├── brown hair clip.jpeg
│   ├── celebration hamper.png
│   ├── evil eye bracelet.jpeg
│   ├── green-buta-shaped-stone-jewelry.jpg
│   ├── lip gloss.jpeg
│   ├── Pink Flower Hair Accessory.jpeg
│   └── Silver Ring.jpeg
│
├── src/                             # Source code
│   ├── components/                  # Reusable components
│   │   ├── Navbar.tsx              # Navigation bar
│   │   └── Footer.tsx              # Footer section
│   │
│   ├── pages/                       # Page sections
│   │   ├── HomePage.tsx            # Landing/hero section
│   │   ├── AboutPage.tsx           # About the business
│   │   ├── ProductsPage.tsx        # Product catalog
│   │   ├── GalleryPage.tsx         # Image gallery
│   │   └── ContactPage.tsx         # Contact information
│   │
│   ├── App.tsx                      # Main application component
│   ├── main.tsx                     # Application entry point
│   ├── index.css                    # Global styles
│   └── vite-env.d.ts               # TypeScript declarations
│
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── vite.config.ts                  # Vite configuration
└── eslint.config.js                # ESLint configuration
```

---

## 📄 File-by-File Explanation

### 1. **index.html**
- **Purpose**: The main HTML file that serves as the entry point
- **Key Elements**:
  - Contains a `<div id="root">` where React app mounts
  - Links to the main TypeScript file (`main.tsx`)

### 2. **src/main.tsx**
- **Purpose**: Entry point for the React application
- **What it does**:
  ```typescript
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  ```
  - Finds the `root` element in HTML
  - Renders the `App` component inside React StrictMode
  - StrictMode helps identify potential problems in the app

### 3. **src/App.tsx**
- **Purpose**: Main application component that manages the entire website
- **Key Features**:
  - **State Management**:
    - `activeSection`: Tracks which section user is viewing
    - `isLoading`: Controls loading screen display
  - **Loading Animation**: Shows a 2-second animated splash screen with rotating star
  - **Scroll Detection**: Automatically updates active section based on scroll position
  - **Navigation**: Smooth scrolling between sections
- **Components Used**: Navbar, Footer, and all page components

### 4. **src/index.css**
- **Purpose**: Global styles and custom CSS utilities
- **Key Features**:
  - **Font Imports**: 
    - Playfair Display (serif, for headings)
    - Poppins (sans-serif, for body text)
    - Great Vibes (cursive, for decorative text)
  - **Custom Utilities**:
    - `.text-gradient`: Gold to pink gradient text
    - `.bg-glass`: Glassmorphism effect
    - `.line-clamp-2`: Truncate text to 2 lines
  - **Custom Scrollbar**: Styled with gradient colors
  - **Selection Color**: Pink highlight when text is selected

### 5. **src/components/Navbar.tsx**
- **Purpose**: Top navigation bar with menu
- **Features**:
  - **Sticky Navigation**: Stays at top while scrolling
  - **Background Change**: Becomes opaque when scrolled down
  - **Active Section Indicator**: Underline shows current section
  - **Mobile Menu**: Hamburger menu for small screens
  - **Smooth Animations**: Hover effects and transitions
- **Navigation Items**: Home, About, Products, Gallery, Contact

### 6. **src/components/Footer.tsx**
- **Purpose**: Bottom section with links and information
- **Sections**:
  - **Left**: Brand name and description
  - **Middle**: Quick links to all sections
  - **Right**: Social media links (Instagram, Email)
  - **Bottom**: Copyright and designer credit
- **Features**:
  - Smooth scroll to sections
  - Animated social media icons
  - Responsive grid layout

### 7. **src/pages/HomePage.tsx**
- **Purpose**: Hero/landing section with main call-to-action
- **Features**:
  - **Background**: Full-screen image with gradient overlay
  - **Animated Elements**:
    - Rotating sparkle icon
    - Fade-in text animations
    - Bouncing arrow indicator
  - **CTA Buttons**:
    - "Shop Now" - navigates to products
    - "Our Story" - navigates to about section
  - **Gradient Fade**: Smooth transition to next section

### 8. **src/pages/AboutPage.tsx**
- **Purpose**: Tell the brand story and showcase values
- **Sections**:
  - **Story Section**: Image + text about the business
  - **Features Grid**: 3 cards showing:
    - Handmade with Love
    - Unique Designs
    - Custom Creations
- **Animations**:
  - Rotating background decoration on image
  - Icon rotation on hover
  - Card lift effect on hover
  - Staggered entrance animations

### 9. **src/pages/ProductsPage.tsx**
- **Purpose**: Display product catalog with filtering
- **Features**:
  - **Product Array**: 8 products with details:
    - Name, category, description, image
  - **Category Filter**: Buttons to filter by category
  - **Product Cards**:
    - Image with zoom effect on hover
    - Category badge
    - Instagram message button
  - **Instagram Integration**: Opens Instagram DM with pre-filled message
- **Categories**: All, Jewelry, Customized Hampers, Bracelets, Accessories

### 10. **src/pages/GalleryPage.tsx**
- **Purpose**: Visual showcase of products
- **Features**:
  - **Grid Layout**: Responsive grid (1-4 columns based on screen size)
  - **12 Gallery Images**: Mix of local and Pexels images
  - **Hover Effects**:
    - Image zoom
    - Overlay with title and category
    - External link icon
  - **Lightbox**: Click to view full-size image
  - **Instagram CTA**: Button to follow on Instagram

### 11. **src/pages/ContactPage.tsx**
- **Purpose**: Provide contact methods and inquiry form
- **Contact Methods**:
  - Instagram: Link to @spark_soul.24
  - Email: mailto link to Sparksoul156@gmail.com
  - Gallery: Internal link to gallery section
- **Google Form**: Embedded contact form link
- **Features**:
  - Animated contact cards
  - Icon rotation on hover
  - Response time indicator
  - Worldwide service badge

---

## 🎨 Animations & Effects

### Framer Motion Animations Used

#### 1. **Fade In Animations**
```typescript
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
```
- Elements fade in while moving up
- Used for: Section headers, text blocks, cards

#### 2. **Scale Animations**
```typescript
initial={{ scale: 0 }}
whileInView={{ scale: 1 }}
```
- Elements grow from center
- Used for: Icons, sparkle decorations

#### 3. **Hover Effects**
```typescript
whileHover={{ scale: 1.05, y: -10 }}
```
- Elements lift and grow slightly
- Used for: Buttons, cards, product images

#### 4. **Rotation Animations**
```typescript
animate={{ rotate: [0, 360] }}
transition={{ duration: 2, repeat: Infinity }}
```
- Continuous rotation
- Used for: Loading spinner, decorative icons

#### 5. **Stagger Animations**
```typescript
transition={{ delay: index * 0.1 }}
```
- Elements appear one after another
- Used for: Product cards, gallery images, menu items

#### 6. **Layout Animations**
```typescript
<motion.div layoutId="activeSection" />
```
- Smooth transition between states
- Used for: Active navigation indicator

#### 7. **Exit Animations**
```typescript
<AnimatePresence>
  <motion.div exit={{ opacity: 0 }} />
</AnimatePresence>
```
- Smooth removal of elements
- Used for: Loading screen, mobile menu, lightbox

### CSS Animations

#### 1. **Gradient Backgrounds**
```css
bg-gradient-to-r from-[#d4af37] to-[#f4c2c2]
```
- Smooth color transitions
- Used throughout for buttons and text

#### 2. **Backdrop Blur**
```css
backdrop-blur-md
```
- Glassmorphism effect
- Used for: Navbar, cards, overlays

#### 3. **Smooth Scrolling**
```css
scroll-behavior: smooth;
```
- Smooth page navigation
- Applied globally

---

## 🎨 Color Scheme & Design

### Primary Colors
- **Gold**: `#d4af37` - Luxury, elegance
- **Pink**: `#f4c2c2` - Feminine, soft, handmade feel
- **Beige**: `#f5f5dc` - Warm, natural background
- **White**: `#ffffff` - Clean, modern
- **Gray**: Various shades for text and borders

### Typography
- **Headings**: Playfair Display (serif) - Elegant, classic
- **Body**: Poppins (sans-serif) - Modern, readable
- **Decorative**: Great Vibes (cursive) - Handwritten feel

### Design Principles
1. **Luxury Feel**: Gold accents, serif fonts, elegant spacing
2. **Handmade Touch**: Soft colors, rounded corners, organic shapes
3. **Modern UI**: Clean layout, smooth animations, responsive design
4. **Visual Hierarchy**: Clear sections, consistent spacing, prominent CTAs

---

## 🚀 How to Run the Project

### Prerequisites
1. **Node.js** (v16 or higher) - Download from https://nodejs.org/
2. **npm** (comes with Node.js)

### Installation Steps
```bash
# 1. Navigate to project folder
cd project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to displayed URL (usually http://localhost:5173)
```

### Available Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check code quality
npm run typecheck  # Check TypeScript errors
```

---

## 🔧 How to Modify

### Adding a New Product
**File**: `src/pages/ProductsPage.tsx`

```typescript
// Add to products array:
{
  id: 9,  // Increment ID
  name: 'Your Product Name',
  category: 'Jewelry',  // or 'Bracelets', 'Accessories', 'Customized Hampers'
  description: 'Product description here',
  image: '/your-image.jpeg',  // Add image to public folder
}
```

### Changing Colors
**File**: `src/index.css` and throughout components

```typescript
// Replace these color codes:
#d4af37  // Gold
#f4c2c2  // Pink
#f5f5dc  // Beige
```

### Adding a New Section
1. Create new file in `src/pages/YourPage.tsx`
2. Import in `src/App.tsx`
3. Add to navigation in `src/components/Navbar.tsx`
4. Add scroll detection in `App.tsx`

### Modifying Animations
**Speed**: Change `duration` value
```typescript
transition={{ duration: 0.8 }}  // Slower
transition={{ duration: 0.3 }}  // Faster
```

**Delay**: Change `delay` value
```typescript
transition={{ delay: 0.5 }}  // Wait 0.5s before animating
```

**Remove Animation**: Remove `initial`, `animate`, `whileHover` props

### Changing Text Content
- **Brand Name**: Search for "Spark Soul" and replace
- **Instagram Handle**: Search for "@spark_soul.24" and replace
- **Email**: Search for "Sparksoul156@gmail.com" and replace
- **Google Form**: Replace URL in `ContactPage.tsx`

### Adding Images
1. Add image file to `public/` folder
2. Reference as `/your-image.jpg` in code
3. Or use external URL from Pexels, Unsplash, etc.

### Responsive Design
The site uses Tailwind's responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```typescript
className="text-2xl md:text-4xl lg:text-6xl"
// Small: 2xl, Medium: 4xl, Large: 6xl
```

---

## 📱 Features Summary

### User Experience
✅ Smooth scrolling navigation
✅ Loading animation on first visit
✅ Responsive design (mobile, tablet, desktop)
✅ Interactive hover effects
✅ Image lightbox in gallery
✅ Product filtering
✅ Direct Instagram messaging
✅ Contact form integration

### Performance
✅ Fast loading with Vite
✅ Optimized images
✅ Lazy loading with viewport detection
✅ Minimal bundle size

### SEO & Accessibility
✅ Semantic HTML structure
✅ Alt text for images
✅ Keyboard navigation support
✅ Screen reader friendly
✅ Meta tags ready (add in index.html)

---

## 🐛 Common Issues & Solutions

### Issue: npm not recognized
**Solution**: Install Node.js from https://nodejs.org/

### Issue: Images not loading
**Solution**: Check image paths start with `/` and files are in `public/` folder

### Issue: Animations not working
**Solution**: Ensure framer-motion is installed: `npm install framer-motion`

### Issue: Styles not applying
**Solution**: Run `npm install` to ensure Tailwind CSS is installed

---

## 📞 Support & Credits

**Designer**: Sourav Verma
**Portfolio**: https://svermaportfolio.netlify.app/
**Instagram**: @spark_soul.24
**Email**: Sparksoul156@gmail.com

---

**Last Updated**: 2024
**Version**: 1.0.0
**License**: Private/Proprietary
