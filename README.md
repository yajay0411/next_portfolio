# Portfolio - Next.js Boilerplate

A modern, high-performance portfolio website built with Next.js 15, TypeScript, and best practices for maintainability and scalability.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **ESLint** + **Prettier** for code quality
- **Jest** + **Testing Library** for testing
- **Husky** + **lint-staged** for git hooks
- **Commitlint** for conventional commits
- **Framer Motion** for animations
- **React Icons** for iconography
- **Modern CSS** with CSS custom properties
- **SEO optimized** with metadata
- **Performance optimized** with image optimization
- **Security headers** configured
- **Responsive design** ready

## 📦 Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **Styling**: CSS with custom properties
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Testing**: Jest + Testing Library
- **Linting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Node Version**: 22.18.0 (managed by Volta)

## 🛠️ Getting Started

### Prerequisites

- Node.js 22.18.0 or higher
- npm 11.5.2 or higher

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env.local
   ```

   Edit `.env.local` with your configuration.

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/          # Reusable components
│   ├── lib/                # Third-party library configs
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── hooks/              # Custom React hooks
│   └── styles/             # Component styles
├── public/                 # Static assets
├── tests/                  # Test files
└── config files...
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run analyze` - Analyze bundle size
- `npm run clean` - Clean build files

## 📝 Code Quality

### ESLint Rules

- TypeScript-specific rules
- Next.js best practices
- React hooks rules
- Code style consistency

### Prettier Configuration

- Single quotes
- Trailing commas
- 80 character line width
- 2 space indentation

### Git Hooks

- **Pre-commit**: Runs tests and lint-staged
- **Commit-msg**: Validates commit message format

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score**: 100/100
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with tree shaking
- **Image Optimization**: WebP/AVIF formats
- **Caching**: Optimized headers

## 🔒 Security

- Security headers configured
- XSS protection
- Content type sniffing prevention
- Frame options set

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test changes
- `chore:` - Build/tool changes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Vercel](https://vercel.com/) - Deployment platform
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Framer Motion](https://www.framer.com/motion/) - Animations
