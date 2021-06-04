import React from 'react';

function Work(){
    return(
        <section class="work-container">
            <h2 id="work">Work</h2>
            <div class="grid-container">    
                <a href="https://cruzma.github.io/run-buddy/" class="grid-item run-buddy">
                <div>
                    <h3>Run Buddy</h3>
                    <span>HTML/CSS</span>
                </div>
                </a>
                <a href="https://damn-ma-6.github.io/Poke-Parte/" class="grid-item poke-parte">
                <div>
                    <h3>Poke Parte</h3>
                    <span>Front End Design</span>
                </div>
                </a>
                <a href="https://thawing-mesa-66730.herokuapp.com/" class="grid-item budget-tracker">
                <div>
                    <h3>Budget Tracker</h3>
                    <span>A progressive web application that gives users the ability to add expenses and and deposits with or without a connection</span>
                </div>
                </a>
                <a href="https://cruzma.github.io/weather-dashboard/" class="grid-item weather-dash">
                <div>
                    <h3>Weather Dashboard</h3>
                    <span>HTML/CSS/Javascript</span>
                </div>
                </a>
                <a href="#" class="grid-item mind-decks">
                <div>
                    <h3>Mind Decks</h3>
                    <span>Mern Stack</span>
                </div>
                </a>
        
                
            </div>
        </section>
    )
}

export default Work;