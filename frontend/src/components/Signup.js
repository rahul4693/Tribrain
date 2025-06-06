import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://<VM_PUBLIC_IP>:8080/api/signup', formData);
      alert('Signup successful!');
    } catch (error) {
      alert('Signup failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} /> <br/>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /> <br/>
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /> <br/>
      <button type="submit">Register</button>
    </form>
  );
}