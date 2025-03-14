import React from "react";
import profilePhoto from "../assets/profile.jpg"; 

const Projects = () => {
    return (
        <section id="projects" className="projects">
            {/* Profile Section */}
            <div className="profile-section">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
            </div>

            <h2>My Projects</h2>

            {/* Project 1: Decentralized E-Voting System */}
            <div className="project">
                <h3>Decentralized E-Voting System</h3>
                <p>
                    A secure and transparent blockchain-based voting system ensuring election integrity. Designed to prevent vote tampering and ensure anonymity.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Ethereum, Solidity, Web3.js, IPFS</li>
                    <li>Implements smart contracts for tamper-proof vote recording</li>
                    <li>Secure voter authentication using zero-knowledge proofs</li>
                    <li>Decentralized storage for election results</li>
                </ul>
            </div>

            {/* Project 2: Real-Time Sign Language Recognition */}
            <div className="project">
                <h3>Real-Time Sign Language Recognition</h3>
                <p>
                    A deep learning-powered system that translates sign language gestures into text in real time.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Python, TensorFlow, OpenCV, CNN</li>
                    <li>Built a Convolutional Neural Network (CNN) model for gesture recognition</li>
                    <li>Utilized OpenCV for real-time video processing</li>
                    <li>Achieved high accuracy in translating ASL signs to text</li>
                </ul>
            </div>

            {/* Project 3: AI-Powered Intrusion Detection System */}
            <div className="project">
                <h3>AI-Powered Intrusion Detection System</h3>
                <p>
                    A cybersecurity solution that detects anomalies in network traffic using AI-driven threat analysis.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Python, Scikit-learn, TensorFlow, Wireshark</li>
                    <li>Implemented machine learning models to classify network attacks</li>
                    <li>Real-time traffic monitoring using packet sniffing</li>
                    <li>Utilized random forest and deep learning models for accuracy improvement</li>
                </ul>
            </div>

            {/* Project 4: Penetration Testing Toolkit */}
            <div className="project">
                <h3>Penetration Testing Toolkit</h3>
                <p>
                    A customizable toolkit designed for automating security testing of web applications.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Python, Kali Linux, Metasploit, Burp Suite</li>
                    <li>Automates common pentesting tasks like SQL injection and XSS testing</li>
                    <li>Provides real-time vulnerability scanning and reporting</li>
                    <li>Includes custom exploit scripts for security audits</li>
                </ul>
            </div>

            {/* Project 5: Blockchain-Based Secure File Storage */}
            <div className="project">
                <h3>Blockchain-Based Secure File Storage</h3>
                <p>
                    A decentralized file storage solution leveraging blockchain and cryptography for enhanced security.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Ethereum, IPFS, Solidity, Web3.js</li>
                    <li>Files are stored in decentralized storage with immutable access records</li>
                    <li>Uses AES encryption for securing file contents</li>
                    <li>Provides smart contract-based access control</li>
                </ul>
            </div>

            {/* Project 6: Cyber Threat Intelligence Platform */}
            <div className="project">
                <h3>Cyber Threat Intelligence Platform</h3>
                <p>
                    A platform that aggregates and analyzes real-time cybersecurity threats from multiple sources.
                </p>
                <ul>
                    <li><strong>Technologies Used:</strong> Python, Elasticsearch, Kibana, Threat Intelligence APIs</li>
                    <li>Integrates OSINT feeds for real-time threat detection</li>
                    <li>Utilizes machine learning for classifying emerging threats</li>
                    <li>Provides interactive visualization dashboards</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
