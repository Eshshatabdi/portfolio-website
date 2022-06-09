import React from 'react';
import resume from '../../../images/Shatabdi.pdf'
import './Contact.css'

const Contact = () => {
    return (
        // <div>
        <div style={{ backgroundColor: '#071A52', color: 'white' }}>
            <div className="text-center border-bottom page">
                <h1 className="pt-5">Let's Work Together...</h1>
                <div className="mt-5">
                    <a className="download" href={resume} download="resume">Download My Resume</a>
                </div>
                <h6 className="mt-5">OR</h6>
                <p style={{ marginTop: '10px' }}>Feel Free to Contact</p>
                <p>Email:shatabdi@gmail.com</p>
                <p>contact:+19293285859</p>


            </div>

        </div>
    );
};

export default Contact;