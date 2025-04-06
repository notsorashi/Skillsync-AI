# SkillSync AI

SkillSync AI is a cutting-edge, AI-powered resume analysis and job-matching platform built using Next.js. It leverages the power of Gemini AI Vision to intelligently parse resumes and provide highly relevant job recommendations, ensuring a smarter and faster job hunt.

## Features

- 🤖 AI-Powered Resume Analysis using Gemini AI Vision
- 🎯 Smart Job Matching based on skills, experience, and preferences
- 🔐 Secure User Authentication with Clerk
- 💻 Modern, Responsive UI powered by Tailwind CSS
- 🛢️ Database Integration using NeonDB
- 🌐 Ready for Deployment on Vercel

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

## Screenshots
- Landing page: The landing page provides a sleek, modern introduction to SkillSync AI. It highlights key features like resume analysis, AI job matching, and secure authentication—all presented with a clean and responsive design.
  ![Landing Page](./images/Landingpage.png)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
