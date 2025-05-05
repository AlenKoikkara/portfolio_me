# Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a smooth scroll carousel interface showcasing projects, blogs, photography, and personal information.

## Features

- 🎨 Modern and clean design with dark/light mode support
- 📱 Fully responsive layout
- 🎭 Smooth scroll carousel navigation
- 📝 Blog section for articles and thoughts
- 📸 Photography showcase
- 👤 About section with personal information
- ⚡ Built with performance in mind
- 🎯 TypeScript for type safety
- 🔄 React Router for seamless navigation
- 🐳 Docker support for easy deployment
- 🔄 Automated CI/CD with GitHub Actions
- 🚀 Coolify deployment on Raspberry Pi 5
- 📦 GitHub Release Managements

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router DOM
- ESLint
- Docker
- Nginx
- GitHub Actions
- Coolify
- GitHub Releases

## Getting Started

### Local Development

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

### Docker Deployment

1. Build the Docker image
```bash
docker build -t portfolio .
```

2. Run the container
```bash
docker run -p 80:80 portfolio
```

The application will be available at `http://localhost:80`

### GitHub Actions & Coolify Deployment

This project is set up for automated deployment using GitHub Actions and Coolify:

1. GitHub Actions automatically builds and pushes the Docker image to GitHub Container Registry (GHCR) on every push to the main branch
2. Coolify running on your Raspberry Pi 5 automatically pulls and deploys the latest image

To set up the deployment:

1. Ensure your repository has GitHub Actions enabled
2. Install Coolify on your Raspberry Pi 5
3. In Coolify:
   - Create a new project
   - Connect your GitHub repository
   - Select the Docker deployment type
   - Configure the environment variables if needed

### Versioning

This project uses GitHub Releases for version management:

1. Create a new release on GitHub:
   - Go to the repository's "Releases" section
   - Click "Create a new release"
   - Tag version (e.g., v1.0.0)
   - Add release notes
   - Publish the release

2. The workflow will:
   - Build and tag the Docker image with the release version
   - Push the image to GHCR
   - Coolify will automatically deploy the new version

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  │   ├── Navigation.tsx
  │   ├── Footer.tsx
  │   └── BottomBar.tsx
  ├── context/       # React context providers
  │   └── CarouselContext.tsx
  ├── pages/         # Page components
  │   ├── Home.tsx
  │   ├── Blogs.tsx
  │   ├── Photography.tsx
  │   └── About.tsx
  ├── layout/        # Layout components
  ├── projects/      # Project showcase components
  ├── assets/        # Static assets
  ├── svg/           # SVG components
  ├── App.tsx        # Root component
  └── main.tsx       # Application entry point
```

## Development

- The project uses ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- React Router for navigation
- Docker for containerization
- Nginx for production serving
- GitHub Actions for CI/CD
- Coolify for automated deployment
- GitHub Releases for version management

## License

MIT
