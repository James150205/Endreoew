# 🎨 Visual Style Guide

## Color Palette

### Primary Colors
```css
/* Orange Theme (Construction/Building Industry) */
--primary-lightest:  #fff7ed  /* orange-50 */
--primary-light:     #ffedd5  /* orange-100 */
--primary-medium:    #fed7aa  /* orange-200 */
--primary-warm:      #fdba74  /* orange-300 */
--primary:           #f97316  /* orange-500 - MAIN BRAND COLOR */
--primary-dark:      #ea580c  /* orange-600 */
--primary-darker:    #c2410c  /* orange-700 */
--primary-deep:      #9a3412  /* orange-800 */
```

### Accent Colors
```css
/* Green (Success/Wood/Nature) */
--green-success:     #22c55e  /* green-500 */
--green-light:       #86efac  /* green-300 */

/* Blue (Trust/Water/Electricity) */
--blue-primary:      #0ea5e9  /* sky-500 */
--blue-dark:         #0369a1  /* sky-800 */

/* Yellow/Gold (Attention/Caution/Premium) */
--gold:              #fbbf24  /* amber-400 */
--gold-light:        #fef08a  /* amber-200 */

/* Purple (Creative/Architecture) */
--purple:            #a855f7  /* purple-500 */
```

### Neutral Colors
```css
/* Gray Scale */
--gray-dark:         #1a202c  /* gray-900 */
--gray-black:        #0f172a  /* slate-900 */
--gray-heavy:        #334155  /* slate-700 */
--gray-medium:       #64748b  /* slate-500 */
--gray-light:        #94a3b8  /* slate-400 */
--gray-bright:       #cbd5e1  /* slate-300 */
--gray-pale:         #f1f5f9  /* slate-100 */
--white:             #ffffff
```

---

## Typography System

### Font Families
```css
/* Primary Font Stack */
font-family: 
  system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 
  'Segoe UI', 
  Roboto, 
  'Helvetica Neue', 
  Arial, 
  sans-serif;

/* Alternative Professional Fonts */
/* Montserrat - Bold & Professional */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

/* Inter - Modern & Clean */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

/* Poppins - Friendly & Geometric */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
```

### Font Sizes (Desktop)
```css
/* Headlines */
h1 = 48px (Hero) / 36px (Mobile)    /* Text-6xl / Text-5xl */
h2 = 36px                             /* Text-4xl */
h3 = 28px                             /* Text-3xl */
h4 = 22px                             /* Text-xl */

/* Body Text */
body-lg = 18px                        /* Text-xl */
body-md = 16px                        /* Text-base */
body-sm = 14px                        /* Text-sm */
body-xs = 12px                        /* Text-xs */
```

### Font Weights
```css
light   = 300
normal  = 400
medium  = 500
semibold = 600
bold    = 700
extrabold = 800
```

---

## Spacing System

### Base Units
```css
spacing-xs = 4px   /* 0.25rem */
spacing-sm = 8px   /* 0.5rem */
spacing-md = 16px  /* 1rem */
spacing-lg = 24px  /* 1.5rem */
spacing-xl = 32px  /* 2rem */
spacing-2xl = 48px /* 3rem */
spacing-3xl = 64px /* 4rem */
spacing-4xl = 96px /* 6rem */
```

### Component Spacing Patterns
```css
/* Section Padding */
section-padding-y = 80px   /* py-20 */
container-padding-x = 24px /* px-4 */

/* Card Components */
card-padding = 32px    /* p-8 */
card-margin = 32px     /* gap-8 */

/* Button Padding */
button-padding-y = 12px    /* py-3 */
button-padding-x = 24px    /* px-6 */
```

---

## Shadow System

### Elevation Levels
```css
/* Light Shadow */
shadow-sm = 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* Default Shadow */
shadow-md = 0 4px 6px -1px rgb(0 0 0 / 0.1),
            0 2px 4px -2px rgb(0 0 0 / 0.1)

/* Large Shadow */
shadow-lg = 0 10px 15px -3px rgb(0 0 0 / 0.1),
            0 4px 6px -4px rgb(0 0 0 / 0.1)

/* Extra Large Shadow */
shadow-xl = 0 20px 25px -5px rgb(0 0 0 / 0.1),
            0 8px 10px -6px rgb(0 0 0 / 0.1)

/* Brand Shadow (Orange Glow) */
shadow-orange = 0 10px 40px rgba(249, 115, 22, 0.2)
shadow-orange-lg = 0 20px 60px rgba(249, 115, 22, 0.3)
```

### Hover Shadows
```css
/* Card hover effect */
card-hover-shadow = 0 20px 40px rgba(0, 0, 0, 0.1)
transform-y = -8px
```

---

## Border Radius

### Roundness Scale
```css
radius-none = 0
radius-sm = 0.25rem   /* 4px */
radius-md = 0.375rem  /* 6px */
radius-lg = 0.5rem    /* 8px */
radius-xl = 0.75rem   /* 12px */
radius-2xl = 1rem     /* 16px */
radius-full = 9999px  /* Fully rounded */
```

### Usage Guidelines
```css
/* Buttons & Badges */
rounded-full = For buttons, badges, circular elements

/* Cards */
rounded-xl = Standard card components

/* Images */
rounded-2xl = Portfolio images, profile pictures

/* Inputs */
rounded-lg = Input fields, search boxes
```

---

## Animation System

### Transition Durations
```css
transition-fast = 150ms
transition-base = 200ms
transition-slow = 300ms
transition-slower = 500ms
transition-slowest = 1000ms
```

### Easing Functions
```css
ease-linear = linear
ease-default = cubic-bezier(0.4, 0, 0.2, 1)
ease-in = cubic-bezier(0.4, 0, 1, 1)
ease-out = cubic-bezier(0, 0, 0.2, 1)
ease-bounce = cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Common Animations

#### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Usage */
animation: fadeInUp 0.6s ease-out forwards;
```

#### Pulse (Slow)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* Usage */
animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

#### Bounce Once
```css
@keyframes bounceOnce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Usage */
animation: bounceOnce 0.5s ease-in-out;
```

#### Scale on Hover
```css
transform: scale(1.1);
transition: transform 0.3s ease;
```

---

## Grid Layout Patterns

### Responsive Breakpoints
```css
sm = 640px   /* Mobile landscape */
md = 768px   /* Tablet */
lg = 1024px  /* Small desktop */
xl = 1280px  /* Desktop */
2xl = 1536px /* Large desktop */
```

### Container Max Widths
```css
max-width-sm = 640px
max-width-md = 768px
max-width-lg = 1024px
max-width-xl = 1280px
max-width-2xl = 1536px
```

### Column Layouts
```css
/* Hero Section */
grid-cols-1 lg:grid-cols-12
col-span-1 lg:col-span-6 (left content)
col-span-1 lg:col-span-6 (right content)

/* Services Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Portfolio Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* Testimonials Grid */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

---

## Glass Morphism Effect

### Glass Card Style
```css
.glass-card {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### Dark Glass
```css
.glass-dark {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## Icon Sizes

### Icon Scale
```css
icon-xs = 16px   /* w-4 h-4 */
icon-sm = 20px   /* w-5 h-5 */
icon-md = 24px   /* w-6 h-6 */
icon-lg = 32px   /* w-8 h-8 */
icon-xl = 48px   /* w-12 h-12 */
```

### Icon Placement
```css
/* Inline with text */
flex items-center gap-2

/* Standalone button icon */
p-3 inline-flex items-center justify-center

/* Background icon */
absolute inset-0 flex items-center justify-center
```

---

## Gradients

### Linear Gradients
```css
/* Primary Orange Gradient */
bg-gradient-to-r from-orange-500 to-orange-600
bg-gradient-to-r from-orange-600 to-orange-700

/* Multi-color Gradient */
bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500

/* Vertical Gradient */
bg-gradient-to-b from-orange-500 to-orange-700

/* Diagonal Gradient */
bg-gradient-to-br from-orange-500 to-yellow-600
```

### Background Image Gradients
```css
/* Overlay gradient over image */
bg-gradient-to-t from-black/80 via-black/50 to-transparent

/* Horizontal gradient overlay */
bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
```

---

## Custom Effects

### Shine Animation on Hover
```css
.bg-gradient-to-r from-transparent via-white/20 to-transparent
-translate-x-full group-hover:translate-x-full transition-transform duration-1000
```

### Before/After Reveal
```css
before:absolute before:inset-0 before:bg-cover before:contents-[attr(data-before)]
group-hover:before:opacity-100 before:opacity-0 before:transition-opacity
```

### Loading Spinner
```css
.animate-spin
border-4 border-current border-t-transparent
rounded-full
```

---

## Accessibility Standards

### Minimum Touch Targets
```css
min-height: 44px;
min-width: 44px;
padding: 12px 24px; /* For buttons */
```

### Color Contrast Ratios
```css
Text on white/light: 4.5:1 minimum (WCAG AA)
Text on dark: 4.5:1 minimum (WCAG AA)
Large text: 3:1 minimum (WCAG AA)
```

### Focus States
```css
:focus-visible {
  outline: 2px solid #f97316;
  outline-offset: 2px;
}
```

---

## Responsive Mobile Guidelines

### Android Optimizations
```css
@media screen and (max-width: 480px) {
  font-size: 14px;
  
  h1 { font-size: 28px !important; }
  h2 { font-size: 24px !important; }
  h3 { font-size: 20px !important; }
  
  touch-action: manipulation;
  min-height: 44px; /* Tap targets */
}
```

### Safe Areas (iPhone Notch)
```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

---

This style guide provides comprehensive visual standards for maintaining consistency across the website. All components follow these guidelines for a cohesive professional appearance.

**Design Principles:**
- ✅ Professional & Trustworthy
- ✅ Clear Call-to-Actions
- ✅ High Contrast for Readability
- ✅ Smooth Animations (not distracting)
- ✅ Mobile-First Approach
- ✅ Fast Loading Performance

---

*Style guide version 1.0*
