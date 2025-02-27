# donbcolab.github.io

A React application with React Router, bootstrapped with Vite, TypeScript, and Tailwind CSS.

> TLDR:  Anthropic Claude can sometimes generate remarkably useful TypeScript code.  To get it work in February 2025 the essentials can be reduced to running the following...  Claude doesn't know about Tailwind 4 yet, so best to avoid it!

```bash
# Install Tailwind CSS and its peer dependencies
echo -e "\n${YELLOW}Setting up Tailwind CSS...${NC}"
npm install -D tailwindcss@^3.4.1 @tailwindcss/postcss@^4.0.8 postcss@^8 autoprefixer@^10.4.16
npx tailwindcss init -p
```

> Slightly longer version:  run the [`react-bootstrap-script-v2.sh` script](./scripts/react-bootstrap-script-v2.sh) to bootstrap a basic environment that you can drop your Claude 3.7 tsx files into and watch the magic happen.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Features

- React 18 with TypeScript
- React Router for navigation
- Vite for fast builds and development
- Tailwind CSS for styling
- Path aliases for clean imports
- Responsive design with dark mode support

## Project Structure

- `src/pages/`: Page components that correspond to routes
- `src/components/`: Reusable UI components
- `src/layouts/`: Layout components for page structure
- `src/lib/`: Utility functions and shared logic

## Learn More

- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
