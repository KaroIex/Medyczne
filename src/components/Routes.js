import {Route, Routes} from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Contact from './../pages/Contact';
import PatientLogin from './../pages/PatientLogin';
import DoctorLogin from './../pages/DoctorLogin';
import Login from './../pages/Login';

function Switch(props) {
    return (
    <section>
        <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/patientLogin" element={<PatientLogin/>}/> 
        <Route path="/DoctorLogin" element={<DoctorLogin/>}/>
        <Route path="/Login" element={<Login render={props.render}></Login>}/>  
        </Routes>
    </section> );
}

export default Switch;