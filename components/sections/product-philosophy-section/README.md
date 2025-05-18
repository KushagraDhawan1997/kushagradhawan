# Product Philosophy Section

This directory contains components and data for the product philosophy section of the website.

## Structure

- `ProductPhilosophy.tsx`: Main component that renders the product philosophy section
- `philosophyData.ts`: Data file containing the product principles and their descriptions
- `index.ts`: Exports components and data from this directory

## Usage

```tsx
import { ProductPhilosophy } from "@/components/sections/product-philosophy-section";

export default function HomePage() {
  return (
    <main>
      <ProductPhilosophy />
    </main>
  );
}
```

## Component Features

- **Responsive Layout**: Different views for mobile and desktop
- **Interactive Sidebar**: Click principles to view detailed content
- **Visual Effects**: Includes meteors and background beams for visual appeal
- **Data Separation**: All content is stored in a separate data file for easy editing
