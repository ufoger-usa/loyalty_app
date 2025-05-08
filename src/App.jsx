import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import PunchCard from './components/PunchCard';
import QRCodeDisplay from './components/QRCodeDisplay';
import { db } from './firebaseConfig'; // Import Firestore instance
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

const ClaimPunchPage = lazy(() => import('./components/ClaimPunchPage')); // Dynamically import ClaimPunchPage

const CORRECT_PIN = "1234";

function App() {
  const [currentPunches, setCurrentPunches] = useState(0);
  const totalPunches = 10;

  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const [pinInput, setPinInput] = useState("");

  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [customerNameInput, setCustomerNameInput] = useState("");
  const [activeCustomerData, setActiveCustomerData] = useState(null);
  const [isRewardAvailable, setIsRewardAvailable] = useState(false);
  const [isLoadingCustomer, setIsLoadingCustomer] = useState(false);
  const [isSavingPunch, setIsSavingPunch] = useState(false);
  const [isRedeemingReward, setIsRedeemingReward] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState({ text: "", type: "" });

  const [actionableQrUrl, setActionableQrUrl] = useState("");
  const [isPunchQrModalOpen, setIsPunchQrModalOpen] = useState(false);

  const unsubscribeCustomerListenerRef = useRef(null);

  useEffect(() => {
    if (activeCustomerData) {
      setCurrentPunches(activeCustomerData.punches);
      setIsRewardAvailable(activeCustomerData.punches >= totalPunches);
      if (!customerNameInput && activeCustomerData.name) {
        setCustomerNameInput(activeCustomerData.name);
      }
    } else {
      setCurrentPunches(0);
      setIsRewardAvailable(false);
    }
  }, [activeCustomerData, totalPunches]);

  useEffect(() => {
    return () => {
      if (unsubscribeCustomerListenerRef.current) {
        unsubscribeCustomerListenerRef.current();
      }
    };
  }, []);

  const showFeedback = (text, type = "info") => {
    setFeedbackMessage({ text, type });
    setTimeout(() => {
      setFeedbackMessage({ text: "", type: "" });
    }, 2500); // Slightly shorter feedback display
  };

  const handleGeneratePunchQrCode = () => {
    if (!activeCustomerData || !activeCustomerData.id) {
      showFeedback("Please load a customer first.", "error");
      return;
    }
    if (activeCustomerData.punches >= totalPunches) {
      showFeedback("Reward is already available. Cannot add more punches.", "error");
      return;
    }

    const uniqueClaimToken = `PUNCH_TOKEN_${activeCustomerData.id}_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
    // Updated to reflect GitHub Pages deployment URL structure
    const claimUrl = `https://ufoger-usa.github.io/loyalty_app/claim?token=${uniqueClaimToken}`;

    setActionableQrUrl(claimUrl);
    setIsPunchQrModalOpen(true);
    showFeedback("QR code for customer to scan and get a punch is ready.", "info");
  };

  const addPunch = async () => {
    if (!isAdminUnlocked) {
      showFeedback("Please unlock admin access.", "error");
      return;
    }
    if (!activeCustomerData) {
      showFeedback("Please load a customer first.", "error");
      return;
    }
    if (activeCustomerData.punches >= totalPunches) {
      showFeedback("Reward is available! Please redeem before adding more punches.", "error");
      return;
    }

    setIsSavingPunch(true);
    setFeedbackMessage({ text: "", type: "" });
    const newPunches = activeCustomerData.punches < totalPunches ? activeCustomerData.punches + 1 : activeCustomerData.punches;

    const customerNameToSave = activeCustomerData.name || customerNameInput.trim();

    const updatedCustomerDataForState = { ...activeCustomerData, punches: newPunches, name: customerNameToSave };
    setActiveCustomerData(updatedCustomerDataForState);

    try {
      const customerRef = doc(db, "customers", activeCustomerData.id);
      await setDoc(customerRef, {
        punches: newPunches,
        name: customerNameToSave,
        updatedAt: serverTimestamp()
      }, { merge: true });
      showFeedback(`Punch added for ${customerNameToSave || activeCustomerData.id}!`, "success");
    } catch (error) {
      console.error("Error saving punch to Firestore:", error);
      showFeedback("Error saving punch. Please try again.", "error");
    } finally {
      setIsSavingPunch(false);
    }
  };

  const redeemReward = async () => {
    if (!isAdminUnlocked) {
      showFeedback("Please unlock admin access.", "error");
      return;
    }
    if (!activeCustomerData || activeCustomerData.punches < totalPunches) {
      showFeedback("Customer is not eligible for a reward yet or no customer loaded.", "error");
      return;
    }

    setIsRedeemingReward(true);
    setFeedbackMessage({ text: "", type: "" });
    const customerNameFromData = activeCustomerData.name || "Customer";

    const updatedCustomerDataForState = {
      ...activeCustomerData,
      punches: 0,
      lastRewardRedeemedAt: new Date().toISOString()
    };
    setActiveCustomerData(updatedCustomerDataForState);

    try {
      const customerRef = doc(db, "customers", activeCustomerData.id);
      await setDoc(customerRef,
        {
          punches: 0,
          lastRewardRedeemedAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        },
        { merge: true }
      );
      showFeedback(`Reward redeemed for ${customerNameFromData}! Punches reset.`, "success");
    } catch (error) {
      console.error("Error redeeming reward in Firestore:", error);
      showFeedback("Error redeeming reward. Please try again.", "error");
    } finally {
      setIsRedeemingReward(false);
    }
  };

  const handlePinInputChange = (event) => {
    setPinInput(event.target.value);
  };

  const handlePinSubmit = () => {
    if (pinInput === CORRECT_PIN) {
      setIsAdminUnlocked(true);
      setPinInput("");
      setFeedbackMessage({ text: "", type: "" });
    } else {
      showFeedback("Incorrect PIN", "error");
      setPinInput("");
    }
  };

  const handleLockAdmin = () => {
    setIsAdminUnlocked(false);
    setFeedbackMessage({ text: "", type: "" });
    setActiveCustomerData(null);
    setCustomerPhoneNumber("");
    setCustomerNameInput("");
    if (unsubscribeCustomerListenerRef.current) {
      unsubscribeCustomerListenerRef.current();
      unsubscribeCustomerListenerRef.current = null;
    }
  };

  const handlePhoneNumberChange = (event) => {
    setCustomerPhoneNumber(event.target.value);
  };

  const handleCustomerNameChange = (event) => {
    setCustomerNameInput(event.target.value);
  };

  const loadCustomerData = async () => {
    const phoneNumber = customerPhoneNumber.trim();
    const nameToSave = customerNameInput.trim();

    if (!phoneNumber) {
      showFeedback("Please enter a customer phone number.", "error");
      return;
    }

    if (unsubscribeCustomerListenerRef.current) {
      unsubscribeCustomerListenerRef.current();
      unsubscribeCustomerListenerRef.current = null;
    }

    setIsLoadingCustomer(true);
    setActiveCustomerData(null);
    setFeedbackMessage({ text: "", type: "" });

    const customerId = phoneNumber;
    const customerRef = doc(db, "customers", customerId);

    try {
      unsubscribeCustomerListenerRef.current = onSnapshot(customerRef, async (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          const customerData = {
            id: docSnap.id,
            punches: data.punches || 0,
            name: data.name || "",
            lastRewardRedeemedAt: data.lastRewardRedeemedAt,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt
          };
          setActiveCustomerData(customerData);
          if (data.name) setCustomerNameInput(data.name);

          if (nameToSave && nameToSave !== data.name) {
            await setDoc(customerRef, { name: nameToSave, updatedAt: serverTimestamp() }, { merge: true });
            setActiveCustomerData(prev => ({ ...prev, name: nameToSave }));
            showFeedback("Customer name updated.", "success");
          } else if (!data.name && nameToSave) {
            await setDoc(customerRef, { name: nameToSave, updatedAt: serverTimestamp() }, { merge: true });
            setActiveCustomerData(prev => ({ ...prev, name: nameToSave }));
            showFeedback("Customer name added.", "success");
          } else {
            showFeedback(`Customer ${data.name || customerId} loaded.`, "info");
          }

        } else {
          if (!nameToSave) {
            showFeedback("New customer. Please consider adding a name.", "warning");
          }
          const newCustomer = {
            id: customerId,
            punches: 0,
            name: nameToSave,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            lastRewardRedeemedAt: null
          };
          await setDoc(customerRef, {
            punches: 0,
            name: nameToSave,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            lastRewardRedeemedAt: null
          });
          showFeedback(`New customer ${nameToSave || customerId} created.`, "success");
        }
        setIsLoadingCustomer(false);
      }, (error) => {
        console.error("Error in Firestore listener:", error);
        showFeedback("Error listening to customer data. Try reloading.", "error");
        setIsLoadingCustomer(false);
        if (unsubscribeCustomerListenerRef.current) {
          unsubscribeCustomerListenerRef.current();
          unsubscribeCustomerListenerRef.current = null;
        }
      });

    } catch (error) {
      console.error("Error loading or creating customer data:", error);
      showFeedback("Error accessing customer data. Please try again.", "error");
      setIsLoadingCustomer(false);
      if (unsubscribeCustomerListenerRef.current) {
        unsubscribeCustomerListenerRef.current();
        unsubscribeCustomerListenerRef.current = null;
      }
    }
  };

  const MainAppContent = () => (
    <>
      {feedbackMessage.text && (
        <div className={`feedback-message ${feedbackMessage.type} ${feedbackMessage.type === 'error' ? 'feedback-error' : feedbackMessage.type === 'success' ? 'feedback-success' : 'feedback-info'}`}>
          {feedbackMessage.text}
        </div>
      )}

      {!isAdminUnlocked ? (
        <div className="admin-lock compact-section">
          <h4>Admin Access</h4>
          <input
            type="password"
            value={pinInput}
            onChange={handlePinInputChange}
            placeholder="Enter PIN"
            className="pin-input compact-input"
          />
          <button onClick={handlePinSubmit} className="admin-button compact-button">Unlock</button>
        </div>
      ) : (
        <div className="admin-unlocked">
          <div className="admin-controls-header compact-header">
            <h4>Admin Controls</h4>
            <button onClick={handleLockAdmin} className="admin-button lock-button compact-button danger-button">Lock</button>
          </div>

          <div className="customer-management compact-section">
            <h5>Load/Create Customer</h5>
            <div className="input-group compact-input-group">
              <input
                type="tel"
                value={customerPhoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone Number"
                className="customer-input compact-input"
                disabled={isLoadingCustomer}
              />
              <input
                type="text"
                value={customerNameInput}
                onChange={handleCustomerNameChange}
                placeholder="Name (Optional)"
                className="customer-input compact-input"
                disabled={isLoadingCustomer}
              />
              <button onClick={loadCustomerData} disabled={isLoadingCustomer || (!customerPhoneNumber.trim())} className="action-button compact-button">
                {isLoadingCustomer ? "Loading..." : "Load/Create"}
              </button>
            </div>
          </div>

          {activeCustomerData && (
            <div className="customer-info compact-section">
              <div className="customer-details">
                <h5>{activeCustomerData.name || "N/A"} ({activeCustomerData.id})</h5>
                <PunchCard currentPunches={currentPunches} totalPunches={totalPunches} isRewardAvailable={isRewardAvailable} />
              </div>
              
              <div className="actions-group compact-actions-group">
                <button onClick={addPunch} disabled={isSavingPunch || currentPunches >= totalPunches || isLoadingCustomer} className="action-button compact-button">
                  {isSavingPunch ? "..." : "Add Punch"}
                </button>
                <button 
                  onClick={handleGeneratePunchQrCode} 
                  disabled={!activeCustomerData || currentPunches >= totalPunches || isLoadingCustomer}
                  className="action-button compact-button qr-button"
                >
                  Generate Punch QR
                </button>
                <button onClick={redeemReward} disabled={isRedeemingReward || !isRewardAvailable || isLoadingCustomer} className="action-button redeem-button compact-button danger-button">
                  {isRedeemingReward ? "..." : "Redeem"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {isPunchQrModalOpen && actionableQrUrl && (
        <div className="modal-overlay" onClick={() => setIsPunchQrModalOpen(false)}>
          <div className="modal-content compact-modal" onClick={(e) => e.stopPropagation()}>
            <h4>Scan to Get Punch</h4>
            <QRCodeDisplay value={actionableQrUrl} size={200} /> 
            <p className="qr-url-display small-text">{actionableQrUrl}</p>
            <button onClick={() => setIsPunchQrModalOpen(false)} className="admin-button compact-button">Close</button>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="App">
      <header className="App-header compact-app-header">
        <h1>Loyalty Card</h1>
      </header>
      <main className="App-main">
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<MainAppContent />} />
            <Route path="/claim" element={<ClaimPunchPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
