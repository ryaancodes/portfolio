import type { SkillCategory } from '@/types/skill';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'C', icon: 'devicon-c-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express', icon: 'devicon-express-original colored' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    skills: [{ name: 'MySQL', icon: 'devicon-mysql-plain colored' }, { name: 'SQL' }],
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    skills: [
      { name: 'Machine Learning Basics' },
      { name: 'Data Analysis' },
      { name: 'Jupyter Notebook', icon: 'devicon-jupyter-plain colored' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Fundamentals',
    skills: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
      { name: 'DSA' },
      { name: 'DBMS' },
      { name: 'OOP' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
    ],
  },
];
