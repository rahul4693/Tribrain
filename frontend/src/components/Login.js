import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://<VM_PUBLIC_IP>:8080/api/login', formData);
      alert('Login successful!');
    } catch (error) {
      alert('Login failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /> <br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /> <br/>
      <button type="submit">Login</button>
    </form>
  );
}