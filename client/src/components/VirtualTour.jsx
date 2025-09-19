const VirtualTour = () => {
  return (
    <main className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-green-400 drop-shadow-lg">
          A Cinematic Journey
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Immerse yourself in the stunning landscapes and vibrant culture of Jharkhand.
        </p>
      </header>
      <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-gray-700/50 aspect-video">
        <iframe
          src="https://www.youtube.com/embed/eDIJv93S_tQ?si=HM3kD4zhmE3CSig6"
          title="YouTube video player"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default VirtualTour;
