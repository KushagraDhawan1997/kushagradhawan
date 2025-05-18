# Startup Solutions Section

This directory contains components and data for the technical product leadership section of the portfolio. This section showcases expertise in technical product leadership for startups through an engaging, interactive layout.

## Structure

- `StartupSolutionsSection.tsx`: Main component that renders the entire section
- `StartupSolutionsSectionGrid.tsx`: Manages grid layout and positioning of solution cards
- `StartupSolutionsSectionCard.tsx`: Thin wrapper around StandardSectionCard for solution-specific illustrations
- `StartupSolutionsSectionDialog.tsx`: Thin wrapper around StandardSectionDialog for solution details
- `startup-solutions-section-data.ts`: Data file containing all solution content and metadata
- Illustration components in `illustrations/` folder:
- `EngineeringProductThinking.tsx`: Visual component for engineering product thinking illustration
  - `CrossFunctionalTeamIllustration.tsx`: Visual component for cross-functional team illustration
- `index.ts`: Exports all components and data from this directory

## Standardized Components

This section uses standardized generic components from `components/generic/section/`:

- `StandardSectionCard`: Base component for all section cards with consistent styling and behavior
- `StandardSectionDialog`: Base component for all section dialogs with consistent styling and behavior
- All cards use the `IllustrationSize` type ("small" | "medium" | "large") to control illustration sizing
- Special background support for AI-related cards using BackgroundGradientAnimation

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Bento Grid**: Desktop view uses a custom grid layout with varying card sizes
- **Solution Cards**: Clickable cards that open a dialog with detailed information
- **Visual Effects**: Gradient text styling, hover effects, custom illustrations, and animated backgrounds
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { StartupSolutionsSection } from "@/components/sections/startup-solutions-section";

export default function HomePage() {
  return (
    <main>
      <StartupSolutionsSection />
    </main>
  );
}
```

## Component Diagram

```
StartupSolutionsSection
├── Title and Subtitle
├── Call-to-Action Button
├── StartupSolutionsSectionGrid (Mobile)
│   ├── StartupSolutionsSectionCard (multiple instances)
│       └── StandardSectionCard
├── StartupSolutionsSectionGrid (Desktop)
│   ├── StartupSolutionsSectionCard (multiple instances)
│       └── StandardSectionCard
└── StartupSolutionsSectionDialog (appears when a card is clicked)
    └── StandardSectionDialog
```

## Data Structure

The solutions data file contains an array of solution objects, each with:

- `problem`: Title displayed at the top of the card
- `description`: Short description text displayed on the card
- `expandedContent`: Detailed content shown in the dialog
- `gridArea`: CSS grid area for desktop layout positioning
- `illustrationPlaceholder`: Boolean indicating if an illustration should be shown
- `illustrationSize`: Size of the illustration ("small", "medium", or "large")
- `useSpecialBackground`: Boolean indicating if a special background component should be used

## Styling

The startup solutions section uses:

- Gradient text for the headline
- Custom grid layout for desktop view
- Standardized card styling with consistent presentation
- Interactive elements with hover effects
- Special animated backgrounds for AI-related content
