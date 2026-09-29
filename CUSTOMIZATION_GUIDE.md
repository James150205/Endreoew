# 🎨 Customization Guide for BangunRapi Portfolio

This guide will help you customize every aspect of the contractor portfolio website to match your business branding.

---

## 📁 File Structure

```
builder-portfolio/
├── public/
│   └── assets/
│       └── images/          # All images go here
│           ├── logo.svg     # Company logo
│           ├── hero-bg.jpg  # Hero background
│           ├── project-*.jpg    # Project photos
│           └── testimonial-*.jpg  # Client photos
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Main layout & metadata
│   │   └── page.tsx         # Home page
│   ├── components/
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Services.tsx     # Services overview
│   │   ├── Portfolio.tsx    # Project gallery
│   │   ├── Workflow.tsx     # Process steps
│   │   ├── Testimonials.tsx # Client reviews
│   │   ├── CTAButton.tsx    # Floating WhatsApp button
│   │   └── Footer.tsx       # Footer section
├── tailwind.config.ts       # Color & theme settings
└── next.config.ts           # Build configuration
```

---

## 🎯 Quick Customizations (5 Minutes)

### 1️⃣ Change WhatsApp Number

**Search and Replace:** `6281234567890` → Your actual number

Files to update:
- `src/components/Header.tsx` (lines ~73, ~113)
- `src/components/Hero.tsx` (line ~131)
- `src/components/CTAButton.tsx` (line ~6)
- `src/components/Footer.tsx` (lines ~104, ~301)

### 2️⃣ Update Company Name

**Search and Replace:** `BangunRapi` → Your company name

Files to update:
- `src/app/layout.tsx` (title in metadata)
- `src/components/Header.tsx` (line ~39)
- `src/components/Footer.tsx` (line ~14)
- `src/app/page.tsx` (title tag)

### 3️⃣ Replace Images

Copy your images to: `public/assets/images/`

Required replacements:
```
logo.svg        → Your company logo (SVG or PNG)
hero-bg.jpg     → Background image for hero section
project-1.jpg   → First portfolio project
project-2-after.jpg  → Second project after photo
project-2-before.jpg → Second project before photo
testimonial-1.jpg → First client photo
etc...
```

### 4️⃣ Update Contact Info

Edit in `src/components/Footer.tsx`:
```typescript
// Line ~104 - WhatsApp
href="https://wa.me/YOUR_NUMBER?text=..."
className="truncate">+62 XXXX-XXXX-XXXX</p>

// Line ~135 - Email
href="mailto:YOUR_EMAIL@domain.com"
className="truncate">YOUR_EMAIL@domain.com</p>

// Line ~159 - Address
<p className="text-white font-semibold text-sm">Your Office Address</p>
```

---

## 🌈 Branding Customizations

### Change Primary Colors

Open `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#fff7ed',    // Lightest shade
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',   // ← MAIN COLOR (Orange)
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
    },
  },
}
```

**Popular Alternatives:**
- Blue: `'#0ea5e9'` (Sky Blue)
- Green: `'#22c55e'` (Green)
- Purple: `'#a855f7'` (Purple)
- Red: `'#ef4444'` (Red)

### Change Text Colors

In each component, replace color classes:

**Examples:**
- `text-gray-700` → `text-blue-900`
- `text-white` → `text-slate-100`
- `bg-orange-500` → `bg-blue-500`
- `from-orange-500` → `from-blue-500`

---

## 📝 Content Customizations

### Update Hero Section Text

File: `src/components/Hero.tsx`

```typescript
// Line ~56 - Main headline
<h1>Wujudkan<br/><span>Rumah Impian Anda</span><br/> bersama kami!</h1>

// Line ~62 - Subheadline
<p>Jasa Bangun & Renovasi Rumah Profesional di Jakarta & Tangerang.</p>

// Features array (~78-89)
{ icon: '🏠', title: 'Bangun Baru', desc: 'Rumah & Ruko', duration: '1-6 Bulan' }
```

### Update Services List

File: `src/components/Services.tsx`

```typescript
const services = [
  {
    icon: /* SVG */,
    title: 'Service Name',          // Change this
    desc: 'Detailed description...', // and this
    items: ['Item 1', 'Item 2']      // And service features
  },
  // ... more services
];
```

### Update Portfolio Projects

File: `src/components/Portfolio.tsx`

```typescript
const projects = [
  {
    id: 1,
    title: 'Project Title',              // Change title
    category: 'Build New',               // Category
    location: 'Jakarta Selatan',         // Location
    area: '150 m²',                      // Area size
    description: 'Brief description...', // Short description
    image: '/assets/images/project-1.jpg',
    isBeforeAfter: false                 // Set true if you have before image
  },
];
```

### Update Testimonials

File: `src/components/Testimonials.tsx`

```typescript
const testimonials = [
  {
    name: 'Client Name',                // Change name
    role: 'Homeowner - Jakarta',        // Role/location
    content: 'Very satisfied with the work...', // Review text
    rating: 5,                          // Rating (1-5 stars)
    image: '/assets/images/testimonial-1.jpg'
  },
];
```

---

## 🔧 Advanced Customizations

### Add Google Fonts

1. Edit `src/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', system-ui, sans-serif;
}
```

2. Popular fonts:
- **Inter**: Modern, clean
- **Poppins**: Geometric, friendly
- **Montserrat**: Professional, bold
- **Roboto**: Neutral, versatile

### Customize Animations

Edit `tailwind.config.ts`:

```typescript
animation: {
  'bounce-once': 'bounce-once 0.5s ease-in-out',
  'fade-in-up': 'fade-in-up 0.6s ease-out',
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
```

### Adjust Spacing

In component files, modify Tailwind classes:
- `py-20` → `py-24` (vertical padding)
- `gap-8` → `gap-12` (spacing between elements)
- `px-4` → `px-8` (horizontal padding)
- `mb-6` → `mb-8` (margin bottom)

### Enhance Shadows

In `globals.css`, find `.shadow-orange`:

```css
.shadow-orange-lg {
  box-shadow: 0 20px 60px rgba(249, 115, 22, 0.3);
}
```

Change values to adjust intensity.

---

## 📱 Mobile-Specific Changes

### Adjust Mobile Text Sizes

Edit `src/app/globals.css` - Android section:

```css
@media screen and (max-width: 480px) {
  body {
    font-size: 14px; /* Increase/decrease */
  }
  
  h1 {
    font-size: 28px !important; /* Hero heading */
  }
  
  h2 {
    font-size: 24px !important; /* Section headings */
  }
}
```

### Remove Animation on Slow Devices

Add to `Hero.tsx` or globally:

```typescript
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  // Disable animations
}
```

---

## 🎨 Design Elements

### Icons

All icons use inline SVG. Find icon libraries:
- [Heroicons](https://heroicons.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- [Lucide](https://lucide.dev/)

Replace `<svg>` blocks in components.

### Gradients

Find gradient examples in components:

```css
/* Orange gradient */
bg-gradient-to-r from-orange-500 to-orange-600

/* Multi-color gradient */
bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500
```

Change colors as needed.

### Glass Effect

The site uses backdrop blur:

```css
backdrop-blur-sm
bg-white/10
```

Adjust opacity (0.1 → 0.2) or blur amount (sm → md/lg).

---

## ⚡ Performance Optimizations

### Image Optimization

Convert images to WebP format:
```bash
# Use online tools or commands:
convert input.jpg -quality 85 output.webp
```

### Lazy Load Below-Fold Content

Already implemented, but can enhance:

```typescript
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });
  observer.observe(elementRef.current);
  return () => observer.disconnect();
}, []);

return isVisible ? <Component /> : <Skeleton />;
```

---

## 🧪 Testing Checklist

### Desktop Testing
- [ ] Check all sections load properly
- [ ] Test navigation links
- [ ] Verify hover effects work
- [ ] Test mobile menu opens/closes
- [ ] Check WhatsApp links open correctly
- [ ] Verify forms/submission works

### Mobile Testing (Android/iOS)
- [ ] Touch targets are large enough (44px+)
- [ ] No horizontal scrolling
- [ ] Text is readable without zoom
- [ ] Images load quickly
- [ ] Buttons respond to taps
- [ ] Smooth scrolling works
- [ ] Hamburger menu works
- [ ] Floating button accessible

---

## 🆘 Common Issues

### "Image not found" error
- Ensure image is in `public/assets/images/`
- Check filename spelling and case
- Restart dev server after adding new images

### WhatsApp link doesn't open
- Phone number must start with country code
- Don't include `+` sign
- Example: `6281234567890` not `+6281234567890`

### Styles not loading
- Run `npm install` again
- Clear cache: delete `.next` folder and restart
- Check Tailwind config is correct

---

## 📞 Support & Next Steps

1. **Customize content** based on your business needs
2. **Test thoroughly** on multiple devices
3. **Deploy to production** when ready
4. **Monitor analytics** for user behavior
5. **Update regularly** with new projects

For questions or custom modifications, feel free to consult additional resources or hire a developer for advanced changes.

---

Happy Customizing! 🚀
