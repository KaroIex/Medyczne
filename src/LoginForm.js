
import React, { useState } from "react";
const LoginForm = ({Login, error, render}) => {
    const [details, setDetails] = useState({name: "", email: "", password: "" })
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
        render({LOGO: "Pacjent"});
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="inner">
                {/* ERROR! */}
                <div className="group">
                    <label htmlFor="name" style={{marginLeft: 21}}>Imię</label>
                    <input 
                    type="text" 
                    name="text"
                    id="text" 
                    onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="group">
                    <label htmlFor="password">Hasło</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
            </div>
            <input style={{width: 220, height: 60}} type="submit" value="Zaloguj się" />
      </form>
    )
  }
export default LoginForm;