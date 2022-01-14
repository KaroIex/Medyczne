/* eslint-disable jsx-a11y/alt-text */
import {NavLink} from 'react-router-dom'
const Home = (props) => {
    return (
        <div>
        <span className='chose'><h1 className='option'>Wybierz rolę</h1></span>
        <div className='divBox'>
            <div>
                <NavLink className="eclipse" to="/PatientLogin">
                    <span>
                        <img className=''
                            src={require('./../image/patient.png')}
                            style={{width: 150, height: 300, marginLeft: 100}}/>
                    </span>
                </NavLink>
                    <span className='retangle'>
                    <h1 className='order'>Dla pacjenta</h1>
                </span>
            </div>
            <div>
                <NavLink className="eclipse" to="/DoctorLogin">
                    <span>
                         <img 
                            src={require('./../image/doctor.png')}  
                            style={{width: 250, height: 270, marginLeft: 50}}/>
                     </span>
                </NavLink>
                <span className='retangle'>
                    <h1 className='order'>Dla lekarza</h1>
                </span>
            </div>
        </div>
        </div>
    )
  }
export default Home;