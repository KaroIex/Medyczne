import React, { useState } from "react";
import { setStatus, getStatus } from '../global';
import LoginForm from '../LoginForm';
const Login = (props) => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("")

  const Logiin = details => {
    console.log(details)
    if (details.email === adminUser.email && details.password === adminUser.password)
    {
      console.log("o kurwa admin")
      setStatus("log")
      setUser({
        name: details.name,
        email: details.name,
      })
    }
  }

  const Logout = () => {
    console.log("Logout")
  }
    return (
      <dic className="loginForm">
        {(user.email != "") ? (
          <div>
            <h2><span>{"Witaj " + user.name}</span></h2>
            <button>Wyloguj się</button>
          </div>
        ) : (<LoginForm Login={Logiin} error={error} render={props.render}></LoginForm>)}
        </dic>
    )
  }
export default Login;