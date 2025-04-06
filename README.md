# SkillSync AI

An AI-powered resume analysis and job matching platform built with Next.js.

## Features

- Resume analysis using Gemini AI Vision
- Job matching and recommendations
- User authentication with Clerk
- Modern, responsive UI with Tailwind CSS
- Database integration with NeonDB

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Clerk account for authentication
- A Google Cloud account for Gemini AI
- A NeonDB account for database

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd skillsync-ai
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your actual credentials:
- Get Clerk keys from [Clerk Dashboard](https://dashboard.clerk.dev)
- Get Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- Set up your database URL from [NeonDB](https://neon.tech)

4. Run the development server:
```bash
npm run dev
```

### Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/import)
3. Import your repository
4. Add the following environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `DATABASE_URL`
   - `NEXT_PUBLIC_DRIZZLE_DB_URL`
   - `NEXT_PUBLIC_GEMINI_API_KEY`
5. Deploy!

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push database changes
- `npm run db:studio` - Open database studio

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Clerk](https://clerk.dev/) - Authentication
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Google Gemini AI](https://ai.google.dev/) - AI/ML
- [NeonDB](https://neon.tech) - Database
- [Vercel](https://vercel.com) - Deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
