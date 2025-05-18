# About Womp Section

This directory contains components and data for the Womp experience section of the portfolio. This section showcases leadership experience and impact at Womp through engaging visuals and statistics.

## Structure

- `AboutWompSection.tsx`: Main component that renders the entire Womp section
- `WompStats.tsx`: Component for displaying key statistics and metrics about Womp
- `WompIllustrationGrid.tsx`: Component for displaying a grid of Womp-related illustrations
- `WompDialog.tsx`: Component for showing detailed information in a modal dialog
- `wompData.ts`: Data file containing statistics and other content
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Statistics Display**: Visually engaging presentation of key metrics and accomplishments
- **Illustration Grid**: Showcases visual examples of work at Womp
- **Visual Effects**: Gradient text styling and modern UI elements
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { AboutWompSection } from "@/components/sections/about-womp-section";

export default function HomePage() {
  return (
    <main>
      <AboutWompSection />
    </main>
  );
}
```

## Component Diagram

```
AboutWompSection
├── Title and Subtitle
├── Call-to-Action Button
├── WompStats
├── WompIllustrationGrid (Mobile)
├── WompIllustrationGrid (Desktop)
└── WompDialog (appears when triggered)
```

## Data Structure

The wompData file contains structured information about Womp, including:

- Key statistics and metrics
- Growth indicators
- User engagement numbers
- Other accomplishments and impact measures

## Styling

The about Womp section uses:

- Gradient text for the headline
- Clean, modern layout for statistics
- Visual grid for showcasing work examples
- Consistent styling with the rest of the portfolio
