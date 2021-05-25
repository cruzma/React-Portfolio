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
                <a href="https://ez-budget10.herokuapp.com/" class="grid-item e-z-budget">
                <div>
                    <h3>E-Z-Budget</h3>
                    <span>Budget Saving App</span>
                </div>
                </a>
                <a href="#" class="grid-item react-calc">
                <div>
                    <h3>Calculator</h3>
                    <span>React/Javascript/CSS</span>
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