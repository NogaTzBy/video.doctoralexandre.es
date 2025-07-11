import React from 'react';
import { Camera, Scan as Scanner, Fingerprint } from 'lucide-react';
import CTAButton from './CTAButton';

const WhyItWorks = () => {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-slate-800 leading-tight">
            ¿Por qué esto 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> funciona?</span>
          </h2>
          
          <div className="space-y-16">
            {/* Comparison 1 with vertical image */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/whatsapp image 2025-05-20 at 10.48.17 am (1).jpeg" 
                    alt="Dr. Alexandre" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Camera size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Análisis tradicionales</h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  <span className="font-bold text-lg md:text-xl">Imagina que llevas semanas con fiebre</span>, y te hacen una foto. En esa imagen te ves sudando, con cara de cansancio... pero la fiebre no se ve.
                  Eso es exactamente lo que pasa con muchos análisis tradicionales: hacen una "foto\" puntual de tu sangre, y si en ese momento no hay una alteración grave, todo parece estar bien… aunque tú sepas que no lo está.
                </p>
              </div>
            </div>
            
            {/* Comparison 2 with vertical image */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/whatsapp image 2025-05-20 at 10.48.13 am.jpeg" 
                    alt="Dr. Alexandre explicando el estrés oxidativo" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-teal-100 text-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Scanner size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">El test epigenético</h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  Funciona como un escáner completo. Analiza tu microbiota, tus deficiencias nutricionales, tus niveles de inflamación, y cómo responde tu cuerpo al entorno.
                  No mide solo lo visible. Mide lo que lleva tiempo alterado, aunque aún no haya dado "la cara" en una analítica convencional.
                </p>
              </div>
            </div>
            
            {/* Result with vertical image */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/whatsapp image 2025-05-22 at 8.08.05 pm.jpeg" 
                    alt="Dr. Alexandre presentando investigación" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Fingerprint size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">Resultados precisos</h3>
                </div>
                <p className="text-base md:text-lg leading-relaxed text-slate-700">
                  <span className="font-bold text-lg md:text-xl">Eso significa que no te damos recomendaciones genéricas, sino precisas</span>, adaptadas a lo que tu cuerpo realmente necesita. Y cuando tu cuerpo recibe exactamente eso… responde.
                  <br /><br />
                  <span className="text-teal-700 font-bold text-lg md:text-xl">Mejorando tu energía y dejando tu hinchazón para siempre.</span>
                </p>
                <div className="mt-8">
                  <CTAButton text="QUIERO SABER MÁS" size="medium" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;