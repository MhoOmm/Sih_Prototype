import PlaceCard from './PlaceCard';
import parasnath from "../assets/Pics/LEAD IMAGE_MAN_3231.jpg"
import baidyanath from "../assets/Pics/Deoghar-Baidyanath-Temple.jpeg"
import dassam from "../assets/Pics/dassam-falls-ranchi-jharkhand-ranchi-1-attr-hero.jpeg"
import jonha from "../assets/Pics/1662583016Jonha_Waterfalls,_Ranchi,_Jharkhand.jpg"
const places = [
  { id: 1, name: 'Jonha Falls', description: 'Also known as Gautamdhara, this stunning waterfall is a popular picnic spot.', imageUrl:`${jonha}` , link: '/places/jonha-falls' },
  { id: 2, name: 'Dassam Falls', description: 'A breathtaking cascade where the Kanchi River falls from a height of 144 feet.', imageUrl: `${dassam}`, link: '/places/dassam-falls' },
  { id: 3, name: 'Baidyanath Temple', description: 'One of the twelve Jyotirlingas, this ancient temple complex is a major pilgrimage site.', imageUrl: `${baidyanath}`, link: '/places/baidyanath-temple' },
  { id: 4, name: 'Parasnath Hills', description: 'The highest peak in Jharkhand and a major Jain pilgrimage center with serene temples.', imageUrl:`${parasnath}`, link: '/places/parasnath-hills' }
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
