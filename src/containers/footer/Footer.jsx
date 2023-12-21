import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to set in to the future before others
                </h1>
            </div>
            <div className="gpt3__footer-button">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo"/>
                    <p>Kipucos,  All Rights Reserved </p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Over ons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contacts</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms and Conditions</p>
                    <p>Privacy Police</p>
                    <p>Contacts</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>Kipucos</p>
                    <p>244 938 164 573</p>
                    <p>kipucos@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>2024 Open AI. All Rights Reserved </p>
            </div>
        </div>
    )
}

export default Footer

