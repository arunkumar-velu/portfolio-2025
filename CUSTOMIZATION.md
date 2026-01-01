# Portfolio Customization Guide

## Quick Start Checklist

### 1. Update Personal Information
Edit `/lib/data.ts` and replace all placeholder content:

```typescript
export const personalInfo = {
  name: "Your Actual Name",           // Replace this
  role: "Your Job Title",              // Replace this
  bio: "Your bio...",                  // Replace this
  email: "your.real@email.com",        // Replace this
  location: "City, Country",           // Replace this
};
```

### 2. Update Social Links
In `/lib/data.ts`, update your social media URLs:

```typescript
export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/YOUR_USERNAME", icon: "FaGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/YOUR_USERNAME", icon: "FaLinkedin" },
  // ... update all URLs
];
```

### 3. Add Your Projects
In `/lib/data.ts`, replace the example projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "What your project does...",
    image: "/projects/your-project.jpg",  // Add image to /public/projects/
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://yourproject.com",
  },
  // Add more projects...
];
```

### 4. Update Skills
Edit the skills array in `/lib/data.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Git", category: "tools" },
  // Add your skills...
];
```

### 5. Add Images
- Create `/public/projects/` folder
- Add your project screenshots
- Update image paths in `data.ts`
- Optionally add your photo to `/public/` and update `About.tsx`

### 6. Update SEO Metadata
Edit `/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer",
  description: "Your custom description...",
  keywords: ["your", "keywords"],
};
```

### 7. Customize Footer
Edit `/app/components/Footer.tsx` to change the footer text.

## 🎨 Styling Tips

### Customize Perpetuity Theme
This portfolio uses the **Perpetuity** theme from [tweakcn.com](https://tweakcn.com/).

To customize colors:
1. Visit [tweakcn.com](https://tweakcn.com/)
2. Select or customize a theme
3. Copy the generated CSS variables
4. Update `/app/globals.css` in the `:root` and `.dark` sections

### Change Primary Color
Edit CSS variables in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.5624 0.0947 203.2755); /* Blue */
  /* Change to your preferred OKLCH color */
}
```

### Using shadcn/ui Components
All UI components are in `/components/ui/`. To use them:
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

<Button variant="default">Click me</Button>
<Card>
  <CardContent>Content here</CardContent>
</Card>
```

### Add New shadcn/ui Components
```bash
npx shadcn@latest add select
npx shadcn@latest add dropdown-menu
# Browse all: https://ui.shadcn.com/
```

### Dark Mode
Dark mode is fully configured! Toggle button is in the header.
Theme variables are defined in both `:root` (light) and `.dark` (dark) in `/app/globals.css`.

## 🚀 Deployment

### Deploy to Vercel
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Environment Variables (if needed)
Create `.env.local`:
```env
NEXT_PUBLIC_FORM_API=your_form_endpoint
```

## 📝 Adding More Sections

### Add Experience Section
1. Create `/app/components/Experience.tsx`
2. Add experience data to `/lib/data.ts`
3. Import in `/app/page.tsx`

### Add Blog
Create `/app/blog/page.tsx` for a blog section.

## 🔧 Common Tasks

### Change Font
Edit `/app/layout.tsx` and import different Google Font:
```typescript
import { Roboto } from "next/font/google";
```

### Add Animations
Already using Framer Motion! Example:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>
```

## 🎨 Perpetuity Theme Details

### Color Palette
The Perpetuity theme uses OKLCH color space for better color consistency:

**Light Mode:**
- Background: `oklch(0.9491 0.0085 197.0126)` - Off-white
- Primary: `oklch(0.5624 0.0947 203.2755)` - Blue
- Accent: `oklch(0.6812 0.0947 203.2755)` - Cyan

**Dark Mode:**
- Background: `oklch(0.1804 0.0106 197.0126)` - Dark blue-gray
- Primary: `oklch(0.6812 0.0947 203.2755)` - Cyan
- Accent: `oklch(0.5624 0.0947 203.2755)` - Blue

### Typography
- Font Family: Source Code Pro, Courier New (monospace)
- Sharp corners: `0.125rem` border radius
- Custom shadows with blue-teal tints

### shadcn/ui Components in Use

1. **Button** (`components/ui/button.tsx`)
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon
   - Used in: Hero, Projects, Header

2. **Card** (`components/ui/card.tsx`)
   - Subcomponents: CardHeader, CardTitle, CardContent, CardFooter
   - Used in: About, Projects, Experience

3. **Badge** (`components/ui/badge.tsx`)
   - Variants: default, secondary, destructive, outline
   - Used in: Projects, Skills, Experience

4. **Avatar** (`components/ui/avatar.tsx`)
   - With AvatarImage and AvatarFallback
   - Used in: About, Experience

5. **Separator** (`components/ui/separator.tsx`)
   - Used in: Footer, Experience

### Customizing Component Styles

To customize a shadcn/ui component:
1. Open the component file in `/components/ui/`
2. Modify the `className` or `variants` using Tailwind classes
3. Changes apply globally wherever the component is used

Example - Make all buttons rounded:
```tsx
// In components/ui/button.tsx
const buttonVariants = cva(
  "rounded-full ..." // Change rounded-md to rounded-full
)
```

### Connect Contact Form
Replace the form handler in `/app/components/Contact.tsx` with:
- FormSpree
- Netlify Forms
- Your own API endpoint

## 📱 Testing

- Test on mobile: Use browser dev tools
- Test performance: [PageSpeed Insights](https://pagespeed.web.dev/)
- Test accessibility: [WAVE](https://wave.webaim.org/)

## 🐛 Troubleshooting

**Images not loading?**
- Ensure images are in `/public/` directory
- Use paths like `/image.jpg` (not `./image.jpg`)

**Styles not applying?**
- Run `npm run dev` to restart
- Clear browser cache
- Check if CSS variables are properly defined in `globals.css`

**shadcn/ui component not found?**
- Run `npx shadcn@latest add <component-name>`
- Check import paths use `@/components/ui/`

**Theme not switching?**
- Ensure ThemeContext is wrapping your app in `layout.tsx`
- Check `globals.css` has both `:root` and `.dark` variables

**Port in use?**
- Next.js will auto-select next available port
- Or stop other dev servers

**CSS linter errors for @config, @theme?**
- These are false positives - Tailwind v4 syntax is valid
- The app builds and runs correctly

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [tweakcn.com Themes](https://tweakcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Good luck with your portfolio! 🚀
