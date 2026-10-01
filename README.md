# ByteSpace

ByteSpace is a modern learning platform landing experience built with Next.js, React, TypeScript, and Tailwind CSS. The project showcases a polished marketplace UI for browsing courses, discovering creators, and engaging with a digital education brand.

## Overview

This repository contains a front-end prototype for a course marketplace and creator-focused community. The app includes:

- A marketing-style home page with hero sections and CTAs
- A course discovery page with search and filter controls
- A creators page highlighting a featured creator profile
- Shared UI patterns such as headers, footers, buttons, inputs, and cards
- Responsive, mobile-friendly layouts built for a clean educational brand experience

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Project Structure

```text
.
├── app/
│   ├── (auth)/
│   │   ├── common/
│   │   ├── login/
│   │   └── register/
│   ├── (main)/
│   │   ├── common/
│   │   ├── courses/
│   │   ├── creators/
│   │   ├── home/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── footer/
│   ├── header/
│   ├── globals.css
│   ├── layout.tsx
│   └── not-found.tsx
├── libs/
│   └── ui-components/
├── public/
│   └── icons/
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs
└── README.md
```

## Main Features

### Home experience
The homepage combines multiple sections to present the platform value proposition, including:

- Hero banner with layered UI graphics
- Sponsor/partner section
- Discovery and explore blocks
- Learning path content
- Community and unlock sections

### Course discovery
The course page includes:

- Search bar for course lookup
- Filter controls
- Category chip buttons
- Reusable course cards for a marketplace-style UX

### Creator experience
The creators page includes:

- Featured creator profile layout
- Follow/action button styling
- Creator stats and bio area
- Reusable course listings beneath the profile

## Getting Started

Install dependencies:

```bash
npm install
```

Run the app in development mode:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev     # start the Next.js dev server
npm run build   # create a production build
npm run start   # run the built app
npm run lint    # run ESLint checks
```

## Notes

- This is a front-end UI project and does not include backend authentication, database integration, or payments.
- The design is structured around a learning marketplace concept and uses reusable UI components for speed and consistency.
- The app is organized using Next.js route groups for auth and main sections, which helps keep the codebase modular and clean.

## License

This project is currently unlicensed unless added later by the repository owner.

## Contributing

Contributions are welcome. If you want to improve the design, add interactivity, or expand the content architecture, open a pull request with a clear summary of the change.
