import React from 'react';

function PunchCard({ totalPunches = 10, currentPunches = 0 }) {
  const punches = [];
  for (let i = 0; i < totalPunches; i++) {
    punches.push(
      <div
        key={i} 
        style={{
          width: '1.25rem',
          height: '1.25rem',
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
      gap: '0.5rem'
    }}>
      {punches}
    </div>
  );
}

export default PunchCard;
