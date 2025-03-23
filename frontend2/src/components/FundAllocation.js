import React, { useState } from 'react';
import axios from 'axios';

const FundAllocation = () => {
  const [sector, setSector] = useState('');
  const [allocatedAmount, setAllocatedAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/funds/allocate', { sector, allocatedAmount });
      alert('Fund allocated successfully');
    } catch (error) {
      alert('Failed to allocate funds');
    }
  };

  return (
    <div className="form-container">
      <h2>Allocate Funds</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Sector" value={sector} onChange={(e) => setSector(e.target.value)} required />
        <input type="number" placeholder="Amount" value={allocatedAmount} onChange={(e) => setAllocatedAmount(e.target.value)} required />
        <button type="submit">Allocate</button>
      </form>
    </div>
  );
};

export default FundAllocation;