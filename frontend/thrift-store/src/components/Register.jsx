import React,{ useState } from 'react'

export default function Register() {
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const Register = async () =>{
    fetch("http://localhost:5000/register",{
        method:"post",
        body:JSON.stringify({username,email,password}),
        headers:{
            "Content-Type": "application/json",
        }
    });
  }

  return (
    <div>
        <h1>
            Register here
        </h1>
      <input type="text"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
      />
      <input type="text"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />
      <button onClick={Register}>Register</button>
    </div>
  )
}