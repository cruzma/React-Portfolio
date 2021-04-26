import React from 'react';


function Resume(){
    return (
        
        <section className="hero">
            <div className="proficiencies">
                <p>Download my resume here: </p><a href="../../assets/MateoCruz3resume.docx" download>Resume</a>
                <br/>      
                <h3>Front-end Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQUERY</li>
                    <li>responsive design</li>
                    <li>react</li>
                    <li>Bootstrap</li>
                </ul>

                <h3>Back-end Proficiencies</h3>
                <ul>
                    <li>APis</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>Mysql, sequelize</li>
                    <li>Nosql</li>
                    <li>Progressive Web Applications</li>
                </ul>
            </div>
        </section>

    )
}


export default Resume;