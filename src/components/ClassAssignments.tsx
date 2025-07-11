import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ExternalLink, Calendar, BookOpen } from 'lucide-react';
import './ClassAssignments.css';

const ClassAssignments: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const assignments = [
    {
      id: 1,
      title: 'Thermodynamics Lab - Heat Transfer Analysis',
      description: 'Demonstration of heat transfer principles using various materials and temperature sensors. Analysis of conduction, convection, and radiation effects.',
      course: 'Thermodynamics',
      semester: 'Fall 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop',
      duration: '15:30',
      tags: ['Heat Transfer', 'Thermodynamics', 'Lab Work']
    },
    {
      id: 2,
      title: 'Circuit Design - LED Control System',
      description: 'Design and implementation of a microcontroller-based LED control system. Features include PWM dimming, color mixing, and remote control capabilities.',
      course: 'Electrical Circuits',
      semester: 'Spring 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      duration: '12:45',
      tags: ['Circuit Design', 'Microcontrollers', 'LED Control']
    },
    {
      id: 3,
      title: 'Fluid Mechanics - Pipe Flow Analysis',
      description: 'Experimental analysis of fluid flow through different pipe configurations. Measurement of pressure drops, flow rates, and Reynolds number calculations.',
      course: 'Fluid Mechanics',
      semester: 'Fall 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop',
      duration: '18:20',
      tags: ['Fluid Dynamics', 'Pipe Flow', 'Experimental']
    },
    {
      id: 4,
      title: 'Robotics - Autonomous Navigation',
      description: 'Development of an autonomous robot using computer vision and pathfinding algorithms. The robot successfully navigates through obstacle courses.',
      course: 'Robotics Engineering',
      semester: 'Spring 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      duration: '22:15',
      tags: ['Robotics', 'Computer Vision', 'Autonomous Systems']
    },
    {
      id: 5,
      title: 'Materials Science - Stress Testing',
      description: 'Tensile and compression testing of various materials including metals, polymers, and composites. Analysis of stress-strain relationships and material properties.',
      course: 'Materials Science',
      semester: 'Fall 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=300&fit=crop',
      duration: '14:30',
      tags: ['Materials Testing', 'Stress Analysis', 'Lab Work']
    },
    {
      id: 6,
      title: 'Control Systems - PID Controller Design',
      description: 'Design and implementation of PID controllers for temperature and position control systems. Analysis of system response and stability.',
      course: 'Control Systems',
      semester: 'Spring 2024',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
      duration: '16:45',
      tags: ['Control Theory', 'PID Controllers', 'System Design']
    }
  ];

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="assignments" className="assignments">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Class Assignments</h2>
        <p className="section-subtitle">
          Videos showcasing my academic work and laboratory experiments from various engineering courses
        </p>
      </motion.div>

      <div className="assignments-grid">
        {assignments.map((assignment, index) => (
          <motion.div
            key={assignment.id}
            className="assignment-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="assignment-image">
              <img src={assignment.thumbnail} alt={assignment.title} />
              <div className="assignment-overlay">
                <motion.button
                  className="play-button"
                  onClick={() => openVideo(assignment.videoUrl)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={24} />
                </motion.button>
              </div>
              <div className="assignment-duration">{assignment.duration}</div>
            </div>
            
            <div className="assignment-content">
              <div className="assignment-header">
                <h3 className="assignment-title">{assignment.title}</h3>
                <div className="assignment-meta">
                  <div className="meta-item">
                    <BookOpen size={16} />
                    <span>{assignment.course}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{assignment.semester}</span>
                  </div>
                </div>
              </div>
              
              <p className="assignment-description">{assignment.description}</p>
              
              <div className="assignment-tags">
                {assignment.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeVideo}
          >
            <motion.div
              className="video-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeVideo}>
                <X size={24} />
              </button>
              <div className="video-container">
                <iframe
                  src={selectedVideo}
                  title="Assignment Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClassAssignments; 