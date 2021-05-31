import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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
        send(
            'service_g1vc2se',
            'template_2snve4o',
            formState,
            'user_Xs86XG8xaQWaABmm3wUXp'
        )
        .then((response) => {
            console.log('success', response.status, response.text);
        })
        .catch((err) => {
            console.log('Failed...', err);
        })

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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="contact-name">Your Name</label>
                    <input type="text" id="contact-name" placeholder="Your Name" defaultValue={name}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} placeholder="your email"/>
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" placeholder="message" defaultValue={message} onChange={handleChange}></textarea>

                    <button type="submit">Submit</button>
                </form>
                </div>
            </div> 

        </section>
    );
}

export default Contact;