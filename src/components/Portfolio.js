import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  Code2, 
  BookOpen, 
  Laptop2, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Monitor, 
  Database, 
  Clock 
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
  const [expandedProjects, setExpandedProjects] = useState(new Set());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const projects = [
    {
      title: "JobsForMalta WebApp - in work",
      description: "A Fullstack application using React TSX, Bootstrap CSS, NodeJS & ExpressJs, PostgreseSQL, and other security related libraries ",
      tags: ["Fullstack", "React", "Javascript", "Security"],
      github: "https://github.com/ShadowOfHumanity/JobsForMalta",
      icon: <Monitor className="project-icon" />
    },
    {
      title: "Android POS System",
      description: "Point of Sale system designed for Android tablets. Includes inventory management, sales tracking, and receipt generation.",
      tags: ["Java", "Android", "SQLite", "UI/UX"],
      github: "https://github.com/ShadowOfHumanity/pos.androidTablet.v0.0.01",
      icon: <Database className="project-icon" />
    },
    {
      title: "Jarvis AI Assistant",
      description: "A Python-based AI assistant that can perform various tasks, such as opening tabs, searching the web, and chatting.",
      tags: ["Python", "AI", "Multi-AI", "Automation", "Libraries"],
      github: "https://github.com/ShadowOfHumanity/TryJarvisV1",
      icon: <Laptop2 className="project-icon" />
    },
    {
      title: "Restful API - Budget App",
      description: "A Spring Boot application that provides a RESTful API for a budget management app. Features user authentication and data persistence.",
      tags: ["Java", "SQLite", "Algorithms", "Spring Boot", "API", "Security"],
      github: "https://github.com/ShadowOfHumanity/Pi-Generator",
      icon: <Clock className="project-icon" />
    },
    {
      title: "Image Recognition App",
      description: "Java based application that uses AZURE Computer Vision API to recognize objects in images. Features real-time processing.",
      tags: ["Java", "AI", "Computer Vision", "API", "AZURE"],
      github: "https://github.com/ShadowOfHumanity/IMAGE_OCR_azure",
      icon: <Laptop2 className="project-icon" />
    },
    {
        title: "Roblox Game Development",
        description: "Currently working on freelance game development projects using Lua/Luau. Projects available upon request.",
        tags: ["Lua", "Luau", "Roblox", "Game Development"],
        icon: <Laptop2 className="project-icon" />
      }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(() => setIsLoading(false), 1000);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleProject = (index) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="site-container">
      <CustomCursor isHovering={isHovering} />
      
      <div 
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header className="site-header">
        <div className="header-content">
          <h1 className="header-logo">Darian</h1>
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          <nav className={`site-nav ${isMenuOpen ? 'show' : ''}`}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Darian Baker</h1>
          <p className="hero-subtitle">Fullstack Developer | Game Developer</p>
          <div className="hero-links">
            <a 
              href="https://github.com/ShadowOfHumanity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              <Github className="icon" />
              GitHub
            </a>
            <a 
              href="mailto:Darianbakerbray@gmail.com"
              className="social-link"
            >
              <Mail className="icon" />
              Contact
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a Fullstack developer with expertise in multiple programming languages and frameworks.
            I specialize in Javascript & Java development using Spring Boot & NodeJs and have experience in game development
            with Roblox using Lua/Luau. My passion lies in creating efficient, scalable solutions
            and engaging peoples experiences.
          </p>
          <div className="skills-grid">
            {['Fullstack Development', 'Game Development', 'Open Source', 'Growing And Learning'].map((skill, index) => (
              <div 
                key={index}
                className="skill-card"
              >
                {index === 0 && <Code2 className="skill-icon" />}
                {index === 1 && <Laptop2 className="skill-icon" />}
                {index === 2 && <BookOpen className="skill-icon" />}
                {index === 3 && <Clock className="skill-icon" />}
                <h3>{skill}</h3>
                <p>
                  {index === 0 && "Building scalable web applications with Spring Boot or NodeJs, SQL & React TSX"}
                  {index === 1 && "Creating immersive experiences on Roblox with Lua/Luau"}
                  {index === 2 && "Contributing to the developer community through various projects"}
                  {index === 3 && "Always looking for new ways to grow and learn. Currently Advancing in JS Frameworks"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SkillSection />

      <section id="projects" className="projects-section">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div 
                  className="project-header"
                  onClick={() => toggleProject(index)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="project-header-content">
                    {project.icon}
                    <h3>{project.title}</h3>
                  </div>
                  {expandedProjects.has(index) ? <ChevronUp /> : <ChevronDown />}
                </div>
                <div className={`project-content ${expandedProjects.has(index) ? 'show' : ''}`}>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="project-tag"
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
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
                      className="project-link"
                    >
                      <Github className="icon" />
                      View on GitHub
                      <ExternalLink className="icon" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>&copy; 2025 Darian Baker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;