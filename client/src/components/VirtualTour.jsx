const VirtualTour = () => {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-green-400 mb-8">Virtual Tour of Jharkhand</h1>
      <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
        <iframe
          src="https://www.youtube.com/embed/f-82U52J2Fk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <p className="text-center text-gray-400 mt-4">Enjoy a cinematic journey through the stunning landscapes of Jharkhand.</p>
    </main>
  );
};

export default VirtualTour;
