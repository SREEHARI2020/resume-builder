import{useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

import ResumeComponent from './components/resume/ResumeComponent';
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom';



function App() {
  const [expvalues,setExpvalues]=useState();
  const [eduvalues,setEduvalues]=useState();
  const[values,setValues]=useState({

    FirstName:"",
    LastName:"",
    Email:"",
    PhoneNo:"",
    Address:"",
    Education:[
      {
        Institute:"",
        yearEducation:"",
        Degree:""}
  ],
      
    Experience:[{
            Company:"",
            yearExperience:"",
            Designation:""}],
      
      
    Skills:""

  })
  const handleExpEduchange=(exp,edu)=>{
    setExpvalues(exp);
    setEduvalues(edu);
  }
  return (
    <Router>
      <div className="App">
    <Navbar/>
     <Switch>

     <Route exact path='/'>
       <Home values={values} setValues={setValues} handleExpEduchange={handleExpEduchange}/> 
      
       </Route>
     
     <Route exact path='/resume'><ResumeComponent values={values} expvalues={expvalues} eduvalues={eduvalues}/></Route>
     
     </Switch>
     
    
   
   </div>
   </Router>
    
  );
}

export default App;
