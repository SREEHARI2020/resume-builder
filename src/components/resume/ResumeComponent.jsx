import React from 'react'
import "./ResumeComponent.css"
const ResumeComponent = ({values}) => {
  console.log("value is ",values)
    return (
        <div className="Resume">
            <header >
                <div className="Resume-header">
                <h1 className="Resume-header-name" >
                   <span>{values.FirstName} </span>
                    <span>{values.LastName}</span>
                    
                 </h1> 

                 <h5 className="Resume-header-email-phone" >
                   <p>{values.email}</p>
                    <p>{values.PhoneNo}</p>
                    <p>{values.Address}</p>
                 </h5> 

                </div>
               <div className="testdiv"></div>
                 
              </header>
             
              <div className="resume-Body">

                  <div className="resume-Body-Experience">
                  <h3>Experience</h3>
                     <div className="resume-body-Experience-card">
                    
                      <h2>{values.Experience.Company}</h2>
                      <h5>{values.Experience.year}</h5>
                      <h4>{values.Experience.Designation}</h4>
                     </div>
                     <div className="resume-body-Experience-card">
                   
                      <h2>Company: Keltron</h2>
                      <h5>year:2020</h5>
                      <h4>Designation:ceo</h4>
                     </div>
                    

                  </div>
                  <div className="resume-Body-Skills">
                  <h3>Skills</h3>
                    <h5>python</h5>
                    <h5>css</h5>
                    <h5>javasCript</h5>

                  </div> 
                 </div>
             <div className="resume-Body-Education">
             <h3>Education</h3>
                <div className="resume-body-education-card">
               
                      <h2>Institution: Cusat</h2>
                      <h5>year:2020</h5>
                      <h4>Degree:B.tech</h4>

                </div>
                <div className="resume-body-education-card">
               
                      <h2>Institution: Cusat</h2>
                      <h5>year:2020</h5>
                      <h4>Degree:B.tech</h4>

                </div>
                 </div>



        </div>
    )
}

export default ResumeComponent
