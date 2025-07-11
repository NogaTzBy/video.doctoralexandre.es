import React from 'react';

const testimonialImages = [
  "/1.jpeg",
  "/2.jpeg", 
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
  "/8.jpeg",
  "/9.jpeg",
  "/10.jpeg",
  "/11.jpeg",
  "/12.jpeg"
];

const Testimonials = () => {
  // Create seamless infinite loop by tripling the images
  const infiniteImages = [...testimonialImages, ...testimonialImages, ...testimonialImages];
  const infiniteImagesReverse = [...testimonialImages.slice().reverse(), ...testimonialImages.slice().reverse(), ...testimonialImages.slice().reverse()];

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-slate-800 leading-tight">
            Lo que dicen nuestras 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> pacientes</span>
          </h2>
          
          {/* First row - moving left to right */}
          <div className="mb-8">
            <div className="flex animate-scroll-left space-x-6" style={{ width: 'calc(300% + 144px)' }}>
              {infiniteImages.map((image, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg p-4 hover-pause"
                >
                  <img 
                    src={image} 
                    alt={`Testimonio ${(index % testimonialImages.length) + 1}`} 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row - moving right to left */}
          <div>
            <div className="flex animate-scroll-right space-x-6" style={{ width: 'calc(300% + 144px)' }}>
              {infiniteImagesReverse.map((image, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl shadow-lg p-4 hover-pause"
                >
                  <img 
                    src={image} 
                    alt={`Testimonio ${(index % testimonialImages.length) + 1}`} 
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;