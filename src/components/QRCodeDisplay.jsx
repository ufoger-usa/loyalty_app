import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeDisplay({ value, size = 128 }) {
  return (
    <div className="qr-code-container" style={{ textAlign: 'center' }}>
      <div className="qr-code-actual" style={{ marginTop: '10px', marginBottom: '10px' }}>
        {value ? (
          <QRCodeSVG value={value} size={size} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} />
        ) : (
          <p>No QR code data available.</p>
        )}
      </div>
    </div>
  );
}

export default QRCodeDisplay;
