import jharkhandvlog from "../assets/Vids/vlog.mp4";

const VirtualTour = () => {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-green-400">
          A Cinematic Journey
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-300">
          Immerse yourself in the stunning landscapes and vibrant culture of Jharkhand.
        </p>
      </header>
      
      {/* Video Player Section */}
      <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700/50">
        <video 
          className="w-full h-full object-cover"
          src={jharkhandvlog}
          autoPlay
          loop
          muted
          controls 
          title="A virtual tour of Jharkhand"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </main>
  );
};

export default VirtualTour;
