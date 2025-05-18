# Contact Section

This directory contains components and data for the contact section of the portfolio. This section provides various ways for visitors to get in touch, download resources, and connect through social media.

## Structure

- `ContactSection.tsx`: Main component that renders the entire contact section
- `ContactTestimonial.tsx`: Component for displaying a random testimonial (reuses data from hero section)
- `contactData.ts`: Data file containing social links and other contact information
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Multi-Column Grid**: Desktop view uses a grid layout with different card sizes
- **Social Proof**: Displays a random testimonial to build credibility
- **Direct Contact Options**: Email, phone, and calendar scheduling options
- **Data Sharing**: Reuses testimonials from the hero section to avoid redundancy

## Usage

```tsx
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
```

## Component Diagram

```
ContactSection
├── Title and Subtitle
├── Desktop Grid Layout
│   ├── ContactTestimonial (random from hero section)
│   ├── Contact Options Card
│   ├── Resume Download Card
│   └── Social Links Card
└── Mobile Layout
    ├── Contact Options Card
    ├── Resume Download Card
    ├── Social Links Card
    └── ContactTestimonial
```

## Data Integration

This section demonstrates effective data sharing:

- Testimonials are imported from the hero section's data file
- This avoids redundancy and ensures consistency throughout the site
- The same testimonial content is presented with styling appropriate for this section

## Styling

The contact section uses:

- Backdrop blur effects for cards
- Meteor animation in the background
- Consistent styling with the rest of the portfolio
- Responsive card layouts for different device sizes
