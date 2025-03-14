import React from "react";
import { motion } from "framer-motion"; // Animation library
import profilePhoto from "../assets/profile.jpg"; // Import profile picture
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import LinkedIn, GitHub & Email icons

const Hero = () => {
    return (
        <section className="hero">
            <motion.div 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="hero-content"
            >
                {/* Animated Profile Image */}
                <motion.img 
                    src={profilePhoto} 
                    alt="Profile" 
                    className="profile-photo"
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Animated Text */}
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    Hi, I'm <span className="highlight">Pranesh S</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Cybersecurity & AI Enthusiast | Blockchain Innovator | Problem Solver
                </motion.p>

                {/* Social Links with Animations */}
                <motion.div 
                    className="social-links"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <a href="https://www.linkedin.com/in/pranesh-s-ps34101136/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon linkedin" />
                    </a>
                    <a href="https://github.com/PRANESHLEARNER" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon github" />
                    </a>
                    <a href="mailto:pranesh.se22@bitsathy.ac.in" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="social-icon email" />
                    </a>
                </motion.div>

                {/* Floating Button Animation */}
                <motion.a
                    href="#projects"
                    className="hero-btn"
                    whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0, 255, 255, 0.8)" }}
                    whileTap={{ scale: 0.9 }}
                >
                    View My Work
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
