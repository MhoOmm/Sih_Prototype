import React from 'react';
import QRCode from 'react-qr-code';
import Logo from "../assets/Logo.png"

const GovtSellerIDCard = () => {
  const user = {
    name: "Pankaj Sharma",
    email: "pankaj.sharma@tourism.jharkhand.gov.in",
    phone: "+91 9876543210",
    avatar: "https://thumbs.dreamstime.com/b/head-shot-portrait-happy-indian-businessman-company-executive-manager-dressed-casual-shirt-posing-camera-standing-377659928.jpg",
    uid: "JH-TSM-2024-008745",
    aadhar: "XXXX XXXX 9876",
    shopName: "Jharkhand Heritage Crafts",
    shopId: "SHOP-JH-HC-2024-156",
    gstNo: "20ABCDE1234F1Z5",
    address: "Main Bazaar, Ranchi, Jharkhand - 834001",
    category: "Handicrafts & Souvenirs",
    registrationDate: "15/08/2024",
    validUntil: "14/08/2026"
  };

  // Create comprehensive QR data with all details
  const qrData = JSON.stringify({
    name: user.name,
    email: user.email,
    phone: user.phone,
    uid: user.uid,
    aadhar: user.aadhar,
    shopName: user.shopName,
    shopId: user.shopId,
    gstNo: user.gstNo,
    address: user.address,
    category: user.category,
    registrationDate: user.registrationDate,
    validUntil: user.validUntil,
    avatar: user.avatar,
    verified: true,
    issuedBy: "Government of Jharkhand - Tourism Department"
  });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-8">
        <div className="mb-8 text-center">
            <img src={Logo} className='h-[10rem] w-[10rem] ml-[3.3rem]' />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-4 tracking-wider">
            ARANYA
            </h1>
            <p className="text-gray-400 text-lg font-medium tracking-wide">
            Digital Forest Marketplace
            </p>
        <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="relative">
        {/* Card shadow for depth - positioned behind the card */}
        <div className="absolute inset-0 bg-black/30 rounded-3xl transform translate-x-3 translate-y-3 blur-lg"></div>
        
        {/* Card Container with metallic effect */}
        <div className="relative w-[480px] h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 rounded-3xl shadow-2xl border border-green-400 overflow-hidden">
          
          {/* Metallic shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>
          
          {/* Header Section */}
          <div className="relative p-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                  <img src={Logo} />
                </div>
                <div>
                  <p className="text-white text-base font-bold">GOVT. OF JHARKHAND</p>
                  <p className="text-green-400 text-sm">Tourism Department</p>
                </div>
              </div>
              
              {/* Menu icon */}
              <div className="bg-gray-700 bg-opacity-70 rounded-lg p-2">
                <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
            </div>

            {/* Main Content - Centered */}
            <div className=" space-y-3">
              <h2 className="text-white text-3xl font-bold">{user.name}</h2>
              <p className="text-green-300 text-xl font-medium">{user.shopName}</p>
              <p className="text-gray-300 text-lg">{user.category}</p>
            </div>
          </div>

          {/* Bottom Section with Card Number and QR */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex justify-between items-end">
              {/* Card Details */}
              <div>
                <div className="text-green-400 text-2xl font-mono tracking-wider mb-3">
                  JH 2024 8745 0156
                </div>
                <div className="text-gray-400 text-base">
                  Valid: {user.validUntil}
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <QRCode
                  value={qrData}
                  size={96}
                  level="M"
                  includeMargin={false}
                />
              </div>
            </div>
          </div>

          {/* Metallic border highlights */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
};

export default GovtSellerIDCard;
