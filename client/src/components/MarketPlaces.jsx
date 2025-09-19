import { sellersData } from '../data/marketplacesData';
import MarketCard from './MarketCard';
import { ShoppingBag, UtensilsCrossed, Sparkles, UserCheck } from 'lucide-react';

// Helper component for section headers
const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center mb-6">
    {icon}
    <h2 className="text-2xl sm:text-3xl font-bold text-white ml-3">{title}</h2>
  </div>
);

const Marketplaces = () => {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-green-400">
          Local Marketplaces & Services
        </h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">
          Discover authentic local products, cuisine, and guided experiences from trusted sellers.
        </p>
      </header>

      {/* Handicrafts Section */}
      <section className="mb-16">
        <SectionHeader 
          icon={<Sparkles size={32} className="text-green-400" />} 
          title="Handicrafts" 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellersData.handicrafts.map((seller) => (
            <MarketCard key={seller.id} {...seller} />
          ))}
        </div>
      </section>

      {/* Souvenirs Section */}
      <section className="mb-16">
        <SectionHeader 
          icon={<ShoppingBag size={32} className="text-green-400" />} 
          title="Souvenirs" 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellersData.souvenirs.map((seller) => (
            <MarketCard key={seller.id} {...seller} />
          ))}
        </div>
      </section>

      {/* Food & Beverage Section */}
      <section className="mb-16">
        <SectionHeader 
          icon={<UtensilsCrossed size={32} className="text-green-400" />} 
          title="Food & Beverage" 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellersData["food-and-beverage"].map((seller) => (
            <MarketCard key={seller.id} {...seller} />
          ))}
        </div>
      </section>
      
      {/* Tour Guides Section */}
      <section>
        <SectionHeader 
          icon={<UserCheck size={32} className="text-green-400" />} 
          title="Tour Guides" 
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sellersData["tour-guides"].map((seller) => (
            <MarketCard key={seller.id} {...seller} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Marketplaces;
