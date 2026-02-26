import { motion } from 'motion/react';
import { Award, Truck, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-primary font-semibold text-sm mb-6">
              Sobre Nós
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              Tradição que atravessa <br />
              <span className="relative inline-block">
                <span className="relative z-10">gerações</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-secondary/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Fundada há mais de 40 anos, a Raminho Importadora nasceu da paixão por frutas de qualidade. O que começou como um pequeno negócio familiar no Mercado Municipal de São Paulo cresceu para se tornar uma referência em importação e <strong className="text-primary">distribuição atacadista</strong> de frutas premium.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso foco é o <strong className="text-primary">atacado</strong>: abastecemos restaurantes, hotéis, mercados e empórios com frutas nacionais e importadas selecionadas. Unimos décadas de experiência com logística moderna para garantir frescor e regularidade no fornecimento.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, text: "Qualidade Garantida" },
                { icon: Truck, text: "Logística Eficiente" },
                { icon: Users, text: "Atendimento Personalizado" },
                { icon: Clock, text: "Frescor Diário" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-lg text-primary">
                    <item.icon size={20} />
                  </div>
                  <span className="font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop"
                alt="Mercado Municipal"
                className="w-full h-full object-cover"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold text-xl">
                    40+
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Anos de</p>
                    <p className="text-lg font-bold text-primary">História e Tradição</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
