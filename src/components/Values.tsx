import { motion } from 'motion/react';
import { Award, Truck, Handshake } from 'lucide-react';

export default function Values() {
  const values = [
    {
      icon: Award,
      title: "QUALIDADE",
      subtitle: "SEMPRE",
      description: "Seleção rigorosa das melhores frutas nacionais e importadas.",
      color: "bg-primary"
    },
    {
      icon: Truck,
      title: "Excelência na",
      subtitle: "ENTREGA",
      description: "Logística eficiente para garantir o frescor até o seu estabelecimento.",
      color: "bg-secondary"
    },
    {
      icon: Handshake,
      title: "Nossos principais",
      subtitle: "PARCEIROS",
      description: "Relacionamento duradouro com produtores e clientes.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {values.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`${item.color} py-16 px-8 text-center text-white relative overflow-hidden group`}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <item.icon size={40} className="text-white" />
              </div>

              <h2 className="text-xl font-light tracking-widest uppercase mb-1 opacity-90">
                {item.title}
              </h2>
              <span className="block text-4xl font-serif font-bold tracking-wider mb-4">
                {item.subtitle}
              </span>
              <div className="w-12 h-1 bg-white/50 mb-6 mx-auto" />
              <p className="text-white/90 max-w-xs mx-auto leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
