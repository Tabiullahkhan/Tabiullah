// `strong: true` marks current/strongest areas — rendered with visual emphasis.

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'HTML', strong: false },
      { name: 'CSS', strong: false },
      { name: 'JavaScript', strong: false },
      { name: 'React', strong: true },
      { name: 'Tailwind CSS', strong: false },
      { name: 'Vite', strong: false },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', strong: true },
      { name: 'Express.js', strong: false },
      { name: 'MongoDB', strong: true },
      { name: 'REST APIs', strong: false },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', strong: true },
      { name: 'EC2', strong: false },
      { name: 'Docker', strong: true },
      { name: 'Docker Compose', strong: false },
      { name: 'AWS ECR', strong: false },
      { name: 'Linux', strong: true },
      { name: 'Nginx', strong: false },
      { name: 'Git & GitHub', strong: true },
      { name: 'CI/CD', strong: false },
    ],
  },
  {
    id: 'other',
    label: 'Other',
    skills: [
      { name: 'WordPress', strong: false },
      { name: 'WooCommerce', strong: false },
      { name: 'Python', strong: false },
      { name: 'MySQL', strong: false },
    ],
  },
]

export const pipeline = [
  { label: 'Code', hint: 'Written locally' },
  { label: 'GitHub', hint: 'Version controlled' },
  { label: 'Docker', hint: 'Built into an image' },
  { label: 'ECR', hint: 'Pushed to a registry' },
  { label: 'AWS', hint: 'Pulled onto a host' },
  { label: 'Nginx', hint: 'Routed to the app' },
  { label: 'Live', hint: 'Serving traffic' },
]

export const timeline = [
  { title: 'Computer Science', note: 'Started a CS degree — foundations in programming and problem solving.' },
  { title: 'Web Development', note: 'Learned HTML, CSS and JavaScript, and started building real pages.' },
  { title: 'MERN Stack', note: 'Moved into full-stack development with React, Node.js, Express and MongoDB.' },
  { title: 'Cloud & AWS', note: 'Started learning AWS — EC2, storage and how applications actually run in the cloud.' },
  { title: 'Docker & DevOps', note: 'Containerized applications with Docker and Docker Compose, and set up Nginx as a reverse proxy.' },
  { title: 'Advanced Cloud / DevOps', note: 'Currently deepening CI/CD and container registry workflows — in progress.', current: true },
]

export const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '2+', label: 'Cloud Deployments' },
  { value: 'Daily', label: 'Learning / Building' },
]
