// App.js
import React, { useState } from 'react';
import MarsRoverPhotos from './MarsRoverPhotos';
import './App.css';

const App = () => {
  // State to store the user-input date
  const [date, setDate] = useState("");

  // Function to handle the submit button click
  const handleSubmit = () => {
    // You can perform any additional validation here before fetching data
    // For simplicity, let's assume the input is valid

    // Call a function to fetch Mars photos based on the entered date
    // For example, you can implement the fetching logic here or in the MarsRoverPhotos component
    // Fetching logic can also be moved to a separate function

    // For now, let's just log the entered date
    console.log(date);
  };

  return (
    <div className="App">
      <h1>Enter the Date to get the Mars Photos</h1>
      <input
        type='text'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="YYYY-MM-DD"
        className='input'
      />
      <div className="center">
        <MarsRoverPhotos earthDate={date} />
      </div>
    </div>
  );
}

export default App;
