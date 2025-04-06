# SkillSync AI

SkillSync AI is a mock interview and resume analysis platform powered by Gemini AI, built using Next.js. It simulates real interview experiences by generating tailored mock interview questions based on your resume and desired job role. The platform also intelligently analyzes resumes to provide actionable feedback, helping users improve their profiles and boost interview readiness—all in one smart, AI-driven interface.

## Features

- 🤖 AI-Powered Resume Analysis using Gemini AI Vision for intelligent insights and suggestions
- 🗣️ Mock Interview Generator with role-specific questions powered by Gemini AI
- 🔐 Secure User Authentication with Clerk
- 💻 Modern & Responsive UI crafted with Tailwind CSS
- 🛢️ Scalable Database Integration using NeonDB
- 🌐 Seamless Deployment optimized for Vercel

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

## 🖼️ Screenshots

📁 All screenshots are stored in the `public/images` folder.

### 🏠 Landing Page
![Landing Page](images/landing page.png)

### 📤 Resume Upload Page
![Resume Upload](images/resume analysis.png)

### 🔐 Authentication Page
![Authentication](images/ Sign-in.png)
![Authentication](images/ Sign-up.png)

### MOCK INTERVIEW
![Mock interview](images/Mock interview.png)

### Dashboard
![Dashboard](images/ dashboard.png)
 

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
