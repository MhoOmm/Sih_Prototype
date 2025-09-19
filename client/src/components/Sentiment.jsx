import React from 'react'

const Sentiment = () => {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-300">
          Sentiment is <span className="text-green-400">loading...</span>
        </h1>
      </div>
    </main>
  );
}

export default Sentiment