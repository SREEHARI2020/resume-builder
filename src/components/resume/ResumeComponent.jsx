import React from "react";
import "./ResumeComponent.css";
const ResumeComponent = ({ values,expvalues,eduvalues }) => {
  console.log("value is ", values);
  console.log("gvhjbjb",expvalues);
  console.log("values",eduvalues)
  return (
    <div className="Resume container">
      <header>
        <div className="Resume-header ">
          <h1 className="Resume-header-name">
            <span>{values.FirstName} </span>
            <span>{values.LastName}</span>
          </h1>

          <h5 className="Resume-header-email-phone">
            <p>{values.Email}</p>
            <p>{values.PhoneNo}</p>
            <p>{values.Address}</p>
          </h5>
        </div>
      </header>

      <div className="resume-Body ">
        <div className="resume-Body-Experience col-md-8">
          <h3>Experience</h3>
         {expvalues.map((exp)=>( 
             <div className="resume-body-Experience-card ">
            <h2>{exp.company}</h2>
            <h5>{exp.year}</h5>
            <h4>{exp.designation}</h4>
          </div>))}
         
         
        </div>
        <div className="resume-Body-Skills col-md-4">
          <h3>Skills</h3>
          <h5>python</h5>
          <h5>css</h5>
          <h5>javasCript</h5>
        </div>
      </div>
      <div className="resume-Body-Education col-md-8">
        <h3>Education</h3>
        {eduvalues.map((edu)=>(  
        <div className="resume-body-education-card">
          <h2>Institution: {edu.institute}</h2>
          <h5>year:{edu.yeareducation}</h5>
          <h4>Degree:{edu.degree}</h4>
        </div>))}
      
      
      </div>
    </div>
  );
};

export default ResumeComponent;