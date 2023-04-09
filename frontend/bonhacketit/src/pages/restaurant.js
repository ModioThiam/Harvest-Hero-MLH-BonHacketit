import React, { useState } from 'react';
import SMSForm from './SMSForm';
import './restaurant.css';

function Restaurant() {
  const [name, setName] = useState('');
  const [email, setAddress] = useState('');
  const [age, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, age };
    fetch('http://localhost:5000/test', { method: 'GET' , headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }}).then((response) => response.text()).then((data) => console.log(data)).catch((error) => console.log(error));
    fetch('http://127.0.0.1:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(userData)
    })
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Address:
        <input type="email" value={email} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <label>
        Phone:
        <input type="number" value={age} onChange={(event) => setPhone(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
      <SMSForm/>
    </form>
  );
}

export default Restaurant;
