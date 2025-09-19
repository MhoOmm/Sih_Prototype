import CraftCard from './CraftCard';
import dhokra from "../assets/Pics/dhokra-art.jpg"
import bamboo from "../assets/Pics/bamboo-crafts.jpg"
import sohrai from "../assets/Pics/sohrai-painting.jpg"
import paitkar from "../assets/Pics/paitkar-scroll.jpg"

const myCrafts = [
  { 
    id: 1, 
    name: 'Traditional Dhokra Horse', 
    description: 'Handcrafted bronze horse sculpture using ancient lost-wax casting technique with intricate tribal patterns.', 
    imageUrl: `${dhokra}`, 
    link: '/edit-craft/1',
    price: '₹2,500',
    stock: 8,
    status: 'active',
    views: 124,
    orders: 6,
    category: 'Dhokra Metal Art',
    dateAdded: '2024-08-15'
  },
  { 
    id: 2, 
    name: 'Bamboo Storage Basket Set', 
    description: 'Eco-friendly handwoven bamboo baskets perfect for home organization, made by skilled tribal artisans.', 
    imageUrl: `${bamboo}`, 
    link: '/edit-craft/2',
    price: '₹1,200',
    stock: 15,
    status: 'active',
    views: 89,
    orders: 12,
    category: 'Bamboo & Cane Crafts',
    dateAdded: '2024-08-20'
  },
  { 
    id: 3, 
    name: 'Sohrai Canvas Painting', 
    description: 'Traditional tribal wall art featuring geometric patterns and nature motifs on premium canvas.', 
    imageUrl: `${sohrai}`, 
    link: '/edit-craft/3',
    price: '₹3,500',
    stock: 3,
    status: 'low-stock',
    views: 76,
    orders: 4,
    category: 'Sohrai Paintings',
    dateAdded: '2024-09-01'
  },
  { 
    id: 4, 
    name: 'Paitkar Story Scroll', 
    description: 'Ancient storytelling art depicting Mahabharata scenes on handmade paper, 3 feet long traditional scroll.', 
    imageUrl: `${paitkar}`, 
    link: '/edit-craft/4',
    price: '₹1,800',
    stock: 0,
    status: 'out-of-stock',
    views: 45,
    orders: 2,
    category: 'Paitkar Scrolls',
    dateAdded: '2024-09-10'
  }
];

const MyCraftsPage = () => {
  const totalCrafts = myCrafts.length;
  const activeCrafts = myCrafts.filter(craft => craft.status === 'active').length;
  const totalViews = myCrafts.reduce((sum, craft) => sum + craft.views, 0);
  const totalOrders = myCrafts.reduce((sum, craft) => sum + craft.orders, 0);

  return (
    <div className="min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Header with Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Crafts</h1>
          <p className="text-gray-300 mb-6">Manage your traditional handicraft inventory</p>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-green-400">{totalCrafts}</div>
              <div className="text-sm text-gray-300">Total Crafts</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">{activeCrafts}</div>
              <div className="text-sm text-gray-300">Active</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-yellow-400">{totalViews}</div>
              <div className="text-sm text-gray-300">Total Views</div>
            </div>
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">{totalOrders}</div>
              <div className="text-sm text-gray-300">Orders</div>
            </div>
          </div>
        </div>

        {/* Crafts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {myCrafts.map((craft) => <CraftCard key={craft.id} {...craft} />)}
        </div>
      </div>
    </div>
  );
};

export default MyCraftsPage;
