import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">About Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full"></div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden text-left">
                        {/* Decorative element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

                        <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light">
                            {personalInfo.about}
                        </p>

                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-white/10 pt-8 relative z-10">
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">2+</h4>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">UI/UX</h4>
                                <p className="text-sm text-gray-400">Design Focused</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                                <p className="text-sm text-gray-400">Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
