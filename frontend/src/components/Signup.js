import React from 'react';
export default function Signup() {
    return (
        <form>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Name" /><br/>
            <input type="email" placeholder="Email" /><br/>
            <input type="password" placeholder="Password" /><br/>
            <button>Register</button>
        </form>
    );
}