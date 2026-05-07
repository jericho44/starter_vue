# Production-Ready Vue 3 + TypeScript Boilerplate

This is a high-performance, scalable, and feature-rich Vue 3 boilerplate built with modern best practices.

## 🚀 Features

- **Core**: Vue 3 (Composition API, `<script setup>`), TypeScript, Vite
- **Styling**: Tailwind CSS, PostCSS, Dark Mode (`@vueuse/core`)
- **UI Components**: shadcn-vue (custom implementation)
- **Routing**: Vue Router (Lazy loading, Route Guards, Layouts)
- **State Management**: Pinia (Persisted state)
- **API Layer**: Axios (Interceptors, Global error handling)
- **Data Fetching**: TanStack Vue Query (Caching, Mutations)
- **Forms**: VeeValidate + Zod schema validation
- **Tables**: Tailwind CSS HTML tables (TanStack Table style)
- **Charts**: Vue3 ApexCharts integration
- **Dev Tools**: ESLint, Prettier, Husky, Lint-staged, Commitlint
- **Infrastructure**: Docker & Docker Compose (Multi-stage builds)
- **CI/CD**: GitHub Actions

## 🛠️ Project Structure

```text
src/
├── assets/          # Static assets (global CSS, images, fonts)
├── components/
│   ├── ui/          # Low-level UI components (shadcn-vue style)
│   ├── common/      # Shared components across the app
│   └── layouts/     # Page layout wrappers (Main, Auth, Dashboard)
├── pages/           # Page components organized by feature
├── router/          # Vue Router configuration and route guards
├── composables/     # Vue Composition API hooks
├── services/        # API services and external integrations
├── stores/          # Global state management (Pinia)
├── lib/             # Third-party library configurations (e.g., utils.ts)
├── utils/           # Helper functions and formatters
├── types/           # TypeScript interfaces and types
├── plugins/         # Vue plugins (i18n, custom directives)
├── constants/       # App-wide constants
├── schemas/         # Zod validation schemas
└── queries/         # Custom TanStack Vue Query configurations
```

## 📦 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js 20+ (if running locally)

### Using Docker (Recommended)

1. Clone the repository.
2. Start the development server:
   ```bash
   docker compose up
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## 🧪 Testing & Linting

- **Lint Code**: `npm run lint`
- **Format Code**: `npm run format`
- **Build**: `npm run build`

## 📄 License

MIT
