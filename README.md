# BangunRapi - Professional Contractor Portfolio Website

A stunning, modern Next.js portfolio website designed specifically for construction contractors and building service providers. Built with React, Next.js 16, Tailwind CSS, and TypeScript.

## 🚀 Features

- **Modern & Responsive Design** - Looks amazing on desktop, tablet, and mobile devices (optimized for Android)
- **WhatsApp Integration** - Floating CTA button with auto-message template
- **Portfolio Showcase** - Before/After project comparisons
- **Professional Sections**:
  - Hero section with animated backgrounds
  - Comprehensive services overview
  - Interactive portfolio gallery
  - Clear workflow process
  - Testimonials and trust factors
  - Comprehensive footer with contact info

## 🛠️ Tech Stack

- **Framework**: Next.js 16.3.6 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: SVG icons (no external dependencies)

## 📦 Installation

```bash
cd builder-portfolio
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) to view your site.

## 🎨 Customization Guide

### 1. Update WhatsApp Number

Find and replace all instances of `6281234567890` with your actual WhatsApp number in these files:
- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/CTAButton.tsx`
- `src/components/Footer.tsx`

### 2. Replace Images

All images are stored in `public/assets/images/`:

#### Required Images:
- `logo.svg` - Your company logo
- `hero-bg.jpg` - Background image for hero section
- Project images for portfolio (project-1.jpg, etc.)
- Testimonial photos (testimonial-1.jpg, etc.)

**Image Recommendations:**
- Use high-quality images (minimum 1920px width)
- Optimized for web (JPEG/WebP format)
- File size under 200KB for faster loading

### 3. Customize Colors

Edit `tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#f97316', // Change to your brand color
        600: '#ea580c',
      },
    },
  },
}
```

### 4. Update Company Information

Modify these sections in respective components:
- **Company Name**: "BangunRapi" → Your company name
- **Description**: Update in `Hero.tsx` and `Footer.tsx`
- **Services**: Modify `services` array in `src/components/Services.tsx`
- **Projects**: Edit `projects` array in `src/components/Portfolio.tsx`
- **Testimonials**: Add/edit testimonials in `src/components/Testimonials.tsx`

### 5. SEO Meta Tags

Edit `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Company | Services",
  description: "Your SEO description here",
  keywords: "your, keywords, here",
};
```

## 📱 Mobile Optimization

The website is fully responsive with special optimizations for Android devices:
- Touch-friendly buttons (min 44px height)
- Fast loading with optimized images
- Smooth animations
- Proper padding for mobile screens
- No zoom on double-tap

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### Manual Static Export
```bash
npm run build
# Files will be in .next-static/ directory
```

## 🔧 Additional Configuration

### Google Fonts (Optional)

Add to `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

### Analytics Setup

Add tracking code to `layout.tsx` in `<Head>` component:
```tsx
<script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `
}}/>
```

## 📊 Performance Tips

1. **Optimize Images**: Convert to WebP format using tools like Cloudinary or Squoosh
2. **Lazy Loading**: Already implemented for images below the fold
3. **Code Splitting**: Each component is already separated for better performance
4. **Caching**: Enable CDN caching for static assets

## 🎯 Best Practices

1. **Use real project photos** instead of placeholders for authenticity
2. **Write compelling testimonials** from real clients
3. **Keep text concise** - mobile users have less attention span
4. **Update regularly** - add new projects as they complete
5. **Test on real devices** - check on actual Android/iOS devices

## 🚨 Troubleshooting

### Build Issues
If you encounter Turbopack errors on Windows:
- The config already includes fallback to Webpack
- Try updating Node.js to version 20+

### Image Not Loading
- Ensure images are in `public/assets/images/` folder
- Check image paths are case-sensitive
- Restart development server after adding new images

### WhatsApp Link Not Working
- Verify phone number includes country code without '+' prefix
- Example: Use `6281234567890` not `+6281234567890`

## 📝 License

This template is free to use for personal and commercial projects.

## 💡 Need Help?

For customizations beyond this guide, feel free to reach out or consult the Next.js documentation.

---

Made with ❤️ for professional contractors
