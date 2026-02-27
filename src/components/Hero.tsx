import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        <img
          src="/hero-bg.webp"
          alt="Frutas Premium no Atacado - Raminho Importadora"
          width="1920"
          height="1080"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 md:pt-0 2xl:px-16">
        <div className="max-w-3xl 2xl:max-w-5xl mx-auto md:mx-0 text-center md:text-left">
          <div className="animate-hero-fade-in">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl 2xl:text-[7.5rem] font-bold leading-tight text-white mb-6 sm:mb-8 2xl:mb-12">
              Raminho Importadora <br />
              <span className="text-secondary text-2xl sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-[4.5rem] block mt-2 sm:mt-4 2xl:mt-6 font-light italic">
                Padrão Extra no Atacado
              </span>
            </h1>

            <p className="text-xl 2xl:text-3xl text-gray-200 mb-10 2xl:mb-16 font-light leading-relaxed max-w-xl 2xl:max-w-3xl">
              Do Mercadão direto para o seu hortifruti ou restaurante. Caixaria selecionada, giro rápido e logística firme para sua banca nunca ficar desabastecida.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 justify-center md:justify-start">
              <a
                href="#wholesale"
                className="px-8 sm:px-10 py-4 bg-secondary text-primary font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 group rounded-sm min-h-[48px]"
              >
                Fazer Cotação do Dia
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#partners"
                className="px-8 sm:px-10 py-4 border-2 border-white text-white font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all rounded-sm text-center min-h-[48px] flex items-center justify-center"
              >
                Seja Nosso Fornecedor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
