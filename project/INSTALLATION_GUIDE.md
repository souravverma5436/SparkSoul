# Installation & Setup Guide

## 🚀 Quick Start

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
cd project
npm install
```

This will install all dependencies including:
- React & React DOM
- GSAP (for scroll animations)
- Framer Motion (for loading screen)
- Lucide React (for icons)
- Tailwind CSS (for styling)
- TypeScript
- Vite (build tool)

### Step 2: Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173` (or another port if 5173 is busy).

---

## 📦 What Was Installed

### New Dependencies Added
- **GSAP 3.12.5**: Professional-grade animation library for scroll-driven animations

### Existing Dependencies
- React 18.3.1
- Framer Motion 12.23.24
- Lucide React 0.344.0
- Tailwind CSS 3.4.1
- TypeScript 5.5.3
- Vite 5.4.2

---

## ✅ Verification

After running `npm install` and `npm run dev`, you should see:

1. ✅ No TypeScript errors
2. ✅ Development server running
3. ✅ Website loads at localhost
4. ✅ Hero section with pinned scroll animation
5. ✅ Featured jewelry image moves as you scroll
6. ✅ All sections animate smoothly

---

## 🐛 Troubleshooting

### Error: "Cannot find module 'gsap'"
**Solution**: Run `npm install` in the project folder

### Error: Port already in use
**Solution**: 
- Close other dev servers
- Or use a different port: `npm run dev -- --port 3000`

### Animations not working
**Solution**:
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check console for errors
- Verify GSAP installed: `npm list gsap`

### TypeScript errors
**Solution**:
- Run `npm install` to ensure all types are installed
- Restart VS Code/editor
- Run `npm run typecheck` to see all errors

---

## 🎯 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Check code quality
npm run typecheck  # Check TypeScript errors
```

---

## 🌐 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Optimized

---

## 📱 Testing

### Desktop
1. Open `http://localhost:5173`
2. Scroll through hero section
3. Watch featured jewelry image animate
4. Test all section animations

### Mobile
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device
4. Test responsive behavior
5. Verify reduced animations on mobile

---

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

---

## 📂 Project Structure

```
project/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── BackToTop.tsx
│   ├── pages/
│   │   ├── HomePage.tsx (Nike-style scroll animations)
│   │   ├── AboutPage.tsx (GSAP animations)
│   │   ├── ProductsPage.tsx (GSAP animations)
│   │   ├── GalleryPage.tsx (GSAP animations)
│   │   └── ContactPage.tsx (GSAP animations)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/ (images)
├── package.json
└── vite.config.ts
```

---

## 🎨 Features Implemented

✅ Nike-style pinned hero with scroll timeline
✅ Featured jewelry image animation
✅ GSAP ScrollTrigger for all sections
✅ Smooth scroll to sections
✅ Active navbar highlighting
✅ Responsive design (mobile optimized)
✅ Reduced motion support
✅ Performance optimized
✅ Instagram DM integration
✅ Lightbox gallery
✅ Premium animations throughout

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Netlify/Vercel

1. Push code to GitHub
2. Connect repository to Netlify/Vercel
3. Build command: `npm run build`
4. Publish directory: `dist`

---

## 📞 Support

If you encounter any issues:

1. Check this guide first
2. Review error messages in console
3. Verify all dependencies installed
4. Check browser compatibility
5. Test in incognito mode (no extensions)

---

**Happy coding! 🎉**
