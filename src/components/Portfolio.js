import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Code2, 
  BookOpen, 
  Laptop2, 
  ExternalLink,
  Menu,
  X,
  Monitor, 
  Database, 
  Clock,
  Download,
  ChevronRight
} from 'lucide-react';

const CustomCursor = ({ isHovering }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
        setDotPosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    return (
      <>
        <div 
          className={`custom-cursor ${isHovering ? 'hover' : ''}`}
          style={{ 
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className={`custom-cursor-dot ${isHovering ? 'hover' : ''}`}
          style={{ 
            transform: `translate(${dotPosition.x - 2}px, ${dotPosition.y - 2}px)`,
          }}
        />
      </>
    );
};

const SkillSection = () => (
  <section id="skills" className="skills-section">
    <div className="section-content">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {[
          { name: 'JavaScript', icon: <Code2 className="skill-icon" /> },
          { name: 'Java', icon: <Code2 className="skill-icon" /> },
          { name: 'Lua', icon: <Code2 className="skill-icon" /> },
          { name: 'Python', icon: <Code2 className="skill-icon" /> },
          { name: 'React', icon: <Code2 className="skill-icon" /> },
          { name: 'Bootstrap Css', icon: <Code2 className="skill-icon" /> },
          { name: 'Spring Boot', icon: <Monitor className="skill-icon" /> },
          { name: 'NodeJs', icon: <Monitor className="skill-icon" /> },
          { name: 'Network Programming', icon: <Monitor className="skill-icon" /> },
          { name: 'Roblox Studio', icon: <Laptop2 className="skill-icon" /> },
          { name: 'Android', icon: <Laptop2 className="skill-icon" /> },
          { name: 'Git', icon: <Github className="skill-icon" /> },
          { name: 'SQL', icon: <Database className="skill-icon" /> },
          { name: 'API Development', icon: <Clock className="skill-icon" /> },
         
        ].map((skill, index) => (
          <div 
            key={index} 
            className="skill-box"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-box-content">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Simulate loading for visual effect
    setTimeout(() => setIsLoading(false), 800);

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "JobsForMalta WebApp",
      description: "Fullstack application using React TSX, Bootstrap CSS, NodeJS & ExpressJs, PostgreSQL",
      tags: ["Fullstack", "React", "Javascript", "Security"],
      github: "https://github.com/ShadowOfHumanity/JobsForMalta",
      icon: <Monitor className="text-primary-500" />
    },
    {
      title: "Android POS System",
      description: "Point of Sale system for Android tablets with inventory management and sales tracking",
      tags: ["Java", "Android", "SQLite", "UI/UX"],
      github: "https://github.com/ShadowOfHumanity/pos.androidTablet.v0.0.01",
      icon: <Database className="text-primary-500" />
    },
    {
      title: "Jarvis AI Assistant",
      description: "Python-based AI assistant for various tasks like web searching and automation",
      tags: ["Python", "AI", "Automation", "Libraries"],
      github: "https://github.com/ShadowOfHumanity/TryJarvisV1",
      icon: <Laptop2 className="text-primary-500" />
    },
    {
      title: "Restful API - Budget App",
      description: "Spring Boot application with RESTful API for budget management",
      tags: ["Java", "Spring Boot", "API", "Security"],
      github: "https://github.com/ShadowOfHumanity/Pi-Generator",
      icon: <Clock className="text-primary-500" />
    },
    {
      title: "Image Recognition App",
      description: "Java application using AZURE Computer Vision API for object recognition",
      tags: ["Java", "AI", "Computer Vision", "API"],
      github: "https://github.com/ShadowOfHumanity/IMAGE_OCR_azure",
      icon: <Laptop2 className="text-primary-500" />
    },
    {
      title: "Roblox Game Development",
      description: "Freelance game development projects using Lua/Luau",
      tags: ["Lua", "Luau", "Roblox", "Game Development"],
      icon: <Laptop2 className="text-primary-500" />
    }
  ];

  const skills = [
    { name: 'JavaScript', category: 'frontend' },
    { name: 'Java', category: 'backend' },
    { name: 'Lua', category: 'game' },
    { name: 'Python', category: 'backend' },
    { name: 'React', category: 'frontend' },
    { name: 'Bootstrap CSS', category: 'frontend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'NodeJs', category: 'backend' },
    { name: 'Network Programming', category: 'backend' },
    { name: 'Roblox Studio', category: 'game' },
    { name: 'Android', category: 'mobile' },
    { name: 'Git', category: 'tools' },
    { name: 'SQL', category: 'database' },
    { name: 'API Development', category: 'backend' },
  ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary-600">Darian</h1>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                className={`font-medium text-sm uppercase tracking-wider transition-colors ${
                  activeSection === item 
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              {['home', 'about', 'skills', 'projects'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className={`font-medium text-sm uppercase tracking-wider transition-colors ${
                    activeSection === item 
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm <span className="text-primary-600 dark:text-primary-400">Darian Baker</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Fullstack Developer | Game Developer
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/ShadowOfHumanity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <Github size={18} />
                GitHub
              </a>
              <a 
                href="mailto:Darianbakerbray@gmail.com"
                className="btn-outline flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Custom download CV card component */}
            <div className="relative duration-300 hover:-rotate-0 -rotate-12 group border border-sky-900 border-4 overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
              <div className="text-gray-50">
                <span className="font-bold text-5xl">Jr</span>
                <p className="text-xs">Frontend Developer</p>
              </div>
              <button className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
                Download CV
                <svg className="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                  <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd"></path>
                </svg>
              </button>
              <svg className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="5"></path>
              </svg>
              <svg className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                <path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" strokeMiterlimit="10" strokeWidth="2"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a Fullstack developer with expertise in multiple programming languages and frameworks.
              I specialize in Javascript & Java development using Spring Boot & NodeJs and have experience in game development
              with Roblox using Lua/Luau. My passion lies in creating efficient, scalable solutions
              and engaging people's experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                title: 'Fullstack Development',
                description: 'Building scalable web applications with Spring Boot or NodeJs, SQL & React TSX',
                icon: <Code2 className="h-10 w-10 text-primary-500" />
              },
              {
                title: 'Game Development',
                description: 'Creating immersive experiences on Roblox with Lua/Luau',
                icon: <Laptop2 className="h-10 w-10 text-primary-500" />
              },
              {
                title: 'Open Source',
                description: 'Contributing to the developer community through various projects',
                icon: <BookOpen className="h-10 w-10 text-primary-500" />
              },
              {
                title: 'Growing And Learning',
                description: 'Always looking for new ways to grow and learn. Currently Advancing in JS Frameworks',
                icon: <Clock className="h-10 w-10 text-primary-500" />
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-md">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 my-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium mt-4"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-primary-400">Darian Baker</h3>
              <p className="text-gray-400">Fullstack & Game Developer</p>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ShadowOfHumanity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github />
              </a>
              <a 
                href="mailto:Darianbakerbray@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Darian Baker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;