import React from 'react';

function About() {
  return (
    <section className="about-me-container">
      
        <h2 id="about-me">About Me</h2>
        <div className="about-me-info">
          <div className="image-container">
            <img src={require(`../../assets/images/time-in tulum.jpg`).default} alt="Man looking up at ancient mayan ruin"/>
          </div>

          <p>I am a Front End Web Developer where I recently earned a Certificate in the Full Stack Web Development Program at the University of Toronto. I seek to implement my skills to create functional and intuitive user experience websites. With my background in customer service I understand the importance of having a great customer/user experience whenever they interact with my websites.</p>
            <br/>
          <p>You can always expect me to bring passion, a collaborative spirit, and an eagerness to learn and improve whenever possible. I am also effective at combining my skills in communication, creativity and teamwork to finish tasks.</p>
          <br/>
          <p>Health and Fitness is also one of my passions so when I'm not coding you could find me at a gym, soccer field or basketball court.</p>
          <br/>
          <p>I also love to travel. Before the travel restrictions were placed, I was in Mexico, Philippines, Cuba, U.S.A. Once the pandemic is done i hope to travel to Japan, El Salvador, Iceland.</p>
          <br/>
          <p>I am looking to add my skills to an already well driven and quality oriented team. Please feel free to contact me. </p>
        </div>
    </section>
  );
}

export default About;