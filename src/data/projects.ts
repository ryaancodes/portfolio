import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'turfitup',
    title: 'TurfItUp',
    tagline: 'Turf Booking & Management System',
    description:
      'A full booking flow for discovering turfs, selecting available slots, and confirming bookings — designed to make turf reservations simpler than the usual phone calls and group chats.',
    features: [
      'Turf discovery with format, timing, and availability details',
      'Slot-based booking flow with availability checks',
      'Booking summary and confirmation flow',
      'Structured booking submissions through Netlify Forms',
      'Responsive interface designed around mobile booking',
    ],
    techStack: [
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Netlify Forms' },
    ],
    architecture:
      'A static multi-page application covering turf selection, booking, payment, and confirmation. Shared styling keeps the interface consistent, while JavaScript manages slot-selection state and form interactions. Netlify Forms handles booking submissions without requiring a custom backend.',
    challenges: [
      'Designing a booking interface that remains easy to navigate as turfs and time slots increase',
      'Passing booking state across multiple pages without relying on a frontend framework',
      'Building a mobile-first flow that keeps the important booking information easy to scan',
    ],
    liveUrl: 'https://turfitup.netlify.app/',
    githubUrl: 'https://github.com/ryaancodes/turf-booking-system',
  },
  {
    id: 'feedback-collector',
    title: 'Feedback Collector',
    tagline: 'Feedback Collection & Admin Dashboard',
    description:
      'A full-stack feedback platform with a public submission flow and a protected admin dashboard for storing, browsing, and reviewing responses.',
    features: [
      'Public form for collecting structured feedback',
      'Admin authentication for protected dashboard access',
      'Dashboard for browsing and reviewing submissions',
      'MySQL database for persistent feedback records',
      'Separate public and authenticated application routes',
    ],
    techStack: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    ],
    architecture:
      'An Express backend separates public feedback routes from authenticated admin routes. MySQL provides persistent storage for feedback and admin records, while the application includes credential hashing and verification for the admin login flow. The frontend consists of dedicated form, login, and dashboard views.',
    challenges: [
      'Designing a relational schema for storing feedback in a structured format',
      'Separating public submission routes from protected admin functionality',
      'Implementing credential hashing and verification instead of storing passwords in plain text',
    ],
    liveUrl: 'https://feedbackcollectorsystem.netlify.app/',
    githubUrl: 'https://github.com/ryaancodes/feedback-system',
  },
];