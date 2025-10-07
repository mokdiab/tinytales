# Tiny Tales - E-commerce Platform

A modern, responsive e-commerce platform built with Next.js 15, featuring user authentication, product browsing, and a beautiful UI.

🌐 **Live Demo**: [https://tinytales-beta.vercel.app/]

## 🚀 Features

- **User Authentication**: Complete login/register system with email verification
- **Product Catalog**: Browse products with detailed views and ratings
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Shopping Cart**: Add products to cart with quantity management
- **Wishlist**: Save favorite products for later
- **User Dashboard**: Personal dashboard with account information
- **Image Optimization**: Optimized images with fallback avatars

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd tinytales
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```bash
   NEXT_PUBLIC_API_BASE_URL=your_api_base_url
   ```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

   Or visit the live demo at: [https://tinytales-beta.vercel.app/]

## 🎯 Usage

### Getting Started

1. **Homepage**: Visit the homepage to see the main navigation and featured content
2. **Authentication**:
   - Click "Login" to sign in with existing credentials
   - Click "Register" to create a new account
   - Complete email verification if required

### User Features

#### Dashboard

- Access your personal dashboard at `/dashboard`
- View account information and status
- Quick access to products and settings

#### Product Browsing

- Browse all products at `/products`
- Click on any product card to view detailed information
- View product ratings, reviews, and specifications

#### Shopping Features

- Add products to cart using the shopping bag icon
- Manage cart items with quantity controls
- Add products to wishlist with the heart icon
- View notifications for updates

### Navigation

The application includes:

- **Header Navigation**: Home, Categories, About Us, Contact, FAQs
- **User Menu**: Profile, Settings, Logout (when signed in)
- **Mobile Menu**: Responsive navigation for mobile devices
- **Language Selection**: Choose from multiple languages

## 🏗️ Project Structure

```
tinytales/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages
│   ├── dashboard/         # User dashboard
│   ├── products/          # Product pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── products/         # Product-related components
│   └── ui/               # UI components
├── lib/                  # Utility libraries
│   ├── api/             # API client and auth functions
│   ├── store/           # State management (Zustand)
│   └── validations/     # Form validation schemas
├── public/               # Static assets
│   └── images/          # Product and UI images
└── types/               # TypeScript type definitions
```

## 🎨 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Custom auth system with JWT
- **Icons**: React Icons & Lucide React
- **UI Components**: Custom components with shadcn/ui
- **Image Optimization**: Next.js Image component
- **Form Handling**: React Hook Form with validation

## 🔧 Configuration

### Image Domains

The application is configured to load images from:

- Local images in `/public/images/`
- External domain: `tinytales.trendline.marketing`

### Authentication

- JWT-based authentication
- Email verification system
- Protected routes middleware
- Automatic token refresh

## 📱 Responsive Design

The application is fully responsive with:

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface
- Optimized mobile navigation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

**Current Deployment**: The application is currently deployed and live at [https://tinytales-beta.vercel.app/]

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🔄 Updates

Stay updated with the latest changes:

- Watch the repository for notifications
- Check the releases page for version updates
- Follow the changelog for detailed changes

---

Built with ❤️ by Diab using Next.js and modern web technologies.
