/* eslint-disable jsx-a11y/heading-has-content */
import {NavLink} from 'react-router-dom'
const PatientLogin = () => {
    return (
      <div>
        <span className='chose'><h1 className='option'>Wybierz opcję</h1></span>
        <h1 style={{color: "black"}}></h1>
        <div style={{marginTop: 200}}>
        <div className="retangle" style={{marginLeft: 0, height: 100}}>
          <NavLink className='option' to="/Login">
            <span style={{marginLeft: 120}}>Zaloguj się</span>
          </NavLink>
        </div>
        <div className="retangle" style={{marginLeft: 280, height: 100}}>
          <NavLink className='option' to="/">
          <span style={{marginLeft: 100}}>Zarejestuj się</span>
          </NavLink></div>
        </div>
      </div>
    )
  }
export default PatientLogin;