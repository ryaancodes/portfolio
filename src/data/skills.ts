import type { SkillCategory } from '@/types/skill';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C', icon: 'devicon-c-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
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
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Express.js', icon: 'devicon-express-original colored' },
      { name: 'REST APIs' },
    ],
  },
  {
    id: 'database',
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'ai-data',
    title: 'AI & Data Science',
    skills: [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Data Analysis' },
      { name: 'Machine Learning Fundamentals' },
      { name: 'Jupyter Notebook', icon: 'devicon-jupyter-plain colored' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals & Tools',
    skills: [
      { name: 'Data Structures & Algorithms' },
      { name: 'OOP' },
      { name: 'DBMS' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original colored' },
      { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    ],
  },
];