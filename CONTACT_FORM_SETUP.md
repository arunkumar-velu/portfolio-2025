# Contact Form Setup Guide

## Current Implementation

The contact form is now connected to a backend API route (`/app/api/contact/route.ts`) that handles form submissions.

## Setup Instructions

### Option 1: Web3Forms (Recommended - Easiest & Free)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Get your Access Key from the dashboard
4. Create a `.env.local` file in the project root:
   ```bash
   cp .env.example .env.local
   ```
5. Add your access key:
   ```
   WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
6. Restart your dev server

**Features:**
- Free tier: 250 submissions/month
- Email notifications to your email
- No credit card required
- Simple setup

### Option 2: Resend (Professional - Recommended for Production)

1. Sign up at [https://resend.com](https://resend.com)
2. Get your API key
3. Install package:
   ```bash
   npm install resend
   ```
4. Update `/app/api/contact/route.ts`:
   ```typescript
   import { Resend } from 'resend';
   
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   export async function POST(request: Request) {
     const { name, email, message } = await request.json();
     
     await resend.emails.send({
       from: 'portfolio@yourdomain.com',
       to: 'guruvaarun@gmail.com',
       subject: `New Contact: ${name}`,
       html: `
         <h2>New Contact Form Submission</h2>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Message:</strong></p>
         <p>${message}</p>
       `
     });
   }
   ```

**Features:**
- 3,000 emails/month free
- Professional email delivery
- Great for production
- Requires domain setup

### Option 3: SendGrid

1. Sign up at [https://sendgrid.com](https://sendgrid.com)
2. Get API key
3. Install: `npm install @sendgrid/mail`
4. Similar setup to Resend

### Option 4: Formspree

1. Go to [https://formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the Contact component to submit directly to Formspree

## Testing

After setup, test the form:
1. Fill out the contact form
2. Submit
3. Check your email for the notification
4. Check browser console for any errors

## Security Notes

- Never commit `.env.local` to Git (already in `.gitignore`)
- Use environment variables for all API keys
- Implement rate limiting for production
- Add CAPTCHA for spam prevention (optional)

## Current Configuration

- API Route: `/app/api/contact/route.ts`
- Contact Form: `/app/components/Contact.tsx`
- Admin Email: guruvaarun@gmail.com
- Current Provider: Web3Forms (configured but needs API key)
