import React,{useState} from 'react';
import { Form,Col,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './Home.css'

const Home = ({values,setValues}) => {
    const history=useHistory();
    const [fields, setFields] = useState([{ value: null }]);
    const [fieldExperience, setFieldExperience] = useState([{ value: null }]);

    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
      }
    function handleAddExperience() {
        const values = [...fieldExperience];
        values.push({ value: null });
        setFieldExperience(values);
      }
    //   function handleChange(i, event) {
    //     const values = [...fields];
    //     values[i].value = event.target.value;
    //     setFields(values);
    //   }
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

    <Col >
     {fieldExperience.map((field, idx) => {
         return(
         <Form.Group className="custom-padding" key={`${field}-${idx}`}as={Col} controlId="formGridPhone">
         <Form.Label>Experience</Form.Label>
         <Form.Control value={values.Experience.Company} onChange={e=>setValues({...values,Company:e.target.value})} type="text" placeholder="Company" />
         <Form.Control value={values.Experience.year} onChange={e=>setValues({...values,yearExperience:e.target.value})} type="text" className="mt-3" placeholder="year" />
         <Form.Control value={values.Experience.Designation} onChange={e=>setValues({...values,Designation:e.target.value})} type="text" className="mt-3" placeholder="Designation" />
      
       </Form.Group>)})}
       <Button variant="secondary"  className="mt-4 " onClick={() => handleAddExperience()}>
       Add more +
     </Button>
     </Col>

     <Col>
     {fields.map((field, idx) => {
         return(
       <Form.Group  key={`${field}-${idx}`} as={Col} controlId="formGridEducation">
         <Form.Label>Add Education</Form.Label>
         <Form.Control value={values.Education.Institute} onChange={e=>setValues({...values,Institute:e.target.value})} type="text" placeholder="Institute" />
         <Form.Control value={values.Education.year} onChange={e=>setValues({...values,yearEducation:e.target.value})} type="text" className="mt-3" placeholder="year" />
         <Form.Control value={values.Education.Degree} onChange={e=>setValues({...values,Degree:e.target.value})}type="text" className="mt-3" placeholder="Degree eg:btech" />
        
         </Form.Group>)})}
         <Button variant="secondary" className="mt-2 ml-3" onClick={() =>handleAdd()} >
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
