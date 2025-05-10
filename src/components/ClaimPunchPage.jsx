// filepath: g:\\UFOGER.com\\Loyalty Programs\\src\\components\\ClaimPunchPage.jsx

import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, serverTimestamp, runTransaction } from 'firebase/firestore';

const ClaimPunchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Processing your punch...');
  const [error, setError] = useState('');
  const processingAttemptedRef = useRef(false); // Use a ref

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setError('No token provided.');
      setMessage('');
      processingAttemptedRef.current = false; // Reset if token disappears or is invalid initially
      return;
    }

    // If processing has already been attempted for this token on this page instance
    if (processingAttemptedRef.current) {
      return;
    }
    // Mark that we are now attempting to process this token.
    processingAttemptedRef.current = true;

    const processPunchClaim = async () => {
      try {
        if (!token.startsWith("PUNCH_TOKEN_")) {
          setError("Invalid token format.");
          setMessage("");
          return;
        }

        const parts = token.split('_');
        if (parts.length < 4) {
            setError("Invalid token structure.");
            setMessage("");
            return;
        }
        const customerId = parts[2];
        const customerName = parts.length > 4 ? parts[3] : "Customer"; // Assuming name might be part of token, or default

        if (!customerId) {
            setError("Could not identify customer from token.");
            setMessage("");
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 1000));

        const customerRef = doc(db, "customers", customerId);

        let finalPunches = 0;
        const totalPunchesForReward = 10;

        await runTransaction(db, async (transaction) => {
          const customerDoc = await transaction.get(customerRef);
          if (!customerDoc.exists()) {
            throw new Error("Customer not found.");
          }

          const customerData = customerDoc.data();
          const currentPunches = customerData.punches || 0;

          if (currentPunches >= totalPunchesForReward) {
            finalPunches = currentPunches;
            setTimeout(() => navigate('/'), 7000);
            return; 
          }

          const newPunches = currentPunches + 1;
          finalPunches = newPunches;

          transaction.update(customerRef, {
            punches: newPunches,
            updatedAt: serverTimestamp(),
            lastPunchClaimedAt: serverTimestamp()
          });
        });

        let successMessage = `PUNCH SUCCESSFULLY CLAIMED!`; // Main title
        let customerInfo = `Customer ID: ${customerId}`;
        let punchInfo = `You now have ${finalPunches} / ${totalPunchesForReward} punches`;
        let rewardInfo = "";
        
        if (finalPunches >= totalPunchesForReward) {
          rewardInfo = `CONGRATULATIONS! You've earned a reward!`;
        } else {
          const punchesLeft = Math.max(0, totalPunchesForReward - finalPunches);
          rewardInfo = `Only ${punchesLeft} more punches until your next reward!`;
        }
        setMessage({
          title: successMessage,
          customer: customerInfo,
          punches: punchInfo,
          reward: rewardInfo,
          redirecting: "Redirecting shortly..."
        });

      } catch (e) {
        console.error("Error processing punch claim:", e);
        setError(`Error: ${e.message || "Could not process your punch. Please try again or contact support."}`);
        setMessage('');
        setTimeout(() => navigate('/'), 7000);
      }
    };

    processPunchClaim();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF', // Light theme: Page Background
        color: '#1C1C1E', // Light theme: Default Text
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#FFFFFF', // Light theme: Card Background
          borderRadius: '1rem',
          border: '1px solid #D1D1D6', // Light theme: Border
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)' // Softer shadow
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#BF2C2C' /* Light theme: Error Text */ }}>Punch Claim Error</h1>
          <p style={{ marginTop: '1rem', color: '#3C3C3E' /* Light theme: Secondary Text */ }}>{error}</p>
          <button 
            onClick={() => navigate('/')} 
            style={{
              marginTop: '1.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#E5E5EA', // Light theme: Button Background
              color: '#1C1C1E', // Light theme: Button Text
              borderRadius: '0.375rem',
              fontWeight: '600',
              border: 'none'
            }}
          >Go to Homepage</button>
        </div>
      </div>
    );
  }

  if (typeof message === 'string' || !message.title) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#FFFFFF', // Light theme: Page Background
        color: '#1C1C1E', // Light theme: Default Text
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}>
        <p style={{ fontSize: '1.25rem', animation: 'pulse 1.5s infinite' }}>{typeof message === 'string' ? message : 'Processing your punch...'}</p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#FFFFFF', // Light theme: Page Background
      color: '#1C1C1E', // Light theme: Default Text
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: '1rem'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        textAlign: 'center',
        padding: '1.5rem',
        backgroundColor: '#FFFFFF', // Light theme: Card Background
        borderRadius: '1rem',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)', // Softer shadow
        border: '1px solid #D1D1D6' // Light theme: Border
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <h2 style={{
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            color: '#3C3C3E', // Light theme: Secondary Text for subtitle
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '0.5rem'
          }}>UFOGER Loyalty Card</h2>
          <h1 style={{
            fontSize: '1.875rem',
            fontWeight: 'bold',
            color: '#1C1C1E' // Light theme: Primary Text
          }}>✅ {message.title}</h1>
        </div>

        <div style={{
          backgroundColor: '#F8F8F9', // Light theme: Info Box Background (Slightly off-white)
          color: '#3C3C3E', // Light theme: Secondary Text for info box content
          padding: '1.25rem',
          borderRadius: '0.75rem',
          marginTop: '1.5rem',
          border: '1px solid #E5E5EA' // Light border for info box
        }}>
          <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#1D7A2E', marginBlock: '1rem' }}>Punch successfully claimed!</p>
          <p style={{ marginBlock: '1rem', color: '#3C3C3E' }}>{message.customer}</p>
          <p style={{ marginBlock: '1rem', color: '#3C3C3E' }}><strong>{message.punches}</strong></p>
          <p style={{ marginBlock: '1rem', color: '#3C3C3E' }}>{message.reward}</p>
        </div>

        <p style={{
          fontSize: '0.875rem',
          color: '#8E8E93', // Light theme: Placeholder/Muted Text
          marginTop: '1.5rem',
          animation: 'pulse 1.5s infinite'
        }}>{message.redirecting}</p>
      </div>
    </div>
  );
};

export default ClaimPunchPage;
