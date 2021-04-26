import React from 'react';

function Nav(props) {

  const {
    setContactSelected,
    setAboutSelected,
    setWorkSelected,
    setResumeSelected
  } = props

  return (
    <header>
      <nav>
        <ul>
          <li><a data-tesid="about-me" href="#" onClick={() => {      
            setContactSelected(false); 
            setAboutSelected(true);
            setWorkSelected(false);
            setResumeSelected(false);
          }}
          >About Me</a></li>
          <li><a href="#" onClick={() => {
            setAboutSelected(false);
            setContactSelected(false);
            setWorkSelected(true);
            setResumeSelected(false);
          }}>Work</a></li>
          <li><a href="#" onClick={() => {
            setContactSelected(true);
            setAboutSelected(false);
            setWorkSelected(false);
            setResumeSelected(false);
            }}
            >Contact Me</a></li>
          <li><a href="#" onClick={() => {
            setResumeSelected(true);
            setContactSelected(false);
            setAboutSelected(false);
            setWorkSelected(false);
          }}>Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;