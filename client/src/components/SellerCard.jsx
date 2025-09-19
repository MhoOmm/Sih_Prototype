import { Link } from 'react-router-dom';
import { Star, MapPin, Users, Navigation, Heart,IdCard } from 'lucide-react';

const SellerCard = ({ name, description, imageUrl, link, rating = 4.8, specificLocation = "Jharkhand", customers = 150, price = "₹500 - ₹5000", verified = true, mapLocation = "" }) => {
  
  const handleMapClick = () => {
    if (mapLocation) {
      window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapLocation)}`, '_blank');
    }
  };

  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
      {/* Image Section with Badges */}
      <div className="relative">
        <img
          className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={name}
        />
        
        {/* Verified Badge */}
        {verified && (
          <div className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Verified
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-200">
            <Heart className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Seller Name and Rating */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl text-green-400 group-hover:text-green-300 transition-colors duration-300">
            {name}
          </h3>
          <div className="flex items-center gap-1 text-yellow-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm text-gray-300">{rating}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Seller Info */}
        <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{specificLocation}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{customers}+ customers</span>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <span className="text-green-400 font-semibold text-lg">Starting from {price}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link
            to={link}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center"
          >
            View Products
          </Link>
          <button 
            onClick={handleMapClick}
            className="hover:bg-green-600 border border-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2 cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            Location
          </button>

          <button 
            onClick={handleMapClick}
            className=" hover:bg-green-600 border border-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 flex items-center gap-2 cursor-pointer"
          >
            <IdCard className="w-4 h-4" />
            Seller ID
          </button>
        </div>

      </div>
    </div>
  );
};

export default SellerCard;
