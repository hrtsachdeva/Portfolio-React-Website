import React, { Component } from 'react';

export default class AboutMe extends Component {
    render() {
         const resumeData = this.props.resumeData;
      
        return (
            <section id="about">
            <div className="row">
   
               <div className="three columns">
   
                  <img className="profile-pic"  src="images/profilepic.jpg" alt="" />
   
               </div>
   
               <div className="nine columns main-col">
   
                  <h2>About Me</h2>
                  <p>
                  {
                    resumeData.aboutme
                  }
                  </p>
   
                  <div className="row">
   
                     <div className="columns contact-details">
   
                     {/* <h2>Contact Details</h2> */}
                     <p className="address">
                                  {/* <span>{resumeData.name}</span> */}
                                  <a href='../public/HarshitsResume.pdf' download>Click here..!</a> <span> to view my CV ..!!!!</span>
                                  
                        <br></br>
                                     <span>
                        {/* {resumeData.address} */}
                       </span>
                       <br></br>
                       {/* <span>+91 8267859289 </span> */}
                                 </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        );
    }

    
}