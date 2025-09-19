import { useState } from 'react';
import { Upload, X, Plus, MapPin, Camera, Star, Tag, DollarSign, Package, FileText } from 'lucide-react';

const ShowcaseForm = () => {
  const [formData, setFormData] = useState({
    // Basic Info
    productName: '',
    craftType: '',
    description: '',
    
    // Pricing
    basePrice: '',
    priceRange: { min: '', max: '' },
    customizable: false,
    
    // Images
    images: [],
    
    // Craft Details
    materials: [],
    techniques: [],
    dimensions: { length: '', width: '', height: '' },
    weight: '',
    
    // Cultural Info
    origin: '',
    historicalSignificance: '',
    tribalCommunity: '',
    
    // Production
    productionTime: '',
    availability: 'in-stock',
    quantity: '',
    
    // Shipping
    shippingMethods: [],
    customOrders: false
  });

  const [dragActive, setDragActive] = useState(false);

  const craftTypes = [
    'Dhokra Metal Art',
    'Bamboo & Cane Crafts',
    'Sohrai Paintings',
    'Paitkar Scrolls',
    'Tribal Jewelry',
    'Stone Carving',
    'Wooden Artifacts',
    'Textile & Fabric',
    'Pottery & Ceramics',
    'Others'
  ];

  const tribalCommunities = [
    'Santal',
    'Oraon',
    'Munda',
    'Ho',
    'Kharia',
    'Malhar',
    'Chitrakar',
    'Others'
  ];

  const commonMaterials = [
    'Bronze', 'Copper', 'Brass', 'Bamboo', 'Cane', 'Wood', 
    'Natural Pigments', 'Stone', 'Clay', 'Cotton', 'Silk', 'Jute'
  ];

  const techniques = [
    'Lost Wax Casting', 'Hand Weaving', 'Natural Dyeing', 
    'Stone Carving', 'Wood Carving', 'Traditional Painting', 'Hand Embroidery'
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleImageUpload = (files) => {
    const newImages = Array.from(files).slice(0, 6 - formData.images.length);
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...newImages]
    }));
  };

  const removeImage = (index) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-black py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-green-400 mb-2">Showcase Your Craft</h1>
          <p className="text-gray-300">Share your traditional Jharkhand artifacts with the world</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Tag className="mr-2" size={20} />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Traditional Dhokra Horse Sculpture"
                  value={formData.productName}
                  onChange={(e) => handleInputChange('productName', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Craft Type *
                </label>
                <select
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.craftType}
                  onChange={(e) => handleInputChange('craftType', e.target.value)}
                >
                  <option value="">Select craft type</option>
                  {craftTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Describe your craft, its significance, and what makes it unique..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>
          </div>

          {/* Image Upload */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Camera className="mr-2" size={20} />
              Product Images (Max 6)
            </h2>

            <div
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
                dragActive ? 'border-green-500 bg-green-500/10' : 'border-gray-600 hover:border-green-500'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-300 mb-2">Drag and drop images here, or click to select</p>
              <p className="text-gray-500 text-sm">PNG, JPG up to 5MB each</p>
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                id="image-upload"
                onChange={(e) => handleImageUpload(e.target.files)}
              />
              <label
                htmlFor="image-upload"
                className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200"
              >
                Choose Files
              </label>
            </div>

            {/* Image Preview */}
            {formData.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <DollarSign className="mr-2" size={20} />
              Pricing Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Base Price (₹) *
                </label>
                <input
                  type="number"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="1500"
                  value={formData.basePrice}
                  onChange={(e) => handleInputChange('basePrice', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Min Price (₹)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="1000"
                  value={formData.priceRange.min}
                  onChange={(e) => handleInputChange('priceRange.min', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Max Price (₹)
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="3000"
                  value={formData.priceRange.max}
                  onChange={(e) => handleInputChange('priceRange.max', e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  className="mr-2 text-green-500 focus:ring-green-500"
                  checked={formData.customizable}
                  onChange={(e) => handleInputChange('customizable', e.target.checked)}
                />
                Available for custom orders
              </label>
            </div>
          </div>

          {/* Craft Details */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Package className="mr-2" size={20} />
              Craft Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Materials Used
                </label>
                <div className="flex flex-wrap gap-2">
                  {commonMaterials.map((material) => (
                    <button
                      key={material}
                      type="button"
                      onClick={() => handleArrayToggle('materials', material)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200 ${
                        formData.materials.includes(material)
                          ? 'bg-green-600 border-green-600 text-white'
                          : 'border-gray-600 text-gray-300 hover:border-green-500'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Techniques Used
                </label>
                <div className="flex flex-wrap gap-2">
                  {techniques.map((technique) => (
                    <button
                      key={technique}
                      type="button"
                      onClick={() => handleArrayToggle('techniques', technique)}
                      className={`px-3 py-1 rounded-full text-sm border transition-colors duration-200 ${
                        formData.techniques.includes(technique)
                          ? 'bg-green-600 border-green-600 text-white'
                          : 'border-gray-600 text-gray-300 hover:border-green-500'
                      }`}
                    >
                      {technique}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="15"
                    value={formData.dimensions.length}
                    onChange={(e) => handleInputChange('dimensions.length', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="10"
                    value={formData.dimensions.width}
                    onChange={(e) => handleInputChange('dimensions.width', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="8"
                    value={formData.dimensions.height}
                    onChange={(e) => handleInputChange('dimensions.height', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Weight (grams)
                  </label>
                  <input
                    type="number"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="500"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cultural Information */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <MapPin className="mr-2" size={20} />
              Cultural Heritage
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Origin Location *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Pundi Village, Ramgarh District"
                  value={formData.origin}
                  onChange={(e) => handleInputChange('origin', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tribal Community
                </label>
                <select
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.tribalCommunity}
                  onChange={(e) => handleInputChange('tribalCommunity', e.target.value)}
                >
                  <option value="">Select community</option>
                  {tribalCommunities.map((community) => (
                    <option key={community} value={community}>{community}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Historical Significance
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Share the cultural story, traditions, or historical importance of this craft..."
                value={formData.historicalSignificance}
                onChange={(e) => handleInputChange('historicalSignificance', e.target.value)}
              />
            </div>
          </div>

          {/* Production & Availability */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Star className="mr-2" size={20} />
              Production & Availability
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Production Time
                </label>
                <select
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.productionTime}
                  onChange={(e) => handleInputChange('productionTime', e.target.value)}
                >
                  <option value="">Select time</option>
                  <option value="1-3 days">1-3 days</option>
                  <option value="1 week">1 week</option>
                  <option value="2 weeks">2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2+ months">2+ months</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Availability
                </label>
                <select
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                >
                  <option value="in-stock">In Stock</option>
                  <option value="made-to-order">Made to Order</option>
                  <option value="limited">Limited Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Quantity Available
                </label>
                <input
                  type="number"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="10"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange('quantity', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center"
            >
              <Plus className="mr-2" size={20} />
              Showcase My Craft
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShowcaseForm;
