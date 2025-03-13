import React from "react";
import profilePhoto from "../assets/profile.jpg"; 

const Projects = () => {
    return (
        <section id="projects" className="projects">
            {/* Profile Section */}
            <div className="profile-section">
                <img src={profilePhoto} alt="Profile" className="profile-photo" />
                <h2>My Profile</h2>
                <p>Hello! I'm a passionate <strong>full-stack developer</strong> with expertise in <strong>React.js, Node.js, Express, and MongoDB</strong>. I love exploring different approaches to solve problems and building innovative solutions.</p>
            </div>

            <h2>My Projects</h2>

            <div className="project">
                <h3>Swagify - Custom T-Shirt Store</h3>
                <p>
                    Swagify is a <strong>full-stack e-commerce platform</strong> for custom-designed T-shirts. The platform allows users to customize and preview their T-shirts before purchase.
                </p>
                <ul>
                    <li>🔹 <strong>Technologies Used:</strong> React.js, Node.js, Express.js, MongoDB</li>
                    <li>🔹 User authentication (Google Sign-In integration)</li>
                    <li>🔹 Real-time T-shirt customization with <strong>Canvas API</strong></li>
                    <li>🔹 Secure payment gateway integration</li>
                </ul>
            </div>

            <div className="project">
                <h3>Google Sign-In & Email Management System</h3>
                <p>A web app for managing <strong>bulk email suspension and revocation</strong> using Google API.</p>
                <ul>
                    <li>🔹 <strong>Technologies:</strong> React.js, Node.js, Express.js, Google API, MongoDB</li>
                    <li>🔹 <strong>Features:</strong> CSV email upload, authentication, bulk actions</li>
                </ul>
            </div>

            <div className="project">
                <h3>MNIST Image Classifier</h3>
                <p>Built a machine learning model to classify handwritten digits using <strong>TensorFlow & Keras</strong>.</p>
                <ul>
                    <li>🔹 Trained using the <strong>MNIST dataset</strong></li>
                    <li>🔹 High accuracy in recognizing digits</li>
                    <li>🔹 Implemented <strong>CNN architecture</strong></li>
                </ul>
            </div>

            <div className="project">
                <h3>Image Processing Using Transform Techniques</h3>
                <p>Analyzed students' exam results using <strong>multivariate data analysis</strong>.</p>
                <ul>
                    <li>🔹 Identified key patterns in student performance</li>
                    <li>🔹 Visualized correlations between various factors</li>
                </ul>
            </div>
        </section>
    );
};

export default Projects;
