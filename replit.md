# Minimalissimo - Dark Minimalist Portfolio

## Overview

This is a dark-themed minimalist portfolio website built as a full-stack application. The project serves as a landing page for a book, featuring an Amazon country selector that redirects users to their local Amazon store. The application follows a monorepo structure with a React frontend and Express backend, designed for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with custom plugins for Replit integration
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **Component Library**: shadcn/ui (New York style) with Radix UI primitives
- **Routing**: Wouter (lightweight alternative to React Router)
- **State Management**: TanStack React Query for server state
- **Fonts**: Custom Google Fonts (Manrope, Share Tech Mono, Saira Stencil One, Outfit)

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP server wrapping Express
- **Development**: Vite dev server middleware for HMR during development
- **Production**: Static file serving from built assets

### Project Structure
```
client/           # React frontend application
  src/
    components/ui/  # shadcn/ui component library
    pages/          # Page components (home, not-found)
    hooks/          # Custom React hooks
    lib/            # Utility functions and query client
server/           # Express backend
  index.ts        # Server entry point
  routes.ts       # API route definitions
  storage.ts      # Data storage interface (in-memory)
  static.ts       # Static file serving for production
  vite.ts         # Vite dev server setup
shared/           # Shared code between frontend and backend
  schema.ts       # Database schema and Zod validation
```

### Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` for shared type definitions
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage implementation (MemStorage class)
- **Database Ready**: PostgreSQL configuration in place via DATABASE_URL environment variable

### Build System
- **Client Build**: Vite builds to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Build Script**: Custom `script/build.ts` handles both client and server builds
- **Development**: `npm run dev` starts the Express server with Vite middleware

### Path Aliases
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

## External Dependencies

### Core Libraries
- **express**: Web server framework
- **drizzle-orm**: Database ORM (PostgreSQL dialect)
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library (used in home page)
- **zod**: Runtime type validation

### UI Components
- **@radix-ui/***: Headless UI primitives (full suite installed)
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management
- **tailwind-merge**: Tailwind class merging utility

### Database
- **PostgreSQL**: Primary database (requires DATABASE_URL environment variable)
- **connect-pg-simple**: PostgreSQL session store (available for session management)

### Development Tools
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database migration and schema push tooling
- **@replit/vite-plugin-***: Replit-specific Vite plugins for development experience