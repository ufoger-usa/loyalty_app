import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

function QRCodeDisplay({ value = "loyalty-program-user-123" }) {
  return (
    <div className="qr-code-container">
      <h2>Scan QR Code</h2>
      <p>Present this QR code to earn or redeem points.</p>
      <div className="qr-code-actual">
        {value ? (
          <QRCodeSVG value={value} size={128} bgColor={"#ffffff"} fgColor={"#000000"} level={"L"} />
        ) : (
          <p>No QR code data available.</p>
        )}
      </div>
    </div>
  );
}

export default QRCodeDisplay;
