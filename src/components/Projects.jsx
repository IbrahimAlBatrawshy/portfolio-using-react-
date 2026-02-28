import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Flutter', 'Front-End'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-10"></div>

                    <div className="flex justify-center flex-wrap gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card rounded-2xl overflow-hidden group flex flex-col"
                            >
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative flex items-center justify-center p-0 overflow-hidden">
                                    {project.video ? (
                                        <div className="w-full h-full relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover opacity-80 absolute inset-0 group-hover:opacity-0 transition-opacity duration-500"
                                            />
                                            <video
                                                src={project.video}
                                                className="w-full h-full object-cover opacity-0 absolute inset-0 group-hover:opacity-100 transition-opacity duration-500"
                                                muted
                                                loop
                                                playsInline
                                                onMouseEnter={(e) => e.target.play()}
                                                onMouseLeave={(e) => {
                                                    e.target.pause();
                                                    e.target.currentTime = 0;
                                                }}
                                            />
                                        </div>
                                    ) : project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                        />
                                    ) : (
                                        <h3 className="text-2xl font-bold text-white/50 text-center tracking-wider uppercase group-hover:scale-110 transition-transform duration-500 p-6">
                                            {project.title}
                                        </h3>
                                    )}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                        {project.githubUrl && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full text-white hover:text-primary transition-colors">
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-surface rounded-full text-white hover:text-secondary transition-colors">
                                                <FaExternalLinkAlt size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-md border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
