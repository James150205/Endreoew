# 🚀 Quick Start Guide

## Step 1: Install & Run (2 minutes)

```bash
cd builder-portfolio
npm install
npm run dev
```

Open browser: http://localhost:3001

---

## Step 2: Customize Your Info (5 minutes)

### ✅ WhatsApp Number
Replace `6281234567890` → Your number in ALL files
**Quick search:** Find all instances of `6281234567890` and replace

### ✅ Company Name
Replace `BangunRapi` → Your company name in all components

### ✅ Contact Details
Edit footer contact information:
- Phone number
- Email address  
- Office address

---

## Step 3: Add Your Images (10 minutes)

### Required Folder Structure
```
public/assets/images/
├── logo.svg              ← Your logo
├── hero-bg.jpg          ← Hero background image
└── (project images)      ← Project photos
```

### Image Recommendations
- **Logo**: 200x200px SVG or PNG, transparent background
- **Hero BG**: 1920x1080px, dark image for better text contrast
- **Project Photos**: 800x600px minimum, high quality

### Free Image Sources
- [Unsplash](https://unsplash.com/) - High-quality free photos
- [Pexels](https://pexels.com/) - Free stock photos
- [Placeit](https://placeit.net/) - Business mockups (some free)

---

## Step 4: Update Content (15 minutes)

### Services Section
Edit `src/components/Services.tsx`:
```typescript
const services = [
  {
    title: 'Your Service Name',
    desc: 'Description of your service...',
    items: ['Service Feature 1', 'Feature 2']
  },
  // ...
];
```

### Portfolio Projects
Edit `src/components/Portfolio.tsx`:
```typescript
const projects = [
  {
    title: 'Project Title Here',
    category: 'Build/Renovate',
    location: 'City Location',
    area: 'XXX m²',
    description: 'What was done on this project...',
    image: '/assets/images/project-1.jpg'
  },
  // ...
];
```

### Testimonials
Edit `src/components/Testimonials.tsx`:
```typescript
{
  name: 'Client Name',
  role: 'Homeowner - Jakarta',
  content: '"Very satisfied with the service!"',
  rating: 5,
  image: '/assets/images/testimonial-1.jpg'
}
```

---

## Step 5: Test Everything

### Desktop Tests
- ✅ Navigation menu works
- ✅ All links scroll correctly
- ✅ CTA button opens WhatsApp
- ✅ Hover effects work
- ✅ No console errors

### Mobile Tests (Android/iOS)
- ✅ Tap buttons work smoothly
- ✅ Hamburger menu opens/closes
- ✅ Text is readable without zoom
- ✅ No horizontal scrolling
- ✅ Floating WhatsApp button visible
- ✅ Fast loading speed

---

## Step 6: Deploy (Optional)

### Option A: Vercel (Free & Easy)
```bash
vercel deploy
```

### Option B: Netlify
```bash
npm run build
# Drag .next-static folder to netlify drop zone
```

### Option C: Manual Hosting
1. Build: `npm run build`
2. Upload `.next-static` folder to your hosting
3. Configure web server for Next.js static export

---

## Step 7: Go Live! 🎉

Your portfolio is ready! Share your link with potential clients.

### Social Media Ready Links
Update your social media bios with:
```
🏗️ Professional Contractor | +62 XXXX-XXXX
📍 Serving [Your City] & Surrounding Areas
⚡ Free Consultation via WhatsApp 👇
[your-website-url.com]
```

---

## 🆘 Need Help?

| Issue | Solution |
|-------|----------|
| **WhatsApp not working** | Check phone number has country code, no `+` sign |
| **Images not showing** | Ensure files are in `public/assets/images/` |
| **Styles broken** | Run `npm install` and restart dev server |
| **Mobile layout issues** | Test on actual device, clear cache |

### Resources
- Full Guide: [`CUSTOMIZATION_GUIDE.md`](CUSTOMIZATION_GUIDE.md)
- README: [`README.md`](README.md)
- Next.js Docs: https://nextjs.org/docs

---

## ⚡ Pro Tips

1. **Speed matters**: Compress images before uploading
2. **SEO boost**: Add detailed descriptions in each section
3. **Trust factor**: Use real client testimonials
4. **Regular updates**: Add new projects monthly
5. **Analytics**: Track visitors with Google Analytics

---

**Congratulations! You now have a professional contractor portfolio website!** 🎊

Estimated time for full setup: 30-45 minutes
Ready-to-deploy: After Step 6

Good luck with your business! 💪🏠
