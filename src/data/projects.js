// Add a new project by pushing another object into this array.
// `category` must be one of: "fullstack" | "frontend" | "wordpress" | "cloud"
// Leave `github` / `demo` as null if a link isn't available yet.

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'cloud', label: 'Cloud / DevOps' },
]

export const projects = [
  {
    id: 'mehfil-notes',
    title: 'Mehfil Notes App',
    tagline: 'A full-stack MERN notes app, shipped in containers.',
    description:
      'A full-stack MERN application deployed using Docker Compose and AWS, built to practice moving an app from local development to a real running deployment.',
    category: 'cloud',
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Docker Compose', 'AWS', 'Nginx'],
    github: null,
    demo: null,
    detail: {
      problem:
        'Most student projects stop at "runs on my machine." I wanted a notes app that was actually packaged and deployed the way a real team would ship it.',
      solution:
        'Built the app as a MERN stack, then containerized the client, server and reverse proxy with Docker Compose so the whole stack starts with one command, and deployed it to an AWS instance behind Nginx.',
      features: [
        'Create, edit and organize notes with a React front end',
        'REST API on Express with MongoDB persistence',
        'Multi-container setup: client, server and Nginx defined in one Docker Compose file',
        'Nginx reverse proxy in front of the app for routing and static assets',
      ],
      architecture:
        'Client and server run as separate containers on the same Docker Compose network, with Nginx as the entry point routing traffic to each service on an AWS host.',
    },
  },
  {
    id: 'mern-ecommerce',
    title: 'MERN E-Commerce Marketplace',
    tagline: 'A production-style storefront with auth, payments and admin roles.',
    description:
      'A full-stack e-commerce marketplace with role-based access, Stripe payments and Cloudinary image uploads, built end-to-end as both a learning project and a client build.',
    category: 'fullstack',
    featured: true,
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'Stripe', 'Cloudinary', 'Tailwind CSS'],
    github: 'https://github.com/Tabiullahkhan/mern-ecom-proiject.git',
    demo: null,
    detail: {
      problem:
        'Wanted to go beyond CRUD demos and build a storefront with the pieces a real marketplace needs: auth, roles, payments and reviews.',
      solution:
        'Implemented JWT auth with httpOnly cookies and a silent refresh flow, role-based access for customers, sellers and admins, Stripe payments with webhook verification, and Cloudinary for product images.',
      features: [
        'Role-based access control for customer, seller and admin accounts',
        'Product catalog with filtering, search and pagination',
        'Cart and order management with stock deduction and price snapshotting',
        'Stripe payment integration with webhook verification',
        'Reviews restricted to verified purchasers',
      ],
      architecture:
        'React + Vite front end talking to an Express/MongoDB Atlas API, with Axios interceptors handling token refresh, deployed with the client on Vercel.',
    },
  },
  {
    id: 'mern-bookstore',
    title: 'MERN BookStore',
    tagline: 'A bookstore app tying frontend, backend, database and API together.',
    description:
      'A full-stack bookstore application demonstrating a complete MERN flow: React frontend, Express backend, MongoDB database and REST API integration.',
    category: 'fullstack',
    featured: true,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: null,
    demo: null,
    detail: {
      problem: 'Needed a focused project to practice wiring every layer of the MERN stack together cleanly.',
      solution:
        'Built a browsable book catalog backed by a REST API, with full CRUD operations connected to a MongoDB database.',
      features: [
        'Browse, add, update and remove books',
        'REST API built with Express',
        'MongoDB for persistent storage',
        'React front end consuming the API',
      ],
      architecture: 'A standard three-tier MERN setup: React client, Express API server, MongoDB database.',
    },
  },
  {
    id: 'todo-mern',
    title: 'To-Do List MERN',
    tagline: 'A task manager covering the full MERN request/response cycle.',
    description: 'A full-stack task management application built with the MERN stack.',
    category: 'fullstack',
    featured: false,
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: null,
    demo: null,
    detail: {
      problem: 'Wanted a small, complete project to lock in CRUD fundamentals across the whole stack.',
      solution: 'Built a task manager where tasks are created, updated, completed and deleted through a REST API.',
      features: ['Create, update, complete and delete tasks', 'Express REST API', 'MongoDB persistence'],
      architecture: 'React client communicating with an Express API backed by MongoDB.',
    },
  },
  {
    id: 'wordpress-projects',
    title: 'WordPress & WooCommerce Projects',
    tagline: 'Client sites and stores built on WordPress.',
    description:
      'A collection of WordPress builds and WooCommerce store setups, covering theme customization, plugin configuration and store setup for freelance clients.',
    category: 'wordpress',
    featured: true,
    tech: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
    github: null,
    demo: null,
    detail: {
      problem: 'Freelance clients often need a working, manageable website fast, not a custom-built stack.',
      solution:
        'Delivered WordPress sites and WooCommerce stores with customized themes, configured plugins and product/catalog setup.',
      features: ['Theme customization', 'WooCommerce store configuration', 'Plugin setup and management'],
      architecture: 'WordPress + MySQL, with WooCommerce handling storefront and order logic.',
    },
  },
]
