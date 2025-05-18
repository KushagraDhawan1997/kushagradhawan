# Hero Section

This directory contains components and data for the hero section of the portfolio. The hero section is the first section visitors see and includes a headline, testimonials, and a call-to-action button.

## Structure

- `HeroSection.tsx`: Main component that renders the entire hero section
- `TestimonialCard.tsx`: Component for displaying individual testimonials in a card format
- `TestimonialDialog.tsx`: Component for showing full testimonials in a modal dialog
- `testimonials.ts`: Data file containing all testimonial content and author information
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Bento Grid**: Desktop view uses a custom grid layout with varying card sizes
- **Testimonial Cards**: Clickable cards that open a dialog with the full testimonial
- **Visual Effects**: Gradient text styling, hover effects, and backdrop blur
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { HeroSection } from "@/components/sections/hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
```

## Component Diagram

```
HeroSection
├── Title and Subtitle
├── Call-to-Action Button
├── Testimonial Grid
│   ├── TestimonialCard (multiple instances)
└── TestimonialDialog (appears when a card is clicked)
```

## Data Structure

The testimonials data file contains an array of testimonial objects, each with:

- Short version for card display
- Full version for dialog display
- Author information (name, title, company)
- Position information for layout purposes

## Styling

The hero section uses:

- Gradient text for the headline
- Custom grid layout for desktop view
- Backdrop blur effects for cards and dialog
- Border styling via ContentWrapper component
- Hover effects for interactive elements
