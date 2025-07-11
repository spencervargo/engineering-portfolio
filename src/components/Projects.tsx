import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Smart Home Automation System',
      description: 'A comprehensive IoT-based home automation system using Arduino and Raspberry Pi. Features include automated lighting, temperature control, and security monitoring.',
      technologies: ['Arduino', 'Raspberry Pi', 'Python', 'IoT', 'C++'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Hardware'
    },
    {
      id: 2,
      title: 'Machine Learning Data Analysis',
      description: 'Developed a machine learning model for predictive analysis using Python and scikit-learn. Analyzed large datasets to identify patterns and make predictions.',
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Software'
    },
    {
      id: 3,
      title: '3D Printed Prosthetic Hand',
      description: 'Designed and 3D printed a functional prosthetic hand using CAD software. The project focused on accessibility and cost-effective solutions for amputees.',
      technologies: ['SolidWorks', '3D Printing', 'Biomechanics', 'CAD'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Hardware'
    },
    {
      id: 4,
      title: 'Web Application Dashboard',
      description: 'Built a responsive web dashboard for data visualization using React and Node.js. Features real-time data updates and interactive charts.',
      technologies: ['React', 'Node.js', 'JavaScript', 'Chart.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Software'
    },
    {
      id: 5,
      title: 'Renewable Energy Monitoring',
      description: 'Created a solar panel monitoring system that tracks energy production and efficiency. Includes data logging and performance analytics.',
      technologies: ['Python', 'Arduino', 'Data Analysis', 'IoT', 'Energy Systems'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Hardware'
    },
    {
      id: 6,
      title: 'Autonomous Robot Navigation',
      description: 'Developed an autonomous robot using computer vision and pathfinding algorithms. The robot can navigate complex environments independently.',
      technologies: ['Computer Vision', 'Python', 'OpenCV', 'Robotics', 'Pathfinding'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      category: 'Hardware'
    }
  ];

  const categories = ['All', 'Hardware', 'Software'];

  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A collection of my engineering projects showcasing technical skills and innovative solutions
        </p>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="project-link"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="project-link"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="project-category">{project.category}</div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="technology-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 