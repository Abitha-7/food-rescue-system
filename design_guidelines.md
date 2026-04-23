# FoodResq Design Guidelines

## Design Approach
**Selected System**: Material Design with sustainable, purpose-driven customization
**Rationale**: FoodResq requires a balance of visual appeal (food images, engaging milestones) and functional clarity (forms, listings, tracking). Material Design provides excellent patterns for content-rich applications while maintaining accessibility and trust.

## Core Design Principles
1. **Purpose-Driven**: Every element reinforces the mission of reducing food waste
2. **Trust & Transparency**: Clear information hierarchy for food safety and donation tracking
3. **Inclusive Access**: Ensure both donors and receivers can navigate effortlessly
4. **Encouraging Progress**: Visual rewards and positive reinforcement for continued participation

## Color Palette

### Light Mode
- **Primary Green**: 142 71% 45% (sustainable, growth-focused)
- **Primary Dark**: 142 71% 35% (for hover states, emphasis)
- **Secondary Warm**: 35 85% 55% (encouraging, food-related warmth)
- **Background**: 0 0% 98%
- **Surface**: 0 0% 100%
- **Text Primary**: 0 0% 13%
- **Text Secondary**: 0 0% 40%
- **Success Green**: 142 76% 36%
- **Warning Orange**: 25 95% 53% (for expiry alerts)
- **Error Red**: 0 84% 60%

### Dark Mode
- **Primary Green**: 142 65% 55%
- **Primary Dark**: 142 65% 45%
- **Secondary Warm**: 35 75% 60%
- **Background**: 0 0% 10%
- **Surface**: 0 0% 15%
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 70%

## Typography
- **Primary Font**: 'Inter' via Google Fonts (clean, modern, highly readable for forms and data)
- **Display Font**: 'Poppins' via Google Fonts (friendly, welcoming for headings and hero)
- **Headings**: Poppins - Bold/Semibold (H1: 2.5rem, H2: 2rem, H3: 1.5rem, H4: 1.25rem)
- **Body**: Inter - Regular (base: 1rem/16px, leading-relaxed)
- **Small Text**: Inter - Regular (0.875rem for metadata, timestamps)
- **Buttons/CTAs**: Inter - Semibold (0.875-1rem)

## Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Component padding: p-4 to p-6 (mobile), p-6 to p-8 (desktop)
- Section spacing: py-12 to py-16 (mobile), py-20 to py-24 (desktop)
- Container max-width: max-w-7xl with px-4 to px-8
- Card spacing: gap-4 to gap-6 in grids
- Form field gaps: space-y-4 to space-y-6

## Component Library

### Navigation
- Sticky header with FoodResq logo (leaf icon + text)
- Role-based navigation (Donor/Receiver dashboards)
- Mobile: Hamburger menu with slide-in drawer
- Desktop: Horizontal nav with dropdown for user profile

### Authentication Pages
- Split-screen layout: Left side with brand illustration/image, right side with form
- Role selection cards on signup: Large, clickable cards with icons (Donor: hand giving, Receiver: community)
- Form styling: Outlined inputs with focus state (primary green border), floating labels
- Social proof below forms: "Join 5,000+ food rescuers" with small stats

### Home Page
- **Hero Section**: Full-width with sustainable imagery (rescued food, community), h-[500px] to h-[600px]
  - Overlay gradient for text readability
  - Headline: "Rescue Food, Feed Communities" (Poppins Bold, 3xl to 5xl)
  - CTA buttons: Primary (solid green), Secondary (outline white with blur backdrop)
- **Mission Cards**: 3-column grid (lg), stacked mobile - Icon + Heading + Description
- **Impact Stats**: 4-column grid showing donations saved, meals provided, CO2 reduced
- **How It Works**: Alternating content blocks with illustrations
- **Contact Section**: 2-column (form + map/contact info)

### Donor Dashboard

**Donate Page**:
- Multi-step form with progress indicator
- Image upload: Drag-drop zone with preview (600x400px recommended)
- Food category: Button group with icons for each type
- Expiry date: Date picker with visual calendar
- Location: Google Maps integration with pin-drop
- Submit: Large primary button "Post Donation"

**Food Listing Page**:
- Masonry grid layout for food cards (2-3 columns)
- Each card: Image (aspect-video), category badge, title, expiry indicator, status tag
- Filter sidebar: Category checkboxes, date range, location radius
- Quick actions: Edit, Mark as claimed, Delete

### Receiver Dashboard

**Browse Food**:
- Card grid similar to listing but with "Request" CTA
- Advanced filters: Distance, category, expiry window
- Map view toggle showing nearby donations

**My Requests**:
- Timeline view of requested items with status badges (Pending, Approved, Completed)
- Donor contact info revealed on approval

### Tracking Page
- **Timeline Component**: Vertical stepper showing donation journey
  - Icons for each stage: Posted → Requested → Approved → Picked Up → Completed
  - Timestamps and status updates
  - Donor/Receiver info cards
- **Active Donations**: Cards with real-time status (color-coded borders)

### Rating & Review
- Star rating component (1-5 stars, large, interactive)
- Text area for written review
- Previous reviews: Card list with avatar, rating, date, comment

### Milestone Page
- **Achievement Grid**: Cards with reward icons (badges, trophies)
  - "First Donation" - "10 Donations" - "Monthly Streak" - "100kg Saved"
- **Streak Counter**: Large circular progress indicator with flames icon
- **Leaderboard**: Top donors/receivers with avatars and stats
- **Encouraging Messages**: Rotating motivational quotes in hero banner style

### Forms & Inputs
- Outlined style with 2px border, rounded-lg
- Focus state: Primary green border with subtle shadow
- Error state: Red border with error message below
- Success state: Green checkmark icon
- Helper text: Text-sm, text-secondary below inputs

### Cards
- Elevated with shadow-md, rounded-xl
- Hover: Subtle lift (translate-y-1, shadow-lg transition)
- Food cards: Image top, content p-4, footer with actions
- Info cards: Icon/Image left, content right (flex layout)

### Buttons
- **Primary**: bg-primary green, text-white, rounded-lg, px-6 py-3, semibold
- **Secondary**: border-2 border-primary, text-primary, bg-transparent
- **Outlined on images**: backdrop-blur-sm bg-white/20 border-white/50
- **Icon buttons**: Circular for actions (edit, delete) - w-10 h-10

### Data Display
- **Status Badges**: Rounded-full px-3 py-1, text-sm (Available: green, Claimed: orange, Completed: blue)
- **Tables**: Striped rows, hover highlight, sticky header
- **Stats Cards**: Large number (text-4xl), label below, icon accent

## Images
- **Hero Image**: Wide landscape showing diverse community sharing food or rescued produce in bright, natural setting (1920x600px)
- **Mission Section**: 3 supporting images for each value pillar (800x600px) - volunteers, fresh food, community impact
- **How It Works**: 3-4 illustrative images showing donation process steps (600x400px)
- **Food Cards**: User-uploaded photos should be cropped to 16:9 aspect ratio with object-cover for consistency
- **Placeholder Images**: Use food-related imagery from Unsplash (rescued produce, community kitchens, fresh vegetables)

## Animations
**Minimal & Purposeful**:
- Page transitions: Subtle fade-in (200ms)
- Card hover: Lift effect (transform translateY)
- Button click: Slight scale (0.98) feedback
- Milestone achievements: Confetti burst (celebrate.js) on unlock
- NO auto-playing carousels or scrolljacking

## Accessibility
- Minimum contrast ratio 4.5:1 for text
- Focus indicators visible on all interactive elements (ring-2 ring-primary)
- Form labels always visible (no placeholder-only inputs)
- Alt text for all food images
- Keyboard navigation for all flows
- Screen reader announcements for status changes (aria-live)