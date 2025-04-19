import React from 'react'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/function">Upload</a>
        </li>
        <li>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </li>
      </ul>
    </div>
  )
}
