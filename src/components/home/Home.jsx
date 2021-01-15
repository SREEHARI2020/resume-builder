import React,{useState} from 'react';
import { Form,Col,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './Home.css'
const Home = ({values,setValues,handleExpEduchange}) => {
    const history=useHistory();
    const [fields, setFields] = useState([{ value: null }]);
    const [fieldExperience, setFieldExperience] = useState([{ value: null }]);
      const [expvalues, setExpValues] = useState([]);
      const [eduvalues, setEduValues] = useState([]);
      function handleAddExperience() {
        const values = [...fieldExperience];
        values.push({ value: null });
        setFieldExperience(values);
      }
      function handleAddEducation() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
      }
    
      function handleChange(i, event, field) {
        const values = [...expvalues];
        if (!values[i]) {
          values[i] = {};
        }
        !(field in values[i]) && (values[i].field = "");
        values[i][field] = event.target.value;
        setExpValues(values);
        console.log("vv", values);
        // setFields(values);
        // console.log("fields", fields);
      }
      function handleEducationChange(i, event, field) {
        const values = [...eduvalues];
        if (!values[i]) {
          values[i] = {};
        }
        !(field in values[i]) && (values[i].field = "");
        values[i][field] = event.target.value;
        setEduValues(values);
        console.log("vv edu", values);
        // setFields(values);
        // console.log("fields", fields);
      }
      handleExpEduchange(expvalues,eduvalues);


    return (
        <div className="container">


<Form className="mt-5">
 <h1> Enter Your Details</h1>
 <Form.Row className="mt-4">
   

   <Form.Group as={Col} controlId="formGridFirstName">
         <Form.Label>FirstName</Form.Label>
         <Form.Control value={values.FirstName} onChange={e=>setValues({...values,FirstName:e.target.value})} type="text" placeholder="First Name" />
       </Form.Group>
   

       <Form.Group as={Col} controlId="formGridLaststName">
         <Form.Label>LastName</Form.Label>
         <Form.Control value={values.LastName} onChange={e=>setValues({...values,LastName:e.target.value})} type="text" placeholder="Last Name" />
       </Form.Group>
   

 </Form.Row>
     <Form.Row>
       <Form.Group as={Col} controlId="formGridEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control value={values.Email} onChange={e=>setValues({...values,Email:e.target.value})} type="email" placeholder="Enter email" />
       </Form.Group>
   
       <Form.Group as={Col} controlId="formGridPhone">
         <Form.Label>Phone No</Form.Label>
         <Form.Control value={values.PhoneNo} onChange={e=>setValues({...values,PhoneNo:e.target.value})} type="tel" placeholder="Phone no"  />
       </Form.Group>
     </Form.Row>
   
     <Form.Group controlId="formGridAddress1">
       <Form.Label>Address</Form.Label>
       <Form.Control value={values.Address} onChange={e=>setValues({...values,Address:e.target.value})} placeholder="1234 Main St" />
     </Form.Group>
   
   
     <Form.Row>
<Col>
             {fieldExperience.map((field, idx) => {
              return (
                <Form.Group
                  className="custom-padding"
                  key={`${field}-${idx}`}
                  as={Col}
                  controlId="formGridPhone"
                >
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) => handleChange(idx, e, "company")}
                    type="text"
                    placeholder="Company"
                  />
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) => handleChange(idx, e, "year")}
                    type="text"
                    className="mt-3"
                    placeholder="year"
                  />
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) => handleChange(idx, e, "designation")}
                    type="text"
                    className="mt-3"
                    placeholder="Designation"
                  />
                </Form.Group>
              );
            })}
            <Button
              variant="secondary"
              className="mt-4 "
              onClick={() => handleAddExperience()}
            >
              Add more +
            </Button>
          </Col>

          <Col>
             {fields.map((field, idx) => {
              return (
                <Form.Group
                  className="custom-padding"
                  key={`${field}-${idx}`}
                  as={Col}
                  controlId="formGridPhone"
                >
                  <Form.Label>Educatiom</Form.Label>
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) =>  handleEducationChange(idx, e, "institute")}
                    type="text"
                    placeholder="institute"
                  />
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) => handleEducationChange(idx, e, "yeareducation")}
                    type="text"
                    className="mt-3"
                    placeholder="year"
                  />
                  <Form.Control
                    // value={field.value || ""}
                    onChange={(e) =>  handleEducationChange(idx, e, "degree")}
                    type="text"
                    className="mt-3"
                    placeholder="Degree"
                  />
                </Form.Group>
              );
            })}
            <Button
              variant="secondary"
              className="mt-4 "
              onClick={() => handleAddEducation()}
            >
              Add more +
            </Button>
          </Col>


   
       
    
     </Form.Row>
     <Form.Group className="mt-2" controlId="formGridSkills">
       <Form.Label>Skills</Form.Label>
       <Form.Control value={values.Skills} onChange={e=>setValues({...values,Skills:e.target.value})} placeholder="react,js,etc" />
     </Form.Group>
   
     <Button variant="primary" type="submit" onClick={()=>history.push('/resume')}>
       Submit
     </Button>
   </Form>
  
     </div>
    )
}

export default Home







