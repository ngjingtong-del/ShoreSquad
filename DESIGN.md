# ShoreSquad - Design Specification Document

## Brand Identity & Design System

### 🎨 Color Palette

```
Primary Color: Ocean Blue
  HEX: #00A6E4
  RGB: 0, 166, 228
  Usage: CTAs, highlights, navigation, primary interactive elements
  Tone: Energetic, trustworthy, aquatic

Secondary Color: Sandy Beige
  HEX: #FDB913
  RGB: 253, 185, 19
  Usage: Accent elements, warnings, secondary CTAs
  Tone: Warm, optimistic, beach-like

Accent Color: Teal
  HEX: #1B998F
  RGB: 27, 153, 143
  Usage: Hover states, badges, nature elements
  Tone: Natural, eco-conscious, calming

Success Color: Lime Green
  HEX: #90EE90
  RGB: 144, 238, 144
  Usage: Success states, positive feedback, eco-friendly actions
  Tone: Fresh, energetic, natural

Neutral Colors:
  Dark Navy: #1A3A3A (Text, dark elements)
  Light Gray: #F5F5F5 (Backgrounds)
  White: #FFFFFF (Cards, clean spaces)
  Border Gray: #E0E0E0 (Dividers)
```

### Typography

**Primary Font: Outfit (Bold headings)**
- Family: Outfit, Sans-serif
- Weights: 400, 600, 700
- Usage: H1-H6, brand name, emphasis

**Secondary Font: Inter (Body text)**
- Family: Inter, Sans-serif
- Weights: 400, 500, 600
- Usage: Paragraphs, labels, descriptions

**Font Sizes:**
- H1: 3.5rem (56px) - Hero title
- H2: 2.5rem (40px) - Section title
- H3: 1.8rem (28px) - Card title
- Body: 1rem (16px) - Standard text
- Small: 0.85rem (13.6px) - Captions

### Spacing System

```
Base Unit: 8px
Scale: 8px, 12px, 16px, 20px, 24px, 32px, 40px, 60px, 80px, 100px

Padding:
  - Small: 8px (tags, small buttons)
  - Medium: 16px (cards, standard padding)
  - Large: 24px (sections)
  - XL: 40px+ (hero, full sections)

Margins:
  - Between sections: 30-60px
  - Between elements: 16-24px
  - Between items: 8-12px
```

### Shadow System

```
Subtle Shadow (Cards):
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

Hover Shadow (Interactive):
  box-shadow: 0 8px 24px rgba(0, 166, 228, 0.2);

Elevated Shadow (Modals):
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
```

---

## Component Design

### Buttons

**Primary Button**
```
Background: Linear gradient (Ocean Blue → Teal)
Padding: 10px 24px (medium) / 14px 40px (large)
Border-radius: 50px (pill shape)
Font-weight: 600
Hover: Scale up 2px, enhanced shadow
Active: Reset transform
```

**Secondary Button**
```
Background: Sandy Beige
Padding: 10px 24px
Border-radius: 50px
Color: Dark Navy text
Hover: Darker beige shade
```

**Small Button**
```
Background: Lime Green
Padding: 6px 12px
Border-radius: 20px
Font-size: 0.85rem
Usage: Inline actions (message, remove)
```

### Cards

**Beach/Event Card**
```
Border-radius: 12px
Box-shadow: Subtle
Overflow: Hidden (image on top)
Hover: translateY(-8px), enhanced shadow
Transition: 0.3s ease

Structure:
  1. Image (200px height)
  2. Content padding (20px)
  3. Title (h3, ocean blue)
  4. Description (reduced opacity)
  5. Badges/CTA
```

**Weather Card**
```
Background: White
Border-top: 4px solid (color-coded)
Padding: 25px
Text-align: Center
Icon: Large (3rem), gradient colored
Hover: Subtle lift effect
```

### Navigation

**Navigation Bar**
```
Position: Sticky (top)
Background: White
Shadow: Subtle
Padding: 15px 20px
Content: Flexbox (space-between)
  - Brand logo (h1)
  - Menu items (flex, gap: 30px)
  - CTA button
```

**Navigation Links**
```
Color: Dark Navy (default)
Font-weight: 600
Hover: Ocean Blue color + underline animation
Underline: Teal color, animated width 0→100%
```

### Modal Dialog

**Event Modal**
```
Position: Fixed, centered
Background: White + white backdrop
Border-radius: 12px
Padding: 30px
Max-width: 500px
Animation: slideUp (0.3s ease)

Elements:
  - Close button (top-right)
  - Title (h3, ocean blue)
  - Form fields (full width)
  - Submit button (full width, primary)
```

### Forms

**Input Fields**
```
Padding: 12px 15px
Border: 1px solid (border gray)
Border-radius: 8px
Font-size: 1rem
Focus: Ocean blue border + subtle shadow
Transition: 0.3s ease

Placeholder: Light gray, sans serif
```

---

## Layout & Responsiveness

### Breakpoints

```
Mobile: < 480px
Tablet: 480px - 768px
Desktop: 768px - 1024px
Wide: 1024px+
```

### Container

```
Max-width: 1200px
Padding: 20px (mobile) → 20px (all sizes)
Margin: 0 auto (centered)
```

### Responsive Grid

**Beaches/Events Grid:**
```
Desktop: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
Tablet: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
Mobile: 1 column
Gap: 25px
```

### Section Padding

```
Desktop: 60px 20px
Tablet: 40px 20px
Mobile: 30px 15px
```

---

## Interaction Design

### Animations & Transitions

**Smooth Transition (Global)**
```css
transition: all 0.3s ease;
```

**Hover Effects:**
- Buttons: `translateY(-2px)` + shadow increase
- Cards: `translateY(-8px)` + shadow increase
- Links: Underline expansion animation
- Scale effects on interactive elements

**Loading Animation:**
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

**Notification Slide-in:**
```css
@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
```

### Micro-interactions

- Button press feedback (subtle scale)
- Form field focus states (color change + shadow)
- Notification toast slide-in & fade-out
- Modal backdrop fade-in
- Smooth page scrolls

### Feedback & Validation

**Success State:**
- Color: Lime Green
- Icon: Checkmark
- Message: Confirmation text

**Error State:**
- Color: Red/Warning
- Icon: Exclamation
- Message: Clear error description

**Loading State:**
- Spinner animation
- Disabled interactions
- Loading text

---

## Accessibility Standards (WCAG 2.1 AA)

### Color & Contrast

✅ **Contrast Ratios:**
- Text on background: 4.5:1+ (normal text)
- Large text (18pt+): 3:1+
- Interactive elements: 3:1+

**Dark Mode Support:**
- CSS @media (prefers-color-scheme: dark)
- Inverted colors for accessibility
- Maintained contrast ratios

### Keyboard Navigation

✅ **Focus Indicators:**
```css
button:focus,
a:focus,
input:focus {
  outline: 2px solid #00A6E4;
  outline-offset: 2px;
}
```

✅ **Tab Order:**
- Natural reading order
- Skip-to-content links (future)
- Visible focus states

✅ **Interactive Elements:**
- All clickable elements are keyboard accessible
- Buttons with :focus states
- Form fields fully navigable

### Motion & Animation

✅ **Reduced Motion Support:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML

✅ **Proper Structure:**
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for major content areas
- `<h1>`-`<h6>` in proper hierarchy
- `<button>` for interactive elements
- `<form>` with proper labels

✅ **ARIA Labels:**
```html
<button aria-label="Join cleanup">Join</button>
<div id="modal" aria-hidden="true"></div>
<img alt="Beach cleanup in progress">
```

### Images & Media

✅ **Alt Text:** Descriptive for all images
✅ **Lazy Loading:** `loading="lazy"` attribute
✅ **Responsive Images:** `<picture>` and srcset

---

## Performance Optimization

### CSS Performance

✅ **CSS Variables** for dynamic theming
✅ **Hardware Acceleration** with transforms
✅ **Minimal Repaints** with will-change
✅ **Critical CSS** inlined

### JavaScript Performance

✅ **Debouncing** for frequent events
✅ **Event Delegation** to reduce listeners
✅ **Lazy Loading** with IntersectionObserver
✅ **Minimal DOM Manipulation**

### Asset Optimization

✅ **Image Optimization:**
- Placeholder images (via.placeholder.com)
- WebP format (future)
- Responsive images (srcset)

✅ **Font Optimization:**
- System fonts fallback
- Font-display: swap
- Preconnect to Google Fonts

✅ **JavaScript Bundle:**
- Vanilla JS (no dependencies)
- < 100KB combined HTML+CSS+JS
- Code splitting (future)

---

## Browser Support

✅ **Modern Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

✅ **Features Used:**
- CSS Grid & Flexbox
- CSS Variables
- IntersectionObserver API
- LocalStorage (future)

---

## Testing Checklist

### Visual Testing
- [ ] Color palette consistency
- [ ] Typography hierarchy
- [ ] Spacing & alignment
- [ ] Responsive layouts (mobile, tablet, desktop)
- [ ] Dark mode appearance

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter)
- [ ] Screen reader compatibility
- [ ] Color contrast (WCAG AA)
- [ ] Focus indicators visible
- [ ] Form labels associated

### Performance Testing
- [ ] Page load time < 2s
- [ ] Lighthouse score 95+
- [ ] Mobile performance optimized
- [ ] No console errors

### Functional Testing
- [ ] All buttons clickable
- [ ] Forms submit correctly
- [ ] Modals open/close properly
- [ ] Notifications display
- [ ] Links navigate correctly

---

## Design Resources

### Font Links
- Outfit: https://fonts.google.com/specimen/Outfit
- Inter: https://fonts.google.com/specimen/Inter

### Icon Library
- Font Awesome 6: https://fontawesome.com/

### Color Tools
- Color Contrast Checker: https://webaim.org/resources/contrastchecker/
- Palette Generator: https://coolors.co/

### Design Tools
- Figma (mockups & prototyping)
- Adobe XD (design system)
- Storybook (component library)

---

**Design System v1.0**
*Last Updated: December 1, 2025*
