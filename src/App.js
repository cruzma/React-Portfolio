import Landing from './components/Landing';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm'
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import React, { useState } from 'react';

function App() {
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  
  return (
    <div>
      <Nav 
        setWorkSelected = {setWorkSelected}
        workSelected = {workSelected}
        contactSelected = {contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main className="content">
        {!contactSelected && !aboutSelected && !workSelected && !resumeSelected ?(
          <>
            <Landing></Landing>
          </>
         ) : contactSelected ? (
            <ContactForm></ContactForm>
         ) : aboutSelected ? (
           <About></About>
         ) : workSelected ? (
           <Work></Work>
         ) : resumeSelected ? (
            <Resume></Resume>
         ) : (
           <Landing></Landing>
         )}
        
      </main>
      <footer>
        <h2>Made with ❤️</h2>
        
        <p>&#169 2020 Mateo Cruz, Inc.</p>
      </footer>
    </div>
    
  );
}

export default App;
