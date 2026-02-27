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
    <section className="py-0 bg-primary">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {values.map((item, index) => (
            <div
              key={index}
              className={`${item.color} py-16 px-8 lg:px-12 2xl:py-24 2xl:px-20 text-center text-white relative overflow-hidden group animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="mb-6 2xl:mb-8 p-4 2xl:p-6 bg-white/10 rounded-full backdrop-blur-sm">
                  <item.icon size={40} className="text-white w-10 h-10 2xl:w-14 2xl:h-14" />
                </div>

                <h2 className="text-xl 2xl:text-2xl font-light tracking-widest uppercase mb-1 opacity-90">
                  {item.title}
                </h2>
                <span className="block text-4xl 2xl:text-6xl font-serif font-bold tracking-wider mb-4 2xl:mb-6">
                  {item.subtitle}
                </span>
                <div className="w-12 2xl:w-16 h-1 2xl:h-1.5 bg-white/50 mb-6 2xl:mb-8 mx-auto" />
                <p className="text-white/90 max-w-sm 2xl:max-w-md mx-auto leading-relaxed text-base 2xl:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
