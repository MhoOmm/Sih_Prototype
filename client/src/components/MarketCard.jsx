import { MapPin } from 'lucide-react';

const MarketCard = ({ name, description, imageUrl, location }) => {
  return (
    <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
        <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-2 py-1 m-2 rounded-md">
          Featured
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2 text-green-400">{name}</h3>
        <p className="text-gray-300 text-sm mb-4 h-12">{description}</p>
        <div className="flex items-center text-gray-400 text-xs">
          <MapPin size={14} className="mr-2" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
