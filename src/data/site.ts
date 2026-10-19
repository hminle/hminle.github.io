export const site = {
  name: 'Hoang M. Le',
  title: 'Hoang M. Le',
  role: 'AI Engineer · PhD in Computer Science',
  description:
    'Hoang M. Le — AI engineer and computer vision researcher. PhD from York University working on color science, camera ISP, and computational photography.',
  email: 'lemin2009@gmail.com',
  cv: 'https://drive.google.com/file/d/1hNE2BGGB_tUJ16QCVypHhHxYYuntssBK/view?usp=sharing',
  links: {
    scholar: 'https://scholar.google.com/citations?user=v7CDUl0AAAAJ',
    github: 'https://github.com/hminle',
    linkedin: 'https://www.linkedin.com/in/hminle',
  },
};

export const interests = [
  'Computational photography',
  'Camera ISP & color science',
  'Vision-language models',
  'LLM agents',
];

export type Role = {
  org: string;
  title: string;
  period: string;
  place: string;
  note?: string;
};

export const experience: Role[] = [
  { org: 'Sunvair', title: 'AI Engineer', period: '2026 – now', place: 'Remote', note: 'Enterprise LLM-agent platform: MCP server, text-to-SQL over Oracle ERP, Microsoft 365 Copilot agents.' },
  { org: 'Birdwatch', title: 'AI Engineer', period: '2025 – 2026', place: 'Remote, USA', note: 'Agent platform and a multimodal property digital twin built from 30k+ inspection images.' },
  { org: 'OptimalityPro', title: 'AI Engineer', period: '2024 – 2025', place: 'Remote, USA' },
  { org: 'Borealis AI (RBC)', title: 'AI/ML Intern', period: '2023 – 2024', place: 'Toronto', note: 'Deep survival analysis on medical and financial data.' },
  { org: 'Samsung AI Center Toronto', title: 'AI/ML Intern', period: '2022 – 2023', place: 'Toronto', note: 'Deep-learning white balance for smartphone cameras; 8,500+ image dataset.' },
  { org: 'FPT Software (Airbus Skywise)', title: 'Software Engineer', period: '2018 – 2019', place: 'Vietnam' },
];

export const education: Role[] = [
  { org: 'York University', title: 'PhD, Computer Science', period: '2020 – 2024', place: 'Toronto, Canada', note: 'Advisor: Prof. Michael S. Brown' },
  { org: 'POSTECH', title: 'MSc, Computer Science & Engineering', period: '2016 – 2018', place: 'Pohang, South Korea' },
  { org: 'Da Nang University of Science and Technology', title: 'BSc, Electronics & Telecommunication', period: '2009 – 2014', place: 'Da Nang, Vietnam' },
];

export const patents = [
  {
    title: 'Recovering gamut color loss utilizing lightweight neural networks',
    authors: ['Hoang M. Le', 'Michael S. Brown', 'Brian Price', 'Scott Cohen'],
    status: 'US Patent 12,493,991',
    assignee: 'Adobe',
  },
  {
    title: 'Mapping RAW images between camera sensors',
    authors: ['Abdelrahman Abdelhamed', 'Michael S. Brown', 'Abhijith Punnappurath', 'Hoang M. Le', 'Luxi Zhao'],
    status: 'US Application',
    assignee: 'Samsung',
  },
];

export const service = ['CVPR 2025', 'ECCV 2024', 'WACV 2024', 'CIC 2021'];
