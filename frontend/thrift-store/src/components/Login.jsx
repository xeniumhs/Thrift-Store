import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      localStorage.clear();
      navigate("/login");
    }
  });

  const handleLogin = async (e) => {
    console.log(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
    } else {
      alert("enter connect details");
    }
  };
  
  return (
    <form>
      <fieldset>
        <legend>Login</legend>
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
          dont have an account ? <a href="/register">register</a>
        </p>
        <button type="button" class="btn btn-primary" onClick={handleLogin}>
          Signup
        </button>
      </fieldset>
    </form>
  );
}
