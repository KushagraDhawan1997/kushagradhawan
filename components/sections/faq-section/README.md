# FAQ Section

This directory contains components and data for the frequently asked questions section of the portfolio. This section provides information about professional approach, leadership philosophy, and product development methodology in an interactive accordion format.

## Structure

- `FAQSection.tsx`: Main component that renders the entire FAQ section
- `faqData.ts`: Data file containing all questions and answers
- `index.ts`: Exports all components and data from this directory

## Design Features

- **Accordion Interface**: Interactive expandable/collapsible questions and answers
- **Whitespace Preservation**: Maintains formatting in multi-paragraph answers
- **Visual Highlighting**: Questions are emphasized with primary color
- **Gradient Text**: Header uses gradient styling for visual appeal
- **Data Separation**: All content is stored in a separate data file for easy editing

## Usage

```tsx
import { FAQSection } from "@/components/sections/faq-section";

export default function HomePage() {
  return (
    <main>
      <FAQSection />
    </main>
  );
}
```

## Component Diagram

```
FAQSection
├── Title and Subtitle
├── Accordion
│   ├── Question 1 + Answer 1
│   ├── Question 2 + Answer 2
│   └── ... (additional Q&A pairs)
└── Call-to-Action Button
```

## Data Structure

The FAQ data file contains an array of FAQ objects, each with:

- Question: The frequently asked question
- Answer: Detailed response with preserved whitespace formatting

## Styling

The FAQ section uses:

- Gradient text for the headline
- Primary color emphasis for questions
- Whitespace preservation for better readability of answers
- Center alignment for title and call-to-action
- Constrained width for better readability of content
