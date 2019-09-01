import React from 'react';
import  AboutMe from './AboutMe';
import resumeData from './resumeData';
import Header from './Header';
import Resume from './Resume';
// import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';


function App() {
  return (

    <div className="App">
      <Header resumeData={resumeData}></Header>
      <AboutMe resumeData={resumeData}></AboutMe>
      <Resume resumeData={resumeData}></Resume>
      {/* <Portfolio resumeData={resumeData}></Portfolio> */}
      <Contact resumeData={resumeData}></Contact>
      <Footer resumeData={resumeData}></Footer>
    </div>
  );
}

export default App;
