import React, { useState } from 'react';

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [error, setError] = useState('');

  const continueStep = () => {
    if (!values.age) {
      setError('Please enter your age');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 2: Age Info</h2>
      <input type="number" name="age" placeholder="Age" value={values.age} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={prevStep}>Back</button>
      <button onClick={continueStep}>Next</button>
    </div>
  );
};

export default Step2;