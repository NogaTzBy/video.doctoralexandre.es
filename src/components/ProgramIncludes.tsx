import React from 'react';
import { Check } from 'lucide-react';

const ProgramIncludes = () => {
  const items = [
    { text: "Test epigenético avanzado", price: "400€", strikethrough: true },
    { text: "Primera sesión personalizada", price: "100€", strikethrough: true },
    { text: "Acompañamiento + Segunda sesión", price: "180€", strikethrough: true },
    { text: "Soporte epigenético personalizado", price: "100€", isBonus: true, bonusNumber: "1", strikethrough: true },
    { text: "Comunidad de mujeres saludables", price: "INVALUABLE", isBonus: true, bonusNumber: "2", strikethrough: true },
    { text: "Asesoramiento de suplementación + Descuentos", price: "500€", isBonus: true, bonusNumber: "3", strikethrough: true }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 max-w-4xl mx-auto mb-12">
      <div className="bg-slate-800 text-white text-center py-3 md:py-4 rounded-lg mb-6 md:mb-8">
        <h3 className="text-xl md:text-2xl font-bold">EL PROGRAMA INCLUYE:</h3>
      </div>
      
      <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start md:items-center justify-between py-2 md:py-3 border-b border-slate-200">
            <div className="flex items-start md:items-center flex-1 mr-4">
              <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                <Check size={16} className="text-white" />
              </div>
              <div className="flex-1">
                {item.isBonus ? (
                  <div className="flex flex-col md:flex-row md:items-center gap-2">
                    <div className="bg-slate-800 text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium inline-block w-fit">
                      Bonus {item.bonusNumber}:
                    </div>
                    <span className="text-sm md:text-base text-slate-700">{item.text}</span>
                  </div>
                ) : (
                  <span className="text-sm md:text-base text-slate-700">{item.text}</span>
                )}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className={`font-bold text-base md:text-lg ${
                item.price === 'INVALUABLE' ? 'text-teal-600' : 'text-slate-800'
              } ${item.strikethrough ? 'line-through' : ''}`}>
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-slate-800 text-white text-center py-4 rounded-lg">
        <p className="text-lg md:text-xl font-bold">36€ x 12 meses o 397€ Inversión única</p>
      </div>
    </div>
  );
};

export default ProgramIncludes;