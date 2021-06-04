import React from 'react';

function Work(){
    return(
        <section className="work-container">
            <h2 id="work">Work</h2>
            <div className="grid-container">    
                <div class="grid-item run-buddy">
                <div className="project-name">
                    <h3>Run Buddy</h3>
                    <span>HTML/CSS</span>
                </div>
                <div className="grid-buttons">
                        <a href="#">github</a>
    
                        <a href="https://cruzma.github.io/run-buddy/">website</a>
                </div>

            </div>

            <div className="grid-item poke-parte">

                <div className="project-name"> 
                    <h3>Poke Parte</h3>
                    <span>Front End Design</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://damn-ma-6.github.io/Poke-Parte/">github</a>

                    <a href="#">website</a>
                </div>
            </div>

            <div className="grid-item budget-tracker">
                <div className="project-name">
                    <h3>Budget Tracker</h3>
                    <span>A progressive web application that gives users the ability to add expenses and deposits with or without a internet connection</span>
                </div>
                <div className="grid-buttons">
                    <a href="#">github</a>

                    <a href="https://thawing-mesa-66730.herokuapp.com/">website</a>
                </div>
            </div>

            <div className="grid-item weather-dash">
                <div className="project-name">
                    <h3>Weather Dashboard</h3>
                    <span>Using a a third-party API this weather dashboard will run in the browser and feature dynamically updated HTML and CSS</span>
                </div>
                <div className="grid-buttons">
                    <a href="#">github</a>

                    <a href="https://cruzma.github.io/weather-dashboard/">website</a>
                </div>
            </div>

            <div href="#" className="grid-item mind-decks">
                <div className="project-name">
                    <h3>Mind Decks</h3>
                    <span>Mern Stack</span>
                </div>
                <div className="grid-buttons">
                    <a href="#">github</a>

                    <a href="#">website</a>
                </div>
            </div>
        
                
            </div>
        </section>
    )
}

export default Work;