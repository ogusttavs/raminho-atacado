import { motion } from 'motion/react';
import { Award, Truck, Users, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 2xl:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-2 2xl:px-6 2xl:py-3 bg-white rounded-full shadow-sm text-primary font-semibold text-sm 2xl:text-base mb-6">
              Sobre a Raminho
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-serif font-bold text-primary mb-6 2xl:mb-10 leading-tight">
              De geração em geração, entendemos de <br />
              <span className="relative inline-block">
                <span className="relative z-10">safra e qualidade</span>
                <span className="absolute bottom-2 left-0 w-full h-3 2xl:h-5 bg-secondary/30 -z-0"></span>
              </span>
            </h2>
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 mb-6 2xl:mb-8 leading-relaxed">
              O que começou há mais de 40 anos como uma pequena banca familiar no Mercado Municipal de São Paulo, cresceu para se tornar referência em <strong className="text-primary">padrão superior</strong> de frutas na CEAGESP e no Mercadão. Não lidamos com sobra; lidamos com qualidade que faz diferença no balcão.
            </p>
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 mb-8 2xl:mb-12 leading-relaxed">
              Nós sabemos escolher o melhor <strong className="text-primary">calibre</strong> e as melhores safras. Nosso contato direto com os produtores do campo e grandes importadores garante que você receba um abastecimento constante, justo e com giro rápido, faça chuva ou faça sol.
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
                loading="lazy"
                width="800"
                height="600"
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
