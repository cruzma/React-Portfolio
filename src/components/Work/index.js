import React from 'react';

function Work(){
    return(
        <section className="work-container">
            <h2 id="work">Work</h2>
            <div className="grid-container">    
                <div class="grid-item run-buddy">
                <div className="project-name">
                    <h3>Run Buddy</h3>
                    <span>Simple web design for a fitness center offering multiple services</span>
                </div>
                <div className="grid-buttons">
                        <a href="https://github.com/cruzma/run-buddy.git">github</a>
    
                        <a href="https://cruzma.github.io/run-buddy/">website</a>
                </div>

            </div>

            <div className="grid-item poke-parte">

                <div className="project-name"> 
                    <h3>Poke Parte</h3>
                    <span>Front End design using Pokemon API and Weather API to display pokemons</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/damn-ma-6/Poke-Parte.git">github</a>

                    <a href="https://damn-ma-6.github.io/Poke-Parte/">website</a>
                </div>
            </div>

            <div className="grid-item budget-tracker">
                <div className="project-name">
                    <h3>Love Lorena</h3>
                    <span>A website for a wedding planner that features there services and positive reviews</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/cruzma/misa-wedding-site">github</a>

                    <a href="https://cruzma.github.io/misa-wedding-site/">website</a>
                </div>
            </div>

            <div className="grid-item weather-dash">
                <div className="project-name">
                    <h3>Weather Dashboard</h3>
                    <span>Using a a third-party API this weather dashboard will run in the browser and feature dynamically updated HTML and CSS</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/cruzma/weather-dashboard.git">github</a>

                    <a href="https://cruzma.github.io/weather-dashboard/">website</a>
                </div>
            </div>

            <div href="#" className="grid-item token-train">
                <div className="project-name">
                    <h3>Token Train</h3>
                    <span>A news aggregator type app built with React.js that utilizes data from REST API's</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/chingu-voyages/v36-geckos-team-07">github</a>

                    <a href="https://tokentrain.netlify.app/">website</a>
                </div>
            </div>
        
                
            </div>
        </section>
    )
}

export default Work;