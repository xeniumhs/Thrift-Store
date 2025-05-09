import React,{ useState,useEffect } from 'react'
import {useNavigate} from "react-router-dom";

export default function Login() {
  // js
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const navigate = useNavigate();
// this ll avoid double login 
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user){
      navigate("/")
    }
  })

  const Login = async()=>{
    let result = await fetch("http://localhost:5000/api/users/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json();
    console.log(result);

    if (result.user && result.user.username) {
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } else {
      alert("Login failed");
    }

  }
  
  return (
    <div>
      <h1>Login here</h1>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />

      <button onClick={Login}>Login</button>
    </div>
  );
}