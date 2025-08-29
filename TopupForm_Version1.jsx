import React, { useState } from 'react';

function TopupForm() {
  const [playerId, setPlayerId] = useState('');
  const [diamonds, setDiamonds] = useState(100);
  const [payment, setPayment] = useState('payt');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to backend
    alert(`Processing top-up for ${playerId} with ${diamonds} diamonds via ${payment}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Free Fire Player ID:
        <input value={playerId} onChange={e => setPlayerId(e.target.value)} required />
      </label>
      <label>
        Diamonds:
        <select value={diamonds} onChange={e => setDiamonds(e.target.value)}>
          <option value={100}>100</option>
          <option value={310}>310</option>
          <option value={520}>520</option>
        </select>
      </label>
      <label>
        Payment Method:
        <select value={payment} onChange={e => setPayment(e.target.value)}>
          <option value="paytm">Paytm</option>
          <option value="upi">UPI</option>
          <option value="card">Credit/Debit Card</option>
        </select>
      </label>
      <button type="submit">Top Up Now</button>
    </form>
  );
}

export default TopupForm;