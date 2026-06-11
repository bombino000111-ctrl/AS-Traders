# AS Traders - Wholesale Stationery Website

A modern, responsive, and SEO-friendly website for AS Traders, a wholesale stationery supplier. Built with Next.js, TypeScript, Tailwind CSS, and MongoDB.

## Features

### Frontend
- ✅ Modern, clean, and professional design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized with meta tags and structured data
- ✅ Fast loading speed with Next.js optimization
- ✅ WhatsApp integration for instant inquiries
- ✅ Google Analytics ready

### Pages
1. **Home Page** - Hero banner, company intro, product categories, featured products, benefits, testimonials, CTAs
2. **About Us** - Company story, mission, vision, target customers
3. **Products** - Category filters, search functionality, product listings
4. **Product Details** - Images, descriptions, specifications, inquiry options
5. **Wholesale Inquiry** - Lead capture form with validation
6. **Contact Us** - Contact details, WhatsApp, Google Maps placeholder, contact form
7. **FAQ** - Common customer questions with accordion layout
8. **Admin Panel** - Dashboard, product management, categories, inquiries, content management

### Product Categories
- Writing Supplies
- School Stationery
- Office Supplies
- Paper Products
- Art & Craft Materials
- Educational Supplies

### Admin Panel Features
- Add/Edit/Delete Products
- Manage Categories
- View Customer Inquiries
- Manage Website Content
- Dashboard with statistics

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (for admin)
- **Email**: Nodemailer for inquiry notifications

## Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   cd as-traders
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   - MongoDB URI
   - Email credentials
   - JWT secret
   - WhatsApp number
   - Google Analytics ID (optional)

4. **Start MongoDB**
   ```bash
   # Make sure MongoDB is running on your system
   mongod
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
as-traders/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About Us page
│   │   ├── products/          # Products listing page
│   │   ├── product/[slug]/    # Product details page
│   │   ├── inquiry/           # Wholesale inquiry form
│   │   ├── contact/           # Contact Us page
│   │   ├── faq/               # FAQ page
│   │   └── admin/             # Admin panel
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── ui/                # Reusable UI components
│   │   └── sections/          # Page sections
│   ├── lib/
│   │   ├── config.ts          # Site configuration
│   │   ├── data.ts            # Sample data
│   │   └── mongodb.ts         # Database connection
│   └── models/                # Mongoose models
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.mjs            # Next.js configuration
```

## Key Features Implementation

### SEO Optimization
- Meta tags for each page
- Open Graph tags for social sharing
- Structured data for products
- Semantic HTML structure
- Fast page load times

### Lead Generation
- Multiple inquiry forms
- WhatsApp integration
- Clear call-to-action buttons
- Contact information on every page

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation
- Optimized images

## Customization

### Branding
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your brand colors */ },
  secondary: { /* accent colors */ },
}
```

### Content
Edit sample data in `src/lib/data.ts` or connect to MongoDB for dynamic content.

### Email Notifications
Configure SMTP settings in `.env.local` to receive inquiry notifications.

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Recommended Hosting
- **Vercel** - Best for Next.js applications
- **Netlify** - Alternative static hosting
- **AWS/DigitalOcean** - For full control with MongoDB

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| MONGODB_URI | MongoDB connection string | Yes |
| EMAIL_HOST | SMTP host | For email notifications |
| EMAIL_PORT | SMTP port | For email notifications |
| EMAIL_USER | SMTP username | For email notifications |
| EMAIL_PASSWORD | SMTP password | For email notifications |
| JWT_SECRET | Secret key for JWT | For admin auth |
| WHATSAPP_NUMBER | Business WhatsApp number | Recommended |
| NEXT_PUBLIC_GA_ID | Google Analytics ID | Optional |

## License

This project is proprietary software created for AS Traders.

## Support

For technical support or questions, contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
