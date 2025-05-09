import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const navigate = useNavigate();
  
// this ll avoid double register 

  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user){
      navigate("/")
    }
  })

  const Register = async () =>{
    fetch("http://localhost:5000/api/users/register",{
        method:"post",
        body:JSON.stringify({username,email,password}),
        headers:{
            "Content-Type": "application/json",
        }
    });
    alert("login sucessful")
    navigate("/login");
  }

  return (
    <div>
      <h1>Register here</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
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
      <button onClick={Register}>Register</button>
    </div>
  );
}