import React,{ useState } from 'react'

export default function Login() {
  // js
  const [username,setusername] = useState("");
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");

  const Login = async()=>{
    let result = await fetch("http://localhost:5000/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result = await result.json();
    console.log(result)
  }
  console.log(username);
  return (
    <div>
        <h1>
            Login here
        </h1>
      <input type="text"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
      />

      <button onClick={Login}>Login</button>
    </div>
  )
}