import React from 'react';
import CTAButton from './CTAButton';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-2/5">
              <div className="rounded-full overflow-hidden w-64 h-64 mx-auto shadow-xl border-4 border-white">
                <img 
                  src="/whatsapp image 2025-05-20 at 10.48.32 am.jpeg"
                  alt="Dr. Alexandre" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-slate-800">Dr. Alexandre</h3>
                <p className="text-lg text-teal-600 mt-2">Médico especializado en salud digestiva y epigenética clínica</p>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-800 leading-tight">¿QUIÉN SOY Y POR QUÉ PUEDO AYUDARTE?</h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Mi nombre es Alexandre Olmos. Soy médico internista, especializado en epigenética clínica y longevidad, con más de 11 años analizando el cuerpo humano.
                </p>
                <p>
                  He acompañado a más de 1.200 mujeres que hacían todo bien (alimentación, ejercicio, suplementación), pero seguían sintiéndose mal sin una explicación médica clara. Hoy, muchas de ellas han conseguido recuperar su digestión, su energía y su descanso… gracias a un enfoque que la mayoría de médicos aún no aplica.
                </p>
                <p>
                  Fui el primer médico en España en aplicar la epigenética clínica de forma específica para mujeres. Y desde entonces, mi trabajo ha sido reconocido en medios como La Vanguardia, ABC, El Confidencial, Telva, Marca, El Español y La Cope, y he sido invitado a congresos internacionales de medicina.
                </p>
                <p>
                  He trabajado con deportistas profesionales, miembros del gobierno y personas de la lista Forbes, pero nunca olvido que este método nació primero por necesidad personal:
                </p>
                <p>
                  Yo también pasé años con hinchazón, fatiga e insomnio… mientras todos mis análisis salían "bien".
                </p>
                <p>
                  Por eso creé este sistema.
                </p>
                <p>
                  Para dar respuestas reales a mujeres que ya están hartas de escuchar que "todo está normal", cuando claramente no lo está.
                </p>
                <p>
                  Después de una decada como médico, aún sigo recordando lo que me impulsó a empezar: No conformarme con vivir a medias.
                </p>
                <p className="font-bold text-teal-700 text-lg">
                  Y si estás aquí, probablemente tú tampoco quieras hacerlo.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <CTAButton text="CLICK AQUÍ PARA HABLAR CONMIGO" size="medium" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;