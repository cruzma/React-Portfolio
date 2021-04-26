import React from 'react';

function Nav(props) {

  const {
    setContactSelected,
    setAboutSelected,
    setWorkSelected
  } = props

  return (
    <header>
      <nav>
        <ul>
          <li><a data-tesid="about-me" href="#about-me" onClick={() => {      
            setContactSelected(false); 
            setAboutSelected(true);
            setWorkSelected(false);
          }}
          >About Me</a></li>
          <li><a href="#work" onClick={() => {
            setAboutSelected(false);
            setContactSelected(false);
            setWorkSelected(true);
          }}>Work</a></li>
          <li><a href="#contact-me" onClick={() => {
            setContactSelected(true);
            setAboutSelected(false);
            setWorkSelected(false);
            }}
            >Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;