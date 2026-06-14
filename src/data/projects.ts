import type { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 'turfitup',
    title: 'TurfItUp',
    tagline: 'Turf Booking & Management System',
    description:
      'A web platform for browsing turf availability, picking a slot and confirming a booking in a few clicks — built to replace the usual back-and-forth of phone calls and group chats with a clean, structured flow.',
    features: [
      'Browse available turfs with details on format (5v5 / 7v7 / 11v11) and timings',
      'Slot-based booking flow with real-time availability checks',
      'Booking confirmation page with summary of selected slot',
      'Form submissions handled through Netlify Forms for easy tracking',
      'Responsive layout designed for quick booking on mobile',
    ],
    techStack: [
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Netlify Forms' },
    ],
    architecture:
      'A static multi-page site (index, turf selection, payment and success pages) with shared styling and a single script.js handling slot selection state and form interactions. Bookings are captured via Netlify Forms, removing the need for a custom backend while still giving structured submission data.',
    challenges: [
      'Designing a slot-selection UI that stays clear even as the number of turfs and time slots grows',
      'Structuring multi-page navigation (selection → payment → success) so state carries through cleanly without a framework',
      'Keeping the booking flow usable on small screens, since most users book from their phones',
    ],
    liveUrl: 'https://turfitup.netlify.app/',
  },
  {
    id: 'feedback-collector',
    title: 'Feedback Collector',
    tagline: 'Feedback Collection & Dashboard',
    description:
      'A platform for gathering, organising and analysing user feedback in one place — with a public submission form on the front end and a login-protected admin dashboard backed by a database for reviewing responses.',
    features: [
      'Public-facing feedback form for collecting structured responses',
      'Admin login flow protecting access to submitted feedback',
      'Dashboard view for browsing and reviewing collected feedback',
      'Relational data model for storing and querying feedback records',
      'Separation of public routes and authenticated admin routes',
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
      'An Express server exposes separate route modules for the public feedback form and the admin dashboard. A MySQL database (initialised via a SQL schema file) stores feedback entries and admin credentials, with a small hashing utility used to secure admin login. Static front-end pages are served for the form, login and dashboard views.',
    challenges: [
      'Designing a database schema that keeps feedback entries structured enough to analyse later',
      'Separating public and admin routes so the dashboard stays behind a login while the feedback form remains open',
      'Hashing and verifying admin credentials safely instead of storing plain text passwords',
    ],
    liveUrl: 'https://feedbackcollectorsystem.netlify.app/',
  },
];
