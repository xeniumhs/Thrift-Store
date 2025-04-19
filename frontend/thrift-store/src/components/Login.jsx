import React,{ useState } from 'react'

export default function Login() {
  // js
  const [username,setusername] = useState("")
  console.log(username);
  return (
    <div>
        <h1>
            Login here
        </h1>
      <input type="text"
        value={username}
        onChange={(e)=>setusername(e.target.value)}
      />
    </div>
  )
}

