import { useParams, Link } from "react-router-dom";
import { placesData } from "../data/placesData";
import { Star, ArrowLeft } from "lucide-react";

const PlaceDetail = () => {
  const { placeId } = useParams();
  const place = placesData[placeId];

  if (!place) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Place not found!</h1>
        <Link to="/" className="text-green-400 hover:underline mt-4 inline-block">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <Link to="/" className="flex items-center text-green-400 mb-6 hover:underline">
        <ArrowLeft size={20} className="mr-2" />
        Back to all places
      </Link>

      <h1 className="text-4xl font-extrabold mb-4 text-white">{place.name}</h1>
      <p className="text-gray-400 mb-8">{place.location}</p>

      <img src={place.imageUrl} alt={place.name} className="w-full h-96 object-cover rounded-lg shadow-2xl mb-8" />

      <div className="bg-gray-800/50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-400">About {place.name}</h2>
        <p className="text-gray-300 leading-relaxed">{place.description}</p>
      </div>

      {/* NEW: Street View Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-green-400">Virtual Walkthrough (Street View)</h2>
        <iframe
          src={place.streetViewEmbed}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
          title={`Street View of ${place.name}`}
        ></iframe>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Location Map */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Location Map</h2>
          <iframe
            src={place.googleMapEmbed}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
            title={`Map of ${place.name}`}
          ></iframe>
        </div>

        {/* Reviews Section */}
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Visitor Reviews</h2>
          <div className="space-y-4">
            {place.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-700 pb-3">
                <div className="flex items-center mb-1">
                  {Array(review.rating).fill().map((_, i) => (<Star key={i} size={16} className="text-yellow-400 fill-current" />))}
                  {Array(5 - review.rating).fill().map((_, i) => (<Star key={i} size={16} className="text-gray-600" />))}
                </div>
                <p className="text-gray-300">"{review.comment}"</p>
                <p className="text-right text-sm text-gray-500 mt-2">- {review.user}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
