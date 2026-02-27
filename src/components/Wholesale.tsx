import { motion } from 'motion/react';
import { ShoppingBag, ChefHat, Building2, PartyPopper, Tent, ArrowUpRight } from 'lucide-react';

export default function Wholesale() {
  const benefits = [
    {
      icon: ChefHat,
      title: 'Restaurantes & Chefs',
      description: 'Calibre padronizado e sabor garantido para a alta gastronomia.',
      color: 'bg-blue-50',
    },
    {
      icon: ShoppingBag,
      title: 'Mercados & Empórios',
      description: 'Frutas selecionadas que garantem giro rápido e uma banca impecável.',
      color: 'bg-yellow-50',
    },
    {
      icon: Building2,
      title: 'Hotéis e Resorts',
      description: 'Abastecimento diário pontual e frutas de padrão superior para grandes volumes.',
      color: 'bg-gray-50',
    },
    {
      icon: Tent,
      title: 'Feiras & Sacolões',
      description: 'Caixaria padronizada, regularidade de entrega e negociação justa.',
      color: 'bg-green-50',
    },
    {
      icon: PartyPopper,
      title: 'Eventos',
      description: 'Frutas decorativas para celebrações.',
      color: 'bg-blue-50',
    },
  ];

  return (
    <section id="wholesale" className="py-24 2xl:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 2xl:mb-24 gap-8">
          <div className="max-w-2xl 2xl:max-w-4xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs 2xl:text-base mb-2 block">Abastecimento Especializado</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-serif font-bold text-primary leading-tight">
              A Mercadoria Certa <br />
              <span className="text-gray-400 font-light italic">para o seu Negócio</span>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md 2xl:max-w-xl text-lg 2xl:text-2xl">
            Banca cheia e cliente satisfeito: fornecemos volume com padrão que faz a diferença.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative p-8 rounded-3xl ${benefit.color} hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/5 overflow-hidden`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-primary w-6 h-6" />
              </div>

              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <benefit.icon size={24} />
              </div>

              <h3 className="text-2xl font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center items-start text-white group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-3xl font-serif font-bold mb-4 relative z-10">
              Feche carga com quem entende de padrão.
            </h3>
            <p className="text-white/80 mb-8 max-w-lg relative z-10">
              Eleve o nível do seu hortifruti com a Raminho. Chega de sofrer com quebra na banca.
            </p>
            <a
              href="https://wa.me/5511940361803"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-secondary text-primary rounded-full font-bold hover:bg-white transition-colors relative z-10"
            >
              Chamar no WhatsApp para Cotação
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
