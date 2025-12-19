# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





Fonts, Images & Icons Selection (Homepage Sprint)
1. Fonts (Final Selection)

Headings Font: Poppins
Body Font: Inter

These fonts are modern, professional, and readable for working professionals.
Added via Google Fonts import in src/index.css.



University Logos:
8–12 logos, SVG preferred. If PNG, use transparent background.
Store in public/logos/.

Testimonials Photos:
200×200px portraits, clean, professional.
Store in public/testimonials/.

Study Abroad Flags:
Consistent SVG set (32–40px).
Store in public/flags/.

2. Icons (Selection)

Primary icon set: Heroicons v2 (React).
Used for menu, close, dropdowns, arrows, search, etc.

Install:
npm install @heroicons/react

Custom SVG icons (optional) stored in:
src/assets/icons/

3. Asset Folder Structure

public/
├── logos/
├── hero/
├── testimonials/
├── flags/
src/assets/
└── icons/

4. Optimization Guidelines

Convert photos to WebP for performance.

Compress all images before use.

Optimize SVGs using SVGO.

Keep logos clean, centered, and high resolution.