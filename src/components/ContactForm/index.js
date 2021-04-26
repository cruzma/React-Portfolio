import React from 'react';

function Contact(){
    return(
        <section class="contact">
            <h2 id="contact-me">Contact Me</h2>
            <div class="contact-container">
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

                <div class="contact-form">
                <h3>Leave me a Message</h3>
                <form>
                    <label for="contact-name">Your Name</label>
                    <input type="text" id="contact-name" placeholder="Your Name"/>

                    <label for="contact-message">Message</label>
                    <textarea id="contact-message" placeholder="Message"></textarea>

                    <button type="submit">Submit</button>
                </form>
                </div>
            </div> 

        </section>
    );
}

export default Contact;