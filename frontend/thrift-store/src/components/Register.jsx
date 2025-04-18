import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function register() {
  const [name, setname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/");
    }
  })

  const handleRegister = async () => {
    let result = await fetch("http://localhost:5000/register", {
      method: "post", 
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try{
      result = await result.json();
      console.warn(result);
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    }
    catch(e){
      console.warn(e);
    }
    
  };

  return (
    <form>
      <fieldset>
        <legend>Login</legend>
        <div class="col-sm-10">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Username
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Username"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="col-sm-10">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div class="col-sm-10">
          <label for="exampleInputEmail1" class="form-label mt-4">
            Email address
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Password"
            autocomplete="off"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <p>
          already have an account ? <a href="/login">login</a>
        </p>
        <button type="button" class="btn btn-primary" onClick={handleRegister}>
          Signup
        </button>
      </fieldset>
    </form>
  );
}
