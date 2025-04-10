# SVS Enterprises

A modern web application for SVS Enterprises built with React, Vite, and TypeScript.

## Tech Stack

- React 18
- Vite 5
- TypeScript
- TailwindCSS
- React Router DOM
- Framer Motion
- EmailJS

## Prerequisites

- Node.js 18.x
- npm 9.x or later

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Uchihaharsh/SVSEnterprises.git
cd SVSEnterprises
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Project Structure

```
src/
├── assets/      # Static assets
├── components/  # React components
├── context/     # React context providers
├── data/        # Static data files
├── hooks/       # Custom React hooks
├── pages/       # Page components
├── styles/      # Global styles
├── types/       # TypeScript type definitions
└── utils/       # Utility functions
```

## Features

- Responsive design
- Dark mode support
- Route-based code splitting
- SEO optimization
- Mobile-first approach
- Performance optimized

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_NODE_ENV=development
```

## License

ISC License 