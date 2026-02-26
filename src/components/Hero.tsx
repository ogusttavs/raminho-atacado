import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        <img
          src="/hero-bg.jpg"
          alt="Frutas Premium no Atacado - Raminho Importadora"
          width="1920"
          height="1080"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-0">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 border-l-4 border-secondary pl-4 text-left">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                Desde 1980
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white mb-6 sm:mb-8">
              Raminho Importadora <br />
              <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-6xl block mt-2 sm:mt-4 font-light italic">
                Seu parceiro no Atacado de Frutas
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-10 font-light leading-relaxed max-w-xl">
              Distribuição de frutas nacionais e importadas para o seu negócio. Qualidade, frescor e compromisso do produtor diretamente para você.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
              <a
                href="#wholesale"
                className="px-8 sm:px-10 py-4 bg-secondary text-primary font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 group rounded-sm min-h-[48px]"
              >
                Comprar no Atacado
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#partners"
                className="px-8 sm:px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all rounded-sm text-center min-h-[48px] flex items-center justify-center"
              >
                Seja Fornecedor
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
