// filepath: g:\\UFOGER.com\\Loyalty Programs\\src\\components\\ClaimPunchPage.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { doc, getDoc, setDoc, serverTimestamp, runTransaction } from 'firebase/firestore';

const ClaimPunchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Processing your punch...');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    if (!token) {
      setError('No token provided.');
      setMessage('');
      return;
    }

    const processPunchClaim = async () => {
      try {
        // Extract customer ID and other necessary details from the token if they are embedded
        // For this example, let's assume the token itself is a one-time use document ID
        // or contains enough info to derive the customer and the punch action.

        // This is a simplified example. In a real app, the token would be validated,
        // likely against a 'pendingPunches' collection or similar,
        // and then used to update the actual customer's punch count.

        // For demonstration, let's assume the token format is `PUNCH_TOKEN_${customerId}_${timestamp}_${random}`
        // and we need to parse customerId from it. This is a placeholder for actual token validation logic.
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
        const customerId = parts[2]; // Assuming customerId is the third part

        if (!customerId) {
            setError("Could not identify customer from token.");
            setMessage("");
            return;
        }

        // Simulate a delay for processing
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Firestore transaction to update punches
        const customerRef = doc(db, "customers", customerId);

        await runTransaction(db, async (transaction) => {
          const customerDoc = await transaction.get(customerRef);
          if (!customerDoc.exists()) {
            throw new Error("Customer not found.");
          }

          const customerData = customerDoc.data();
          const currentPunches = customerData.punches || 0;
          const totalPunches = 10; // Assuming totalPunches is 10, ideally this comes from config or customer data

          if (currentPunches >= totalPunches) {
            setMessage("Reward already available! No more punches can be added.");
            // Potentially redirect or show a different message
            setTimeout(() => navigate('/'), 5000);
            return; // Exit transaction
          }

          const newPunches = currentPunches + 1;
          transaction.update(customerRef, {
            punches: newPunches,
            updatedAt: serverTimestamp(),
            lastPunchClaimedAt: serverTimestamp() // Track when the punch was claimed
          });

          // Here, you might also want to mark the token as used if it's stored in a separate collection
        });

        setMessage(`Punch successfully claimed for customer ${customerId}! You now have ${(await getDoc(customerRef)).data().punches} punches. Redirecting...`);
        setTimeout(() => navigate('/'), 5000); // Redirect to home or a success page

      } catch (e) {
        console.error("Error processing punch claim:", e);
        setError(`Error: ${e.message || "Could not process your punch. Please try again or contact support."}`);
        setMessage('');
        // Potentially redirect to an error page or home
        setTimeout(() => navigate('/'), 7000);
      }
    };

    processPunchClaim();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h1>Punch Claim Error</h1>
        <p>{message}</p>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Go to Homepage</button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      textAlign: 'center',
      cursor: (message === 'Processing your punch...' && !error) ? 'wait' : 'auto'
    }}>
      <h1>Claiming Your Punch</h1>
      <p>{message}</p>
      {/* You could add a loading spinner here */}
    </div>
  );
};

export default ClaimPunchPage;
