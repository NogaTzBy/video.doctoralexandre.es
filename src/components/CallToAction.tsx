import React from 'react';
import ProgramIncludes from './ProgramIncludes';
import CTAButton from './CTAButton';

const CallToAction = () => {
  return (
    <section id="video-testimonials" className="py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-slate-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
            Testimonios en 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300"> video</span>
          </h2>
          
          <div className="max-w-md mx-auto">
            <div style={{padding:"177.78% 0 0 0", position:"relative"}}>
              <iframe 
                src="https://player.vimeo.com/video/1099397212?title=0&byline=0&portrait=0&like=0&watchlater=0&share=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                title="Testimonio de paciente"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <ProgramIncludes />
          <div className="text-center">
            <CTAButton text="QUIERO TENER ESOS RESULTADOS" size="large" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;