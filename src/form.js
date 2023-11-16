import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', data.name);
    console.log('Form data:', data.email);
    console.log('Form data:', data.message);
    
    

    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/6dffb1a4-c81a-45d5-8b28-5208a1db225d",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      console.log(res);

      if (res.ok) {
        console.log('Form submitted successfully');
        navigate.replace('/');
      } else {
        console.error('Form submission failed:', res.statusText);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div>
      <h1>Form App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={data.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
