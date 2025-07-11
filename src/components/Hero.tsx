import React from 'react';
import CountdownTimer from './CountdownTimer';
import DelayedButton from './DelayedButton';
import CTAButton from './CTAButton';

const Hero = () => {
  const handleButtonClick = () => {
    window.open('https://form.typeform.com/to/DBo4cn9M', '_blank');
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 overflow-hidden pt-16 md:pt-20">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
      
      <div className="relative container mx-auto px-4 lg:px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Countdown Timer - smaller and less prominent */}
          <div className="mb-1">
            <CountdownTimer />
          </div>
          


          {/* Main Headline - adjusted for better fit */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
            ¿Quieres más energía y 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"> dejar de hincharte?</span>
          </h1>

          {/* Subheadline - reduced size */}
          <p className="text-base md:text-lg lg:text-xl text-slate-200 mb-2 leading-relaxed font-light max-w-3xl mx-auto">
            28 días para dejar atrás para siempre la hinchazón y el cansancio, 
            <span className="font-semibold text-teal-300"> gracias a la epigenética.</span>
          </p>

          {/* Supporting text - smaller */}
          <p className="text-sm md:text-base text-slate-300 mb-3 max-w-3xl mx-auto leading-relaxed">
            Sin dietas restrictivas. Sin análisis genéricos. Y con protección médica: si en 3 meses no hay mejora, te devolvemos el dinero. Sin preguntas.
          </p>

          {/* Video container - optimized size */}
          <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto mb-3">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
              <iframe 
                src="https://player.vimeo.com/video/1100474503?badge=0&autopause=0&player_id=0&app_id=58479" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                title="VSL 1"
              ></iframe>
            </div>
          </div>
          
          {/* CTA Button below video */}
          <div className="mb-3">
            <button 
              onClick={handleButtonClick}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 px-6 py-3 text-sm"
            >
              QUIERO SABER MÁS
            </button>
          </div>
          
          {/* Delayed Button */}
          <div className="mt-2">
            <DelayedButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;