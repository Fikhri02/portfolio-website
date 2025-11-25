# Portfolio React-Vue

A modern, dynamic portfolio website built with both React and Vue frameworks, demonstrating advanced integration patterns and SOLID principles.

## Features

- 🎨 **Dual Framework Integration**: Seamlessly combines React and Vue components
- 🎭 **Rich Animations**: Smooth transitions and micro-animations using Framer Motion and VueUse Motion
- 🌓 **Theme Toggle**: Dark/Light mode support
- 📱 **Responsive Design**: Mobile-first approach with fluid layouts
- ⚡ **Performance Optimized**: Built with Vite for lightning-fast development and production builds
- 🐳 **Docker Ready**: Containerized for consistent deployment

## Tech Stack

- **Frontend Frameworks**: React 19, Vue 3
- **Language**: TypeScript
- **Build Tool**: Vite
- **Animation**: Framer Motion, VueUse Motion
- **Styling**: CSS with custom design system

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-react-vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Docker Deployment

### Prerequisites

- Docker
- Docker Compose (optional, but recommended)

### Using Docker Compose (Recommended)

1. **Build and run the container**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   Open your browser to `http://localhost:3000`

3. **View logs**
   ```bash
   docker-compose logs -f
   ```

4. **Stop the container**
   ```bash
   docker-compose down
   ```

### Using Docker CLI

1. **Build the image**
   ```bash
   docker build -t portfolio-react-vue:latest .
   ```

2. **Run the container**
   ```bash
   docker run -d -p 3000:80 --name portfolio-react-vue portfolio-react-vue:latest
   ```

3. **Access the application**
   Open your browser to `http://localhost:3000`

4. **Stop and remove the container**
   ```bash
   docker stop portfolio-react-vue
   docker rm portfolio-react-vue
   ```

### Docker Image Details

- **Base Image**: nginx:alpine (production)
- **Image Size**: ~20-30MB
- **Build Strategy**: Multi-stage build
- **Features**: Gzip compression, security headers, SPA routing, health checks

## Project Structure

```
portfolio-react-vue/
├── src/
│   ├── core/           # Shared utilities and types
│   ├── react/          # React components
│   ├── vue/            # Vue components
│   ├── integration/    # Framework integration layer
│   ├── styles/         # Global styles and design system
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose configuration
├── nginx.conf          # Nginx server configuration
└── vite.config.ts      # Vite configuration
```

## Development

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

## License

MIT

