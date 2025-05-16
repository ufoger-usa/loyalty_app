import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <h2>Test Home</h2>
      <p>This is the home page.</p>
      <Link to="/customer">Go to Customer Page</Link>
    </div>
  );
}

function Customer() {
  React.useEffect(() => {
    console.log('[TEST] Customer route loaded');
  }, []);
  return (
    <div style={{ padding: 40, textAlign: 'center', background: '#e0f7fa' }}>
      <h2>Test Customer Page</h2>
      <p>If you see this, HashRouter is working!</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default function TestApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="customer" element={<Customer />} />
    </Routes>
  );
}
