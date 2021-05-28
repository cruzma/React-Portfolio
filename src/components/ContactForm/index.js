import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '', mailSent: false, error: null });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                  } else {
                    setErrorMessage('');
                  }
            }

        }
        if(!errorMessage){
            setFormState({...formState, [e.target.name]: e.target.value});
        }
        
        
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section className="contact">
            <h2 id="contact-me">Contact Me</h2>
            <div className="contact-container">
                <div>
                <h3>How to Reach Me</h3>
                <address>
                    <div>
                    <p>Phone: <a href="tel:+5555555555">555.555.5555</a></p>
                    <p>Email: <a href="mailto:mtaycruz@gmail.com">mtaycruz@gmail.com</a></p>
                    </div>
                    <div>
                    <a href="https://github.com/cruzma"><img src={require("../../assets/images/github.svg").default} alt="github logo"/></a>
                    <a href="https://twitter.com/"><img src={require("../../assets/images/twitter.svg").default} alt="twitter bird"/> </a>
                    <a href="https://www.spotify.com/"><img src={require("../../assets/images/spotify.svg").default} alt="spotify logo"/></a>
                    </div>
                </address>
                </div>

                <div className="contact-form">
                <h3>Leave me a Message</h3>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="contact-name">Your Name</label>
                    <input type="text" id="contact-name" placeholder="Your Name" defaultValue={name} onChange={handleChange} name="name"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} placeholder="your email"/>

                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" placeholder="Message" name="message" defaultValue={message} onChange={handleChange}></textarea>

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}

                    <button type="submit">Submit</button>
                </form>
                </div>
            </div> 

        </section>
    );
}

export default Contact;