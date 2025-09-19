import { Link } from 'react-router-dom';
import { Eye, ShoppingCart, Edit3, MoreVertical, TrendingUp, Package } from 'lucide-react';
import { useState } from 'react';

const CraftCard = ({ 
  id, 
  name, 
  description, 
  imageUrl, 
  link, 
  price, 
  stock, 
  status, 
  views, 
  orders, 
  category, 
  dateAdded 
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusBadge = () => {
    switch (status) {
      case 'active':
        return <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Active</span>;
      case 'low-stock':
        return <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs">Low Stock</span>;
      case 'out-of-stock':
        return <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">Out of Stock</span>;
      default:
        return <span className="bg-gray-500/20 text-gray-400 px-2 py-1 rounded-full text-xs">Inactive</span>;
    }
  };

  const getStockColor = () => {
    if (stock === 0) return 'text-red-400';
    if (stock <= 5) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
      {/* Image Section with Status */}
      <div className="relative">
        <img
          className="w-full h-[23rem] object-cover transform transition-transform duration-300 group-hover:scale-105"
          src={imageUrl}
          alt={name}
        />
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          {getStatusBadge()}
        </div>

        {/* Menu Button */}
        <div className="absolute top-3 right-3">
          <button 
            onClick={() => setShowMenu(!showMenu)}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
          >
            <MoreVertical size={16} />
          </button>
          
          {/* Dropdown Menu */}
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-10">
              
              <button className="w-full px-4 py-2 text-left text-red-400 hover:bg-gray-700 text-sm">
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Stock Overlay */}
        {stock === 0 && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* Craft Name and Category */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-white group-hover:text-green-300 transition-colors duration-300 mb-1">
            {name}
          </h3>
          <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price and Stock */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-green-400 font-bold text-lg">{price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Package size={16} className={getStockColor()} />
            <span className={`text-sm font-medium ${getStockColor()}`}>
              {stock} in stock
            </span>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center justify-between bg-gray-700/30 rounded px-2 py-1">
            <div className="flex items-center gap-1">
              <Eye size={14} className="text-blue-400" />
              <span className="text-gray-300">Views</span>
            </div>
            <span className="text-blue-400 font-medium">{views}</span>
          </div>
          <div className="flex items-center justify-between bg-gray-700/30 rounded px-2 py-1">
            <div className="flex items-center gap-1">
              <ShoppingCart size={14} className="text-purple-400" />
              <span className="text-gray-300">Orders</span>
            </div>
            <span className="text-purple-400 font-medium">{orders}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={link}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 text-center text-sm flex items-center justify-center gap-1"
          >
            <Edit3 size={16} />
            Edit Craft
          </Link>
          <Link to="/seller-dashboard" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-300 flex items-center gap-1">
            <TrendingUp size={16} />
            Analytics
          </Link>
        </div>

        {/* Date Added */}
        <div className="mt-3 pt-3 border-t border-gray-700">
          <span className="text-xs text-gray-500">
            Added on {new Date(dateAdded).toLocaleDateString('en-IN')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
