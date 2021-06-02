import React from 'react';

import './resume-styling.css';

function Resume(){
    return (
        
        <section className="hero">
            <div className="proficiencies">
                <p>Download my resume here: </p><a href="../../assets/MateoCruz3resume.docx" download>Resume</a>
                <br/>      
                <h3>My Proficiencies</h3>
                <ul>
                    <li><img src={require("../../assets/images/html-5.svg").default}></img></li>
                    <li><img src={require("../../assets/images/css.svg").default}></img></li>
                    <li><img src={require("../../assets/images/javascript.svg").default}></img></li>
                    <li><img src={require("../../assets/images/react.svg").default}></img></li>
                    <li><img src={require("../../assets/images/bootstrap.png").default}></img></li>
                    <li><img src={require("../../assets/images/api.svg").default}></img></li>
                    <li><img src={require("../../assets/images/Node.js_logo.svg").default}></img></li>
                    <li><img src={require("../../assets/images/Npm-logo.svg").default}></img></li>
                    <li><img src={require("../../assets/images/github.svg").default}></img></li>
                    <li><img src={require("../../assets/images/heroku.svg").default}></img></li>
                    <li><img src={require("../../assets/images/mongodb.svg").default}></img></li>
                </ul>
            </div>
        </section>

    )
}


export default Resume;