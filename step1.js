import React, { useState } from 'react';

const Step1 = ({ nextStep, handleChange, values }) => {
  const [error, setError] = useState('');

  const continueStep = () => {
    if (!values.name || !values.email) {
      setError('Please fill out all fields');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <input type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={continueStep}>Next</button>
    </div>
  );
};

export default Step1;