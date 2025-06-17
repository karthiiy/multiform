import React from 'react';

const Confirmation = ({ values, prevStep }) => {
  const handleSubmit = () => {
    alert('Form submitted successfully!');
    console.log('Submitted Data:', values);
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default Confirmation;