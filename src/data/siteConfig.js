
export const siteConfig = {
  name: 'V Preethi',
  shortName: 'Preethi',

  headline: 'Building thoughtful digital experiences with code and AI.',

  roles: [
    'AI Developer',
    'Python Full Stack Developer',
    'Computer Science Student'
  ],

  summary:
    'I’m a Computer Science and Engineering student interested in Artificial Intelligence, machine learning and full-stack web development. I enjoy turning ideas into useful applications and learning by building.',

  email: 'vpreethi2611@gmail.com',
  phone: '+91-9898099963',
  location: 'Tirupati, Andhra Pradesh, India',

  linkedin: 'https://www.linkedin.com/in/preethi-v-4238b22b7',
  github: 'https://github.com/preethi-123260',

  // GitHub Pages compatible paths
  resume: `${import.meta.env.BASE_URL}assets/preethi-resume.pdf`,
  photo: `${import.meta.env.BASE_URL}assets/preethi-profile.png`,

  education: {
    degree: 'B.Tech – Computer Science and Engineering',
    school: 'Sri Venkateswara College of Engineering, Tirupati',
    years: '2023 – 2027',
    cgpa: '8.84/10',
    intermediate: '97%',
    ssc: '98.5%'
  },

  skills: [
    {
      title: 'Programming',
      items: ['Python', 'Java', 'SQL']
    },
    {
      title: 'Web technologies',
      items: ['HTML', 'CSS', 'JavaScript', 'React.js']
    },
    {
      title: 'Frameworks',
      items: ['Django', 'Flask']
    },
    {
      title: 'Database & tools',
      items: ['MySQL', 'DBMS', 'Git', 'GitHub', 'VS Code']
    },
    {
      title: 'Core concepts',
      items: ['OOP', 'Data Structures', 'Problem Solving']
    },
    {
      title: 'Other',
      items: ['MS Excel (Basic)']
    }
  ],

  internships: [
    {
      role: 'AI-ML Intern',
      company: 'SmartBridge',
      dates: 'May 2026 – July 2026',
      points: [
        'Gained practical exposure to Artificial Intelligence and Machine Learning concepts.',
        'Worked with Python-based workflows and machine learning applications.',
        'Developed analytical thinking and technical problem-solving skills.'
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'APSSDC',
      dates: 'May 2026 – June 2026',
      points: [
        'Gained practical knowledge of machine learning techniques and their applications.',
        'Worked on understanding data analysis and machine learning implementation.',
        'Strengthened programming and analytical skills.'
      ]
    }
  ],

  certifications: [
    {
      name: 'Web Development with AI',
      issuer: 'Internshala',
      date: 'October 2025'
    },
    {
      name: 'Responsive Web Design Developer Certification',
      issuer: 'freeCodeCamp',
      date: 'August 2026'
    }
  ],

  projects: [
    {
      slug: 'ai-chatbot',
      title: 'AI Chatbot',
      category: 'AI-ML',
      description:
        'A general-purpose AI chatbot designed to provide conversational assistance through an interactive chat experience.',
      stack: ['Python', 'Flask', 'OpenRouter API'],
      repo: 'https://github.com/preethi-123260/aichatbot',
      number: '01',
      accent: 'violet',
      details:
        'A general AI assistant project. Explore the repository for implementation details and setup instructions.'
    },
    {
      slug: 'ecommerce-store',
      title: 'E-Commerce Website',
      category: 'Full Stack',
      description:
        'A Django-based online store with product listings, shopping cart, checkout and order management, backed by MySQL.',
      stack: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/preethi-123260/CodeAlpha_EcommerceStore',
      number: '02',
      accent: 'pink',
      details:
        'Built an e-commerce application with product listings, shopping cart, checkout and order management. MySQL stores and manages application data.'
    },
    {
      slug: 'project-management-tool',
      title: 'Project Management Tool',
      category: 'Full Stack',
      description:
        'A web application to organize tasks, manage priorities and track project progress with database integration.',
      stack: ['Python', 'Django', 'Database', 'HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/preethi-123260/CodeAlpha_ProjectManagementTool',
      number: '03',
      accent: 'blue',
      details:
        'A project management application focused on organizing tasks, managing priorities and tracking project progress.'
    },
    {
      slug: 'social-media-platform',
      title: 'Social Media Platform',
      category: 'Full Stack',
      description:
        'A full-stack social application with user profiles, posts, comments, likes and follows.',
      stack: ['Python', 'Django', 'Database', 'HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/preethi-123260/CodeAlpha_SocialMediaPlatform',
      number: '04',
      accent: 'orange',
      details:
        'A social networking application with user profiles, posts, comments, likes and follows, combining frontend and backend functionality.'
    }
  ]
};
