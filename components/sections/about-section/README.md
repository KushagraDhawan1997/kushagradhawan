# About Section

This directory contains components and data for the about section of the portfolio. The about section introduces professional capabilities and experience through a visually engaging layout.

## Structure

- `AboutSection.tsx`: Main component that renders the entire about section
- `AboutSectionGrid.tsx`: Manages grid layout and positioning of capability cards
- `AboutSectionCard.tsx`: Thin wrapper around StandardSectionCard for capability-specific illustrations
- `AboutSectionDialog.tsx`: Thin wrapper around StandardSectionDialog for capability details
- `about-section-data.ts`: Data file containing all capability content and metadata
- Illustration components in `illustrations/` folder:
- `TechIconsGrid.tsx`: Component for displaying a grid of technology icons
- `GlobeIllustration.tsx`: Visual component displaying a globe illustration
- `TeamLeadershipBeam.tsx`: Visual component for team leadership section
- `index.ts`: Exports all components and data from this directory

## Standardized Components

This section uses standardized generic components from `components/generic/section/`:

- `StandardSectionCard`: Base component for all section cards with consistent styling and behavior
- `StandardSectionDialog`: Base component for all section dialogs with consistent styling and behavior
- All cards use the `IllustrationSize` type ("small" | "medium" | "large") to control illustration sizing

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Bento Grid**: Desktop view uses a custom grid layout with varying card sizes
- **Capability Cards**: Clickable cards that open a dialog with detailed information
- **Visual Effects**: Gradient text styling, hover effects, and custom illustrations
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { AboutSection } from "@/components/sections/about-section";

export default function HomePage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}
```

## Component Diagram

```
AboutSection
├── Title and Subtitle
├── Call-to-Action Button
├── AboutSectionGrid (Mobile)
│   ├── AboutSectionCard (multiple instances)
│       └── StandardSectionCard
├── AboutSectionGrid (Desktop)
│   ├── AboutSectionCard (multiple instances)
│       └── StandardSectionCard
└── AboutSectionDialog (appears when a card is clicked)
    └── StandardSectionDialog
```

## Data Structure

The capabilities data file contains an array of capability objects, each with:

- `title`: Title displayed at the top of the card
- `description`: Short description text displayed on the card
- `expandedContent`: Detailed content shown in the dialog
- `gridArea`: CSS grid area for desktop layout positioning
- `illustrationPlaceholder`: Boolean indicating if an illustration should be shown
- `illustrationSize`: Size of the illustration ("small", "medium", or "large")

## Styling

The about section uses:

- Gradient text for the headline
- Custom grid layout for desktop view
- Standardized card styling with consistent presentation
- Interactive elements with hover effects
