import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, GraduationCap, MapPin } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'MATLAB', level: 70 },
    { name: 'SolidWorks', level: 65 }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering',
      school: 'Your University',
      year: '2021 - 2025',
      description: 'Majoring in Mechanical/Electrical/Computer Engineering'
    }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better - my background, skills, and what drives me in engineering
        </p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Who I Am</h3>
          <p>
            I'm a passionate engineering student with a strong foundation in both theoretical 
            knowledge and practical application. My journey in engineering began with a curiosity 
            about how things work and has evolved into a desire to create innovative solutions 
            that make a difference.
          </p>
          
          <p>
            Currently pursuing my engineering degree, I've developed expertise in various 
            programming languages, CAD software, and engineering principles. I enjoy working 
            on projects that challenge me to think critically and apply my knowledge to 
            real-world problems.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <GraduationCap size={20} />
              <span>Engineering Student</span>
            </div>
            <div className="detail-item">
              <MapPin size={20} />
              <span>Your City, State</span>
            </div>
            <div className="detail-item">
              <Code size={20} />
              <span>Full-Stack Development</span>
            </div>
            <div className="detail-item">
              <BookOpen size={20} />
              <span>Continuous Learning</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="skills-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Education</h3>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4>{edu.degree}</h4>
              <p className="school">{edu.school}</p>
              <p className="year">{edu.year}</p>
              <p className="description">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About; 