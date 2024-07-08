import React, { useState } from 'react';

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    feedback: ""
  });

  function handleChange(e) {
    const { name, value } = e.target; // Correctly destructure `name` and `value` from `e.target`
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value // Update the state with the new value for the corresponding field
    }));
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name} // Correctly bind the value to the corresponding state
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="roll"
        value={formData.roll} // Correctly bind the value to the corresponding state
        onChange={handleChange}
        placeholder="Roll Number"
      />
      <input
        type="text"
        name="feedback"
        value={formData.feedback} // Correctly bind the value to the corresponding state
        onChange={handleChange}
        placeholder="Your Feedback"
      />
      <button onClick={() => alert(JSON.stringify(formData))}>Submit</button> 
      {/* Replace the alert with your actual submit logic */}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{formData.name}</td>
            <td>{formData.roll}</td>
            <td>{formData.feedback}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
