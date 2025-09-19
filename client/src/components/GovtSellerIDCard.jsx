import React from 'react';
import QRCode from 'react-qr-code';
import Logo from "../assets/Logo.png"
import Jhgovt from "../assets/jhgovt.png"

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
      {/* Header Section - Responsive */}
      <div className="mb-6 sm:mb-8 text-center">
        <div className="flex justify-center mb-4">
          <img 
            src={Logo} 
            alt="ARANYA Logo"
            className="h-16 w-16 sm:h-24 sm:w-24 lg:h-32 lg:w-32" 
          />
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent mb-2 sm:mb-4 tracking-wider">
          ARANYA
        </h1>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium tracking-wide px-4">
          Where Forests Whisper Ancient Secrets
        </p>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-green-400 to-teal-400 mx-auto mt-2 sm:mt-4 rounded-full"></div>
      </div>

      {/* Card Container - Responsive */}
      <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Card shadow for depth */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl sm:rounded-3xl transform translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 blur-lg"></div>
        
        {/* Card Container with metallic effect */}
        <div className="relative w-full h-64 sm:h-72 lg:h-80 bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-green-400 overflow-hidden">
          
          {/* Metallic shine overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform -skew-x-12 animate-pulse"></div>
          
          {/* Header Section */}
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="flex justify-between items-start mb-4 sm:mb-6 lg:mb-8">
              <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img 
                    src={Jhgovt} 
                    alt="Jharkhand Government" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-white text-xs sm:text-sm lg:text-base font-bold">GOVT. OF JHARKHAND</p>
                  <p className="text-green-400 text-xs sm:text-sm">Tourism Department</p>
                </div>
              </div>
              
              {/* Menu icon */}
              <div className="bg-gray-700 bg-opacity-70 rounded-lg p-1 sm:p-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                </svg>
              </div>
            </div>

            {/* Main Content - Responsive text sizes */}
            <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-center sm:text-left">
              <h2 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight">
                {user.name}
              </h2>
              <p className="text-green-300 text-sm sm:text-base lg:text-lg xl:text-xl font-medium leading-tight">
                {user.shopName}
              </p>
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base xl:text-lg leading-tight">
                {user.category}
              </p>
            </div>
          </div>

          {/* Bottom Section with Card Number and QR */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 sm:gap-0">
              {/* Card Details */}
              <div className="flex-1">
                <div className="text-green-400 text-base sm:text-lg lg:text-xl xl:text-2xl font-mono tracking-wider mb-1 sm:mb-2 lg:mb-3">
                  JH 2024 8745 0156
                </div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">
                  Valid: {user.validUntil}
                </div>
              </div>

              {/* QR Code - Responsive sizing */}
              <div className="bg-white p-2 sm:p-3 lg:p-4 rounded-lg shadow-lg">
                <QRCode
                  value={qrData}
                  size={60}
                  level="M"
                  includeMargin={false}
                  className="sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24"
                  style={{
                    height: "auto",
                    maxWidth: "100%",
                    width: "100%",
                  }}
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
