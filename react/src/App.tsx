import { useState } from 'react';
import { Input, AppCounter } from "@danielaglint/custom-web-components/react";
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <>
      <h1>Contact Form</h1>
      
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          help="We'll never share your email"
          validation={email.includes("@") ? "valid" : "invalid"}
          value={email}
          onChange={setEmail}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          help="Must be at least 8 characters"
          validation={password.length >= 8 ? "valid" : "invalid"}
          value={password}
          onChange={setPassword}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Visitors this month</h2>
      <AppCounter until={1250} />
    </>
  )
}

export default App
