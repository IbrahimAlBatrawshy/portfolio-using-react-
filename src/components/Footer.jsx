import React from 'react';
import { personalInfo } from '../data';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface/80 border-t border-white/5 py-12 relative overflow-hidden">
            {/* Background Effect */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 w-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <Link to="home" smooth={true} duration={500} className="text-2xl font-bold cursor-pointer text-gradient inline-block mb-2">
                        {personalInfo.name.split(' ')[0]}
                    </Link>
                    <p className="text-gray-500 text-sm">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex gap-4 mb-6 md:mb-0">
                    {personalInfo.socials.map((social) => (
                        <motion.a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <social.icon size={18} />
                        </motion.a>
                    ))}
                </div>

                <div className="text-gray-500 text-sm text-center md:text-right">
                    <p>&copy; {currentYear} {personalInfo.name}.</p>
                    <p className="mt-1">All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
