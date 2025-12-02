# Modern Portfolio Website

A stunning portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring Server-Side Rendering (SSR) for optimal performance and SEO.

## 🚀 Features

- **Server-Side Rendering (SSR)** - Next.js App Router for optimal SEO and performance
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern, responsive design
- **Framer Motion** - Smooth animations and transitions
- **Responsive Design** - Mobile-first approach, works on all devices
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
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

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

## 🎨 Customization

### Update Personal Information

Edit `/lib/data.ts` to customize:
- Personal information (name, role, bio, email, location)
- Projects data
- Skills list
- Social media links

### Change Colors

Modify Tailwind classes in components or update `tailwind.config.ts` for custom theme colors.

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
│   │   └── Footer.tsx
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page (SSR)
│   └── globals.css       # Global styles
├── lib/
│   └── data.ts           # Content data
├── types/
│   └── index.ts          # TypeScript types
├── public/               # Static assets
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

