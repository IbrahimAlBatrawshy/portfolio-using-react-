import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="py-20 relative bg-surface/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">My Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
                        >
                            <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={itemVariants}
                                        className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 w-[80px] hover:bg-white/10 transition-colors"
                                    >
                                        <skill.icon className={`text-3xl mb-2 ${skill.color}`} />
                                        <span className="text-xs text-gray-300 font-medium text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
