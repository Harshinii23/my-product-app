import React from "react";
import './footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p>Internship Project</p>
                    </div>
                    <div className="para">
                        <p> This is an internship project</p>
                        </div>
                    <div className="contact">
            <p>+91 9876543210</p>
            </div>
            <div className="mail">
            <p> abc.123@gmail.com</p>
          </div>
        
                    <div className="footer-bottom">
        &copy; {year} MyCompany | All rights reserved.
                </div>

                
            </div>
            
        </div>
    );
}
export default Footer;
