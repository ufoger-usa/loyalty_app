import React from 'react';

function PunchCard({ totalPunches = 10, currentPunches = 0, isRewardAvailable = false }) {
  const punches = [];
  for (let i = 0; i < totalPunches; i++) {
    punches.push(
      <span key={i} className={`punch-mark ${i < currentPunches ? 'punched' : 'not-punched'}`}>
        {/* Using simple characters for punches */}
      </span>
    );
  }

  return (
    <div className={`punch-card-container compact-punch-card ${isRewardAvailable ? 'reward-active' : ''}`}>
      <div className="punches-display">
        {punches}
      </div>
      <p className="punch-count-text">{currentPunches} / {totalPunches}</p>
      {isRewardAvailable && (
        <div className="reward-indicator">
          <p>🎉 Reward Ready! 🎉</p>
        </div>
      )}
    </div>
  );
}

export default PunchCard;
