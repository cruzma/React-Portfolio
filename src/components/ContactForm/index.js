import { send } from 'emailjs-com';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact(){

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e){

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            
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

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
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
                    <p>Phone: <a href="tel:+6474570516">(647)457-0516</a></p>
                    <p>Email: <a href="mailto:mtaycruz@gmail.com">mtaycruz@gmail.com</a></p>
                    </div>
                    <div>
                    <a href="https://github.com/cruzma"><img src={require("../../assets/images/github.svg").default} alt="github logo"/></a>
                    <a href="https://www.linkedin.com/in/mateo-cruz-b76619133/"><img src={require("../../assets/images/linkedin-icon.svg").default} alt="linkedin logo"/></a>
                    <a href="mailto: mtaycruz@gmail.com"><img src={require("../../assets/images/message.svg").default} alt="Email logo"/></a>
                    </div>
                </address>
                </div>

                <div className="contact-form">
                <h3>Leave me a Message</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="contact-name">Your Name</label>
                    <input type="text" name="name" defaultValue={name} id="contact-name" placeholder="Your Name"  onChange={handleChange}/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} placeholder="your email"/>

                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" defaultValue={message} placeholder="message"  onChange={handleChange}></textarea>

                    <button type="submit">Submit</button>
                </form>
                </div>
            </div> 

        </section>
    );
}

export default Contact;