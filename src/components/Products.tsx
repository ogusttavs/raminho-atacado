import { motion } from 'motion/react';

export default function Products() {
  const categories = [
    {
      name: 'Frutas Nacionais',
      image: '/frutas-nacionais.png',
      desc: 'Do campo direto para o caminhão. Morangos, melões e muito mais com o padrão de excelência dos melhores produtores.',
    },
    {
      name: 'Frutas Importadas',
      image: '/frutas-importadas.png',
      desc: 'O Brix exato e a firmeza ideal. Maçãs, pêras, kiwis e uvas chilenas e argentinas selecionadas a dedo.',
    },
    {
      name: 'Frutas Exóticas',
      image: '/frutas-exoticas.png',
      desc: 'Agregue valor à sua banca com pitaya, lichia, physalis e outras frutas de alta demanda comercial.',
    },
    {
      name: 'Aproveite a Safra',
      image: '/frutas-estacao.png',
      desc: 'O melhor custo-benefício. Caixaria volumosa, sabor no pico e qualidade garantida nas frutas do momento.',
    },
  ];

  return (
    <section id="products" className="py-20 2xl:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="text-center mb-16 2xl:mb-24">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm 2xl:text-base">Nossa Seleção</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-serif font-bold text-gray-900 mt-2 2xl:mt-4">
            Nacionais e Importadas
          </h2>
          <p className="text-lg 2xl:text-2xl text-gray-600 mt-4 2xl:mt-6 max-w-2xl 2xl:max-w-4xl mx-auto">
            Importamos e distribuímos as melhores frutas do Brasil e do mundo. Variedade, frescor e qualidade garantidos para o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <div className="aspect-[3/4] sm:h-80 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  loading="lazy"
                  width="400"
                  height="600"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 sm:p-6 2xl:p-8 text-white">
                  <h3 className="text-xl sm:text-2xl 2xl:text-3xl font-serif font-bold mb-1 sm:mb-2">{category.name}</h3>
                  <p className="text-sm 2xl:text-lg text-gray-200 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 md:transform md:translate-y-4 md:group-hover:translate-y-0">
                    {category.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24 text-center">
          <a
            href="https://wa.me/5511940361803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-primary bg-secondary hover:bg-secondary/90 md:py-4 md:text-lg md:px-10 transition-colors"
          >
            Receber Tabela de Preços e Cotações
          </a>
        </div>
      </div>
    </section>
  );
}
