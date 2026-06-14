import type { AchievementItem, EducationItem } from '@/types/education';

export const EDUCATION: EducationItem[] = [
  {
    id: 'tsec',
    period: '2024 — 2028',
    title: 'B.Tech, Artificial Intelligence & Data Science',
    institution: 'Thadomal Shahani Engineering College, Mumbai University',
    detail: 'Currently in third year · CGPA: 7.50 / 10',
  },
  {
    id: 'hsc',
    period: '2022 — 2024',
    title: 'Higher Secondary Certificate (Class XII)',
    institution: 'St. Rocks College, Borivali West',
    detail: 'Maharashtra Board · 71%',
  },
  {
    id: 'ssc',
    period: 'Until 2022',
    title: 'Secondary School Certificate (Class X)',
    institution: 'Dr. S. Radhakrishnan International School, Borivali West',
    detail: 'Maharashtra Board · 78%',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { id: 'gpa', value: '7.50 / 10', label: 'CGPA' },
  { id: 'year', value: '3rd Year', label: 'AI & Data Science' },
  {
    id: 'projects',
    value: '2',
    label: 'Full-stack projects shipped & deployed on Netlify',
  },
  {
    id: 'college',
    value: 'TSEC',
    label: 'Thadomal Shahani Engineering College, Mumbai',
  },
];
