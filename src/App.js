import Landing from './components/Landing';
import Nav from './components/Nav';
import ContactForm from './components/ContactForm'
import About from './components/About';
import Work from './components/Work';
import React, { useState } from 'react';

function App() {
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  

  return (
    <div>
      <Nav 
        setWorkSelected = {setWorkSelected}
        workSelected = {workSelected}
        contactSelected = {contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>
      <main>
        {!contactSelected && !aboutSelected && !workSelected?(
          <>
            <Landing></Landing>
          </>
         ) : contactSelected ? (
            <ContactForm></ContactForm>
         ) : aboutSelected ? (
           <About></About>
         ) : workSelected ? (
           <Work></Work>
         ) : (
           <Landing></Landing>
         )}
        
      </main>
    </div>
  );
}

export default App;
