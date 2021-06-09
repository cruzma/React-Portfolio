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
                    <h3>Budget Tracker</h3>
                    <span>A progressive web application that gives users the ability to add expenses and deposits with or without a internet connection</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/cruzma/budget-tracker.git">github</a>

                    <a href="https://thawing-mesa-66730.herokuapp.com/">website</a>
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

            <div href="#" className="grid-item shop-shop">
                <div className="project-name">
                    <h3>Shop Shop</h3>
                    <span>A simple e-commerce website using Redux library to manage React application</span>
                </div>
                <div className="grid-buttons">
                    <a href="https://github.com/cruzma/shop-shop.git">github</a>

                    <a href="https://serene-caverns-56086.herokuapp.com/">website</a>
                </div>
            </div>
        
                
            </div>
        </section>
    )
}

export default Work;