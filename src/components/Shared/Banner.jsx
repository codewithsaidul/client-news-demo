import React from 'react';

const Banner = ({ color, image, title }) => {
  // Determine if we need the full screen height (h-screen)
  const hasImageOrColor = image || color;

  return (
    <div
      className={`relative ${hasImageOrColor ? 'h-screen' : 'h-auto'} ${color || 'bg-white'}`}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Conditionally render the overlay if there is an image */}
      {image && <div className="absolute inset-0 bg-black opacity-50" />}
      
      {/* Title section */}
      <div 
        className={`mt-32 pl-10 ${hasImageOrColor && 'absolute inset-0 flex items-center justify-center text-white'} text-black z-10`}
      >
        <h1 className="max-[450px]:text-5xl text-8xl capitalize font-banner-title">{title || 'Default Title'}</h1>
      </div>
    </div>
  );
};

export default Banner;
