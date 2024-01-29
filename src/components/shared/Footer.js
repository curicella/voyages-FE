// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
 // Import Link for routing

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About Us</h3>
                    <p>Voyages is your go-to platform for planning and organizing your travel adventures. Explore the world with us!</p>
                    <Link to="/about">Learn More</Link>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@voyages.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-section social">
                    <h3>Connect With Us</h3>
                    <ul className="social-icons">
                        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="https://rs.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
            <p className="footer-bottom-text">Copyright Voyages &copy; {new Date().getFullYear()}</p>
        </div>
    );
}

export default Footer;
