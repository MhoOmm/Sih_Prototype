import { Link } from 'react-router-dom';

const PlaceCard = ({ name, description, imageUrl, link }) => {
  return (
    <div className="group bg-gray-800/60 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700">
      <img
        className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
        src={imageUrl}
        alt={name}
      />
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 text-green-400">{name}</h3>
        <p className="text-gray-300 text-base mb-4">{description}</p>
        <Link
          to={link}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
