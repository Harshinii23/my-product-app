import React from "react";
import './footer.css';
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <h4>Internship Project</h4>

            <p> This is an internship project</p>
            <p>Phone:+91 9876543210</p>
            <p> abc.123@gmail.com</p>
            <div className="footer-bottom">
                &copy; {year} MyCompany | All rights reserved.
            </div>
        </div>

    );
}
export default Footer;
