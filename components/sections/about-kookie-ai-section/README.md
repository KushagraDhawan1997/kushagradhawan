# About Kookie AI Section

This directory contains components and data for the Kookie AI section of the portfolio. This section showcases the vision and capabilities of Kookie AI, a UX-first desktop web product for AI-powered conversation management.

## Structure

- `AboutKookieAISection.tsx`: Main component that renders the entire Kookie AI section
- `kookieAiData.ts`: Data file containing capabilities and content about Kookie AI
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Responsive Layout**: Different designs for mobile and desktop views
- **Capability Cards**: Interactive cards showcasing Kookie AI's core features
- **Dialog System**: Expandable content for detailed capability descriptions
- **Visual Effects**: Gradient text styling and modern UI elements
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { AboutKookieAISection } from "@/components/sections/about-kookie-ai-section";

export default function HomePage() {
  return (
    <main>
      <AboutKookieAISection />
    </main>
  );
}
```

## Component Diagram

```
AboutKookieAISection
├── Title and Subtitle
├── Call-to-Action Button
├── Capability Cards Grid
└── Dialog (appears when triggered)
```

## Data Structure

The kookieAiData file contains structured information about Kookie AI, including:

- Core capabilities and features
- Short descriptions for quick understanding
- Expanded content for detailed explanations
- Differentiation from existing AI tools

## Key Features

- **Conversation Graphs**: Branch anywhere in conversations, not linear scrolls
- **Atomic Processing**: Transform content with purpose-built nodes
- **Artifacts as Nodes**: Outputs are first-class citizens in the conversation
- **Canvas-First UX**: Pan, zoom, and organize your workspace
- **Link & Unlink**: Reorganize and cross-pollinate ideas freely
- **Desktop-First**: Built for knowledge workers and creators

## Styling

The about Kookie AI section uses:

- Gradient text for the headline
- Clean, modern layout for capability cards
- Interactive dialogs for expanded content
- Consistent styling with the rest of the portfolio
