import SellerCard from './SellerCard';
import dhokra from "../assets/Pics/dhokra-art.jpg"
import bamboo from "../assets/Pics/bamboo-crafts.jpg"
import sohrai from "../assets/Pics/sohrai-painting.jpg"
import paitkar from "../assets/Pics/paitkar-scroll.jpg"

const sellers = [
  { 
    id: 1, 
    name: 'Dhokra Metal Crafts', 
    description: 'Authentic bronze and copper sculptures using the ancient lost-wax technique by tribal artisans.', 
    imageUrl: `${dhokra}`, 
    link: '/sellers/dhokra-crafts' 
  },
  { 
    id: 2, 
    name: 'Bamboo & Cane Artisans', 
    description: 'Handcrafted baskets, furniture, and household items made from sustainable bamboo by skilled craftsmen.', 
    imageUrl: `${bamboo}`, 
    link: '/sellers/bamboo-crafts' 
  },
  { 
    id: 3, 
    name: 'Sohrai Wall Paintings', 
    description: 'Traditional tribal wall art featuring geometric patterns and nature motifs on canvas and home décor items.', 
    imageUrl: `${sohrai}`, 
    link: '/sellers/sohrai-paintings' 
  },
  { 
    id: 4, 
    name: 'Paitkar Scroll Artists', 
    description: 'Ancient storytelling art on handmade paper scrolls depicting folklore, mythology, and tribal life.', 
    imageUrl: `${paitkar}`, 
    link: '/sellers/paitkar-scrolls' 
  }
];

const SellerLandingPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white mb-4">
            Traditional <span className="text-green-400">Artisans</span> of Jharkhand
          </h1>
          <p className="mt-3 max-w-3xl mx-auto text-lg text-gray-300 sm:text-xl md:mt-5">
            Discover authentic handicrafts and traditional art forms crafted by skilled tribal artisans preserving centuries-old heritage.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {sellers.map((seller) => <SellerCard key={seller.id} {...seller} />)}
        </div>
      </div>
    </main>
  );
};

export default SellerLandingPage;
