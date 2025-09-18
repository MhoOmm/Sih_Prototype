import PlaceCard from './PlaceCard';

const places = [
  { id: 1, name: 'Jonha Falls', description: 'Also known as Gautamdhara, this stunning waterfall is a popular picnic spot.', imageUrl: 'https://www.connectingtraveller.com/images/localtip/1662583016Jonha_Waterfalls,_Ranchi,_Jharkhand.jpg', link: '/places/jonha-falls' },
  { id: 2, name: 'Dassam Falls', description: 'A breathtaking cascade where the Kanchi River falls from a height of 144 feet.', imageUrl: 'https://s7ap1.scene7.com/is/image/incredibleindia/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero?qlt=82&ts=1727010932624', link: '/places/dassam-falls' },
  { id: 3, name: 'Baidyanath Temple', description: 'One of the twelve Jyotirlingas, this ancient temple complex is a major pilgrimage site.', imageUrl: 'https://behindeverytemple.org/wp-content/uploads/2020/09/Deoghar-Baidyanath-Temple.jpeg', link: '/places/baidyanath-temple' },
  { id: 4, name: 'Parasnath Hills', description: 'The highest peak in Jharkhand and a major Jain pilgrimage center with serene temples.', imageUrl: 'https://th-i.thgim.com/public/incoming/miyvfu/article66409215.ece/alternates/LANDSCAPE_1200/LEAD%20IMAGE_MAN_3231.jpg', link: '/places/parasnath-hills' }
];

const LandingPage = () => {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-green-400">Discover Jharkhand</h1>
        <p className="mt-3 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-5 md:max-w-3xl">Explore the hidden gems, serene waterfalls, and rich cultural heritage of the land of forests.</p>
      </header>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {places.map((place) => <PlaceCard key={place.id} {...place} />)}
      </div>
    </main>
  );
};

export default LandingPage;
