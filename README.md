# Modern Portfolio Website

A stunning portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring Server-Side Rendering (SSR) for optimal performance and SEO.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Next.js App Router for optimal SEO and performance
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern, responsive design with CSS variables
- **shadcn/ui** - Accessible, customizable component library
- **Perpetuity Theme** - Professional design system from tweakcn.com
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode** - Full theme switching support
- **SEO Optimized** - Meta tags and structured data
- **Smooth Scrolling** - Enhanced navigation experience

## 📋 Sections

- **Hero** - Eye-catching introduction with social links
- **About** - Personal information and background
- **Projects** - Showcase of your best work
- **Skills** - Technical skills organized by category
- **Contact** - Contact form and social links
- **Footer** - Copyright and attribution

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS with CSS variables
- [shadcn/ui](https://ui.shadcn.com/) - Accessible component library
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components (via shadcn/ui)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

## 🎨 shadcn/ui Setup

This project uses [shadcn/ui](https://ui.shadcn.com/) with the **Perpetuity** theme from [tweakcn.com](https://tweakcn.com/).

### Adding New shadcn/ui Components

To add new shadcn/ui components to your project:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
# ... or any other component
```

### Installed Components

The following shadcn/ui components are already installed:
- Button - Versatile button with multiple variants
- Card - Container with header, content, footer
- Badge - Labels and tags
- Avatar - User profile pictures with fallback
- Separator - Visual divider
- Tooltip - Contextual information on hover
- Dialog - Modal overlays
- Form - Form management with validation
- Input, Textarea, Label - Form inputs
- Tabs - Tabbed interfaces
- Navigation Menu - Complex navigation patterns

### Theme Configuration

The Perpetuity theme uses:
- **Colors**: Blue/Cyan palette with OKLCH values
- **Typography**: Source Code Pro / Courier New (monospace)
- **Radius**: Sharp corners (0.125rem)
- **Dark Mode**: Full support with CSS variables

Theme variables are defined in [`app/globals.css`](app/globals.css).

## 🎨 Customization

### Update Personal Information

Edit `/lib/data.ts` to customize:
- Personal information (name, role, bio, email, location)
- Projects data
- Skills list
- Social media links

### Change Colors & Theme

The portfolio uses the **Perpetuity** theme from tweakcn.com. To customize:

1. **Using tweakcn.com** (Recommended):
   - Visit [tweakcn.com](https://tweakcn.com/)
   - Select a different theme or customize Perpetuity
   - Copy the generated CSS variables
   - Update `:root` and `.dark` sections in `app/globals.css`

2. **Manual Customization**:
   - Edit CSS variables in `app/globals.css`:
     - `--primary`, `--secondary`, `--accent` for main colors
     - `--background`, `--foreground` for base colors
     - `--radius` for border radius
   - Or modify `tailwind.config.ts` for additional customization

### Add Images

1. Add your images to the `/public` folder
2. Update the image paths in `/lib/data.ts`
3. Replace emoji placeholders in components with actual images

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure deployment
4. Your site will be live in minutes!

## 🎯 SSR Implementation

This portfolio uses Next.js App Router which provides SSR by default. Key benefits:

- **Fast initial page load** - HTML is rendered on the server
- **Better SEO** - Search engines can crawl fully rendered content
- **Improved performance** - Optimized Core Web Vitals
- **Social media previews** - Open Graph tags work perfectly

## 📚 Project Structure

```
new-portfolio/
├── app/
│   ├── components/        # React components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Sidebar.tsx
│   ├── context/
│   │   └── ThemeContext.tsx  # Dark mode context
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Home page (SSR)
│   └── globals.css           # Global styles + theme variables
├── components/
│   └── ui/                   # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── avatar.tsx
│       ├── separator.tsx
│       └── ...               # Other shadcn components
├── lib/
│   ├── data.ts               # Content data
│   └── utils.ts              # shadcn/ui utilities (cn helper)
├── types/
│   └── index.ts              # TypeScript types
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
└── package.json
```

## 💡 Tips

1. **Add Real Images**: Replace emoji placeholders with actual project screenshots
2. **Update Content**: Personalize all content in `/lib/data.ts`
3. **Add Analytics**: Integrate Google Analytics or Plausible
4. **Add Contact Form Backend**: Connect to FormSpree, Netlify Forms, or build your own API
5. **Add Blog**: Create a `/blog` route for articles

---

**Built with ❤️ using Next.js**

