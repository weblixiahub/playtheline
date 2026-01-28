# Deployment Guide

## Quick Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js application is using Vercel:

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

Your site will be live in minutes!

## Deploy to Netlify

### Step 1: Build Settings
```bash
Build command: npm run build
Publish directory: .next
```

### Step 2: Environment Variables
No environment variables needed for basic deployment.

### Step 3: Deploy
1. Connect GitHub repo to Netlify
2. Configure build settings
3. Deploy

## Deploy to Custom Server

### Requirements
- Node.js 18+
- PM2 (process manager)

### Steps

1. **Install dependencies on server:**
```bash
npm install
```

2. **Build the application:**
```bash
npm run build
```

3. **Install PM2:**
```bash
npm install -g pm2
```

4. **Start with PM2:**
```bash
pm2 start npm --name "dj-website" -- start
```

5. **Configure Nginx (optional):**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Environment Variables

Currently no environment variables are required. When adding backend features:

### Example .env.local
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
STRIPE_PUBLIC_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_secret_key
```

## Asset Optimization

### Before Deploying:
1. Compress images (use TinyPNG, Squoosh)
2. Convert Hero.mov to optimized format:
```bash
ffmpeg -i Hero.mov -vcodec h264 -acodec aac Hero-optimized.mp4
```
3. Generate multiple video formats:
```bash
ffmpeg -i Hero.mov -vcodec libvpx -acodec libvorbis Hero.webm
```

### Update video tag:
```html
<video>
  <source src="/assets/hero/Hero.webm" type="video/webm">
  <source src="/assets/hero/Hero.mp4" type="video/mp4">
</video>
```

## Performance Checklist

- [ ] Compress all images
- [ ] Optimize video file size
- [ ] Enable caching headers
- [ ] Set up CDN (Cloudflare, Vercel Edge)
- [ ] Test mobile performance
- [ ] Check Lighthouse scores

## Domain Setup

### Custom Domain on Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic

### Custom Domain on Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS
4. SSL is automatic

## Post-Deployment

### Test these pages:
- [ ] Home page loads with video
- [ ] All navigation links work
- [ ] Product pages display correctly
- [ ] Cart functionality works
- [ ] Contact form submits
- [ ] Mobile responsive on all pages
- [ ] Images load properly

### Analytics (Optional)
Add Google Analytics or Plausible:

```tsx
// app/layout.tsx
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Troubleshooting

### Video not playing
- Check file size (should be < 10MB)
- Ensure proper format (MP4 H.264)
- Add `playsInline` attribute

### Images not loading
- Verify files are in `public/assets/`
- Check file extensions match code
- Clear Next.js cache: `rm -rf .next`

### Cart not persisting
- Check browser localStorage is enabled
- Test in incognito mode
- Verify CartContext is wrapping app

## Maintenance

### Update Content
- Replace images in `public/assets/`
- Edit text in page components
- Update product data in merch page

### Update Dependencies
```bash
npm update
npm audit fix
```

## Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
