import{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Form,Col,Button} from 'react-bootstrap';
import ResumeComponent from './components/resume/ResumeComponent';

function App() {
  const[values,setValues]=useState({

    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNo:"",
    Address:"",
 
      Institute:"",
      yearEducation:"",
      Degree:"",

      Company:"",
      yearCompany:"",
      Designation:"",
      
    Skills:""

  })
  return (
    <div className="App">
     <Navbar/>
      <Home/>
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
        <Form.Group as={Col} controlId="formGridEducation">
          <Form.Label>Add Education</Form.Label>
          <Form.Control value={values.Institute} onChange={e=>setValues({...values,Institute:e.target.value})} type="text" placeholder="Institute" />
          <Form.Control value={values.yearEducation} onChange={e=>setValues({...values,yearEducation:e.target.value})} type="text" className="mt-3" placeholder="year" />
          <Form.Control value={values.Degree} onChange={e=>setValues({...values,Degree:e.target.value})}type="text" className="mt-3" placeholder="Degree eg:btech" />
          <Button variant="secondary" type="submit" className="mt-2">
        Add more +
      </Button>
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Experience</Form.Label>
          <Form.Control value={values.Company} onChange={e=>setValues({...values,Company:e.target.value})} type="text" placeholder="Company" />
          <Form.Control value={values.yearCompany} onChange={e=>setValues({...values,yearCompany:e.target.value})} type="text" className="mt-3" placeholder="year" />
          <Form.Control value={values.Designation} onChange={e=>setValues({...values,Designation:e.target.value})} type="text" className="mt-3" placeholder="Designation" />
          <Button variant="secondary" type="submit" className="mt-2">
        Add more +
      </Button>
        </Form.Group>
      </Form.Row>
      <Form.Group controlId="formGridSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control value={values.Skills} onChange={e=>setValues({...values,Skills:e.target.value})} placeholder="react,js,etc" />
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </div>

     <ResumeComponent/>
    
    </div>
  );
}

export default App;
