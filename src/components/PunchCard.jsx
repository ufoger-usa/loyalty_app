import React from 'react';

function PunchCard({ totalPunches = 10, currentPunches = 0 }) {
  const punches = [];
  for (let i = 0; i < totalPunches; i++) {
    punches.push(
      <div
        key={i} 
        style={{
          width: '1rem', // Adjusted size
          height: '1rem', // Adjusted size
          borderRadius: '50%',
          backgroundColor: i < currentPunches ? '#32D74B' : '#E5E5EA',
        }}
      ></div>
    );
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '0.375rem' // Adjusted gap
    }}>
      {punches}
    </div>
  );
}

export default PunchCard;
