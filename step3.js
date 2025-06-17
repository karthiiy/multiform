import React, { useState } from 'react';

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const [error, setError] = useState('');

  const continueStep = () => {
    if (!values.address || !values.city) {
      setError('Please enter your address and city');
    } else {
      setError('');
      nextStep();
    }
  };

  return (
    <div>
      <h2>Step 3: Address</h2>
      <input type="text" name="address" placeholder="Address" value={values.address} onChange={handleChange} />
      <input type="text" name="city" placeholder="City" value={values.city} onChange={handleChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={prevStep}>Back</button>
      <button onClick={continueStep}>Submit</button>
    </div>
  );
};

export default Step3;