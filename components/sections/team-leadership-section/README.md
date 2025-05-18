# Team Leadership Section

This directory contains components and data for the team leadership section of the portfolio. This section showcases leadership approaches and achievements through an engaging, interactive layout.

## Structure

- `TeamLeadershipSection.tsx`: Main component that renders the entire section
- `ApproachesGrid.tsx`: Component for displaying the grid of approach cards
- `ApproachCard.tsx`: Component for displaying individual approach cards
- `ApproachDialog.tsx`: Component for showing detailed approach information in a modal dialog
- `approaches.ts`: Data file containing all leadership approach content and metadata
- `AIIllustration.tsx`: Visual component for AI leadership illustration
- `TeamIllustration.tsx`: Visual component for team building illustration
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Bento Grid**: Desktop view uses a custom grid layout with varying card sizes
- **Approach Cards**: Clickable cards that open a dialog with detailed information
- **Visual Effects**: Gradient text styling, hover effects, and custom illustrations
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { TeamLeadershipSection } from "@/components/sections/team-leadership-section";

export default function HomePage() {
  return (
    <main>
      <TeamLeadershipSection />
    </main>
  );
}
```

## Component Diagram

```
TeamLeadershipSection
├── Title and Subtitle
├── Call-to-Action Button
├── ApproachesGrid (Mobile)
│   ├── ApproachCard (multiple instances)
├── ApproachesGrid (Desktop)
│   ├── ApproachCard (multiple instances)
└── ApproachDialog (appears when a card is clicked)
```

## Data Structure

The approaches data file contains an array of approach objects, each with:

- Title and short description for card display
- Detailed description for dialog display
- Type information for layout purposes
- Visual component references where applicable

## Styling

The team leadership section uses:

- Gradient text for the headline
- Custom grid layout for desktop view
- Different card designs based on content type
- Interactive elements with hover effects
