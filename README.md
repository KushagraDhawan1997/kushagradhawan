# Kushagra Dhawan - Personal Website

This is a personal website for Kushagra Dhawan, a product manager and designer. The site showcases his experience, philosophy, and work through a modern, clean interface built with Next.js and custom components.

## Project Overview

The website serves as a comprehensive portfolio and personal brand platform, featuring detailed sections about Kushagra's background, product philosophy, leadership approaches, and case studies. The site emphasizes storytelling and authentic content to connect with potential collaborators and employers.

### Current Features

- **Hero Section**: Clean introduction with compelling headline and testimonials
- **About Section**: Personal background and mission statement
- **About Womp**: Detailed case study of Kushagra's work at Womp
- **About KookieUI**: Showcase of my custom KookieUI design system library
- **Product Philosophy**: Core beliefs and approaches to product management
- **Leadership Approaches**: Insights on team leadership and management
- **Building Products That Scale**: Technical and strategic insights
- **Articles**: In-depth written content on various topics
- **Contact Section**: Multiple ways to connect and collaborate
- **FAQ Section**: Common questions and answers

## Technical Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **UI Components**: [KookieUI](https://kushagradhawan.com/kookie-ui) - My custom design system library
- **Styling**: Custom CSS with CSS variables and modern layout techniques
- **Content**: MDX for rich article content
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: Vercel

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
kushagradhawan/
├── app/                          # Next.js app router
│   ├── articles/[slug]/         # Dynamic article pages
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── generic/                 # Reusable generic components
│   │   ├── Navbar.tsx          # Navigation component
│   │   └── ui/                 # Generic UI components
│   └── sections/               # Page sections
│       ├── about-section/      # Personal background
│       ├── about-womp-section/ # Womp case study
│       ├── about-kookie-ui-section/ # KookieUI showcase
│       ├── hero-section/       # Landing hero
│       ├── contact-section/    # Contact information
│       ├── faq-section/        # Frequently asked questions
│       └── articles-list-section/ # Article listings
├── content/                     # Content files
│   └── articles/               # MDX article content
├── lib/                        # Utility functions
│   ├── articles.ts            # Article processing
│   ├── gradient.ts            # Gradient utilities
│   └── utils.ts               # General utilities
└── public/                     # Static assets
    ├── logo*.png              # Brand assets
    └── showcase/              # Project showcase images
```

## Key Features

### Content Management

- **MDX Articles**: Rich content with React components
- **Dynamic Routing**: Automatic article page generation
- **SEO Optimized**: Meta tags, sitemap, and robots.txt

### Design System

- **KookieUI Integration**: My custom design system library
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels and keyboard navigation
- **Performance**: Optimized images and lazy loading

### Sections Overview

- **Hero**: Compelling introduction with testimonials
- **About**: Personal story and mission
- **Case Studies**: Detailed work examples (Womp, my KookieUI library)
- **Philosophy**: Core product management beliefs
- **Articles**: In-depth written content
- **Contact**: Multiple connection methods

## Recent Changes

### Major Refactoring (Latest)

- **Removed Tailwind CSS**: Migrated to custom CSS with CSS variables
- **Removed MagicUI Dependencies**: Eliminated external UI library dependencies
- **Integrated KookieUI**: Using my custom design system library components
- **Migrated to MDX**: Converted articles from Markdown to MDX format
- **Removed AI Components**: Eliminated chat functionality and related dependencies
- **Fixed Build Issues**: Resolved all TypeScript and import errors

### Architecture Improvements

- **Component Organization**: Better structured component hierarchy
- **Type Safety**: Improved TypeScript coverage
- **Performance**: Optimized bundle size and loading
- **SEO**: Enhanced meta tags and structured data

## Development Notes

### Styling Approach

- Uses CSS custom properties for theming
- Flexbox and Grid for layouts (no margins as per preferences)
- Responsive design with mobile-first approach
- Custom animations and transitions

### Content Strategy

- Focus on authentic storytelling
- Detailed case studies with real impact metrics
- Technical depth balanced with accessibility
- Regular content updates through MDX

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
