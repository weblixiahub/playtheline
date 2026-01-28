# Play The Line - DJ Brand Website

A modern, cinematic DJ/artist website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Video Hero Section** - Autoplay background video with fallback image for mobile
- **Merch Store** - Client-side cart with size/quantity selection (no payment processing yet)
- **Gallery & Press** - Photo galleries for media and promotional content
- **Shows Page** - Upcoming events and show flyers
- **Responsive Design** - Mobile-first, fully responsive across all devices
- **Dark Theme** - Professional nightlife aesthetic with bold typography
- **Smooth Animations** - Subtle fade and slide animations throughout

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API (Cart)
- **Images**: Next.js Image Optimization

## Project Structure

```
dj-website/
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact form
│   ├── merch/          # Merch store
│   │   ├── [id]/       # Product details
│   │   └── cart/       # Shopping cart
│   ├── music/          # Music page
│   ├── shows/          # Shows page
│   ├── videos/         # Videos & gallery
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── context/
│   └── CartContext.tsx # Shopping cart state
├── public/
│   └── assets/         # Media assets
│       ├── branding/   # Logos
│       ├── hero/       # Hero media
│       ├── media/      # Merch photos
│       ├── press/      # Press photos
│       └── shows/      # Show flyers
└── types/              # TypeScript types

```

## Getting Started

### Prerequisites

- Node.js 18+ 
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

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Home (/)
- Full-screen video hero with overlay
- Featured merch section (3 products)
- Gallery strip with horizontal scroll
- Call-to-action buttons

### About (/about)
- Hero banner image
- Two-column bio layout
- Press photos
- Achievements list

### Merch (/merch)
- Product grid (3 items)
- Product detail pages with image galleries
- Size and quantity selectors
- Shopping cart functionality
- Client-side cart storage (localStorage)

### Shows (/shows)
- Large featured show flyer
- Upcoming events layout
- Newsletter signup
- Booking contact info

### Music (/music)
- Press photos repurposed as content placeholders
- Streaming platform links (Spotify, SoundCloud, Apple Music)
- Featured mixes list

### Videos (/videos)
- Gallery/masonry layout
- Press photo collection
- Video placeholders
- Social media links

### Contact (/contact)
- Booking inquiry form
- Subject selection dropdown
- Press kit download section
- Social media links

## Customization

### Fonts
The site uses:
- **Display**: Bebas Neue (headers, titles)
- **Body**: Oswald (body text, navigation)

To change fonts, edit `app/globals.css`:
```css
@import url('your-font-url');

:root {
  --font-display: 'Your Display Font';
  --font-body: 'Your Body Font';
}
```

### Colors
Brand colors are defined in `tailwind.config.ts`:
```ts
colors: {
  brand: {
    red: '#FF3B3B',    // Accent color
    dark: '#0A0A0A',   // Background
    gray: '#1A1A1A',   // Secondary background
  },
}
```

### Assets
Replace assets in `public/assets/` with your own:
- Logos: `branding/Logo1-4.jpg`
- Hero: `hero/Hero.mov` and `Hero.jpg`
- Merch: `media/Merch1-10.jpg`
- Press: `press/IMG_8140-8153.jpg`
- Shows: `shows/Upcoming.PNG`

## Cart Functionality

The shopping cart is implemented using React Context and localStorage:
- Add items with size and quantity selection
- Update quantities
- Remove items
- Persists across page refreshes
- No backend required

To add payment processing:
1. Install Stripe/PayPal SDK
2. Create checkout API route
3. Update cart page with payment integration

## Future Enhancements

- Backend API integration
- Payment processing (Stripe)
- CMS integration (Sanity, Contentful)
- Email newsletter integration
- Audio player for mixes
- Video embeds (YouTube, Vimeo)
- Blog section
- Event calendar with filtering

## Performance

- Image optimization via Next.js Image component
- Lazy loading for images
- Code splitting via Next.js App Router
- Minimal JavaScript bundle size
- CSS-only animations where possible

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for demonstration purposes.

## Contact

For questions or support, use the contact form on the website.
