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

### Change Primary Color
Replace `blue-600` with another color throughout components:
- `blue-600` → `purple-600`, `green-600`, `indigo-600`, etc.

### Add Dark Mode
Next.js supports dark mode. Add to `tailwind.config.ts`:

```typescript
darkMode: 'class',
```

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

**Port in use?**
- Next.js will auto-select next available port
- Or stop other dev servers

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Good luck with your portfolio! 🚀
