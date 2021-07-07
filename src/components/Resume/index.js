import React from 'react';

import './resume-styling.css';

function Resume(){
    return (
        
        <section className="hero">
            <div className="proficiencies">
                <p>Download my resume here: </p><a href={require("../../assets/MateoCruz-resume.docx").default} target="_blank" id="resume">Resume</a>
                <br/>      
                <h3>My Proficiencies</h3>
                <ul>
                    <li><img src={require("../../assets/images/html-5.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/css.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/javascript.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/react.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/bootstrap.png").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/api.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/Node.js_logo.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/Npm-logo.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/github.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/heroku.svg").default} alt=""></img></li>
                    <li><img src={require("../../assets/images/mongodb.svg").default} alt=""></img></li>
                </ul>
            </div>
        </section>

    )
}


export default Resume;