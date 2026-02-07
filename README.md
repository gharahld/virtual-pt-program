# Virtual PT Program

A comprehensive virtual home exercise program platform designed for parents to manage their children's physical therapy exercises.

## 🌟 Features

- **Exercise Management**: Create and manage personalized exercise programs
- **Progress Tracking**: Log completed exercises, pain levels, and difficulty ratings
- **Multi-Child Support**: Manage programs for multiple children
- **Secure Authentication**: Industry-standard security with bcrypt password hashing
- **Analytics Dashboard**: Visual progress tracking and completion statistics
- **Responsive Design**: Beautiful UI that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with secure password hashing
- **Validation**: Zod schemas
- **UI Components**: Radix UI primitives
- **Deployment**: Vercel

## 🔐 Security Features

- ✅ Secure HTTP headers (HSTS, CSP, X-Frame-Options, etc.)
- ✅ Password hashing with bcrypt (12 rounds)
- ✅ CSRF protection
- ✅ Input validation with Zod
- ✅ SQL injection prevention via Prisma
- ✅ Environment variable management
- ✅ Secure session handling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd virtual-pt-program
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your database URL and secrets:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/virtual_pt_db"
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"
```

To generate a secure NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

4. **Set up the database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
virtual-pt-program/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── dashboard/         # Protected dashboard routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions
│   ├── auth.ts           # Authentication utilities
│   ├── prisma.ts         # Prisma client
│   ├── utils.ts          # General utilities
│   └── validations.ts    # Zod schemas
├── prisma/
│   └── schema.prisma     # Database schema
├── public/               # Static assets
└── next.config.js        # Next.js configuration
```

## 🗄️ Database Schema

### Core Models
- **User**: Parent accounts with authentication
- **Child**: Children being managed by parents
- **Exercise**: Library of physical therapy exercises
- **ExerciseProgram**: Assigned programs for children
- **ProgramExercise**: Individual exercises within programs
- **Progress**: Tracking logs for completed exercises

## 🎨 Design System

**Primary Color**: #5b3b88 (Deep Purple)
- Creates a calm, professional, healthcare-appropriate aesthetic
- Full color scale from 50-950 for flexibility
- Accessible contrast ratios for WCAG compliance

## 🚢 Deployment to Vercel

1. **Push your code to GitHub**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect Next.js

3. **Configure environment variables**
   - Add `DATABASE_URL`
   - Add `NEXTAUTH_SECRET`
   - Add `NEXTAUTH_URL` (your production URL)

4. **Deploy**
   - Vercel will automatically deploy on push to main

## 📝 License

Built by TechAction Studio for parents managing their children's physical therapy.

## 🤝 Contributing

This is a private project for TechAction Studio clients. For support, please contact us directly.

---

**Built with ❤️ by TechAction Studio**
