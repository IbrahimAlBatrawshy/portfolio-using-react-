import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:ibrahimalbatrawshy@gmail.com?subject=Portfolio Contact: ${formData.name}&body=From: ${formData.name} (${formData.email})%0D%0A%0D%0A${formData.message}`;
        window.location.href = mailtoLink;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitMessage("Redirecting to your email client...");
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitMessage(''), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-gradient">Get In Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to work together? Feel free to reach out via the form below or through my social profiles.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="lg:w-1/3 flex flex-col gap-6">
                        {personalInfo.socials.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card p-6 rounded-2xl flex items-center gap-6 hover:bg-white/5 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                                    <social.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">{social.label}</h4>
                                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Connect with me</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:w-2/3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            {submitMessage && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 text-center text-green-400 font-medium"
                                >
                                    {submitMessage}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
