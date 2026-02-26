import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Handshake, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function Partners() {
    const [showAll, setShowAll] = useState(false);
    const partners = [
        {
            name: 'Itaueira - REI',
            logo: '/LogoItaueira.png',
            description: 'Referência nacional em melões premium, melancias e pimentões. Do campo ao consumidor com rastreabilidade e excelência.',
            specialty: 'Melões, Melancias, Pimentões',
            since: 'REI Alimentos',
        },
        {
            name: 'Sanjo',
            logo: '/LogoSanjo.png',
            description: 'Cooperativa agrícola de São Joaquim-SC. Do campo para a sua mesa com o que há de mais moderno em tecnologia de cultivo e seleção.',
            specialty: 'Maçãs, Sucos, Frutas de Altitude',
            since: 'Desde 1993',
        },
        {
            name: 'Cervi',
            logo: '/logoCervi.png',
            description: 'Empresa familiar da Patagônia Argentina com qualidade em cada etapa: plantio, colheita, seleção, conservação e comercialização.',
            specialty: 'Maçãs, Pêras, Nectarinas, Pêssegos',
            since: 'Desde 1971',
        },
        {
            name: 'Grand Valle',
            logo: '/logoGranValle.png',
            description: 'Pioneira no cultivo de frutas no Vale do São Francisco-BA. Mais de 1.000 hectares com certificações internacionais e práticas sustentáveis.',
            specialty: 'Mangas, Uvas de Mesa',
            since: 'Desde 1988',
        },
        {
            name: 'Frutivilla',
            logo: '/FrutivillaLogo.png',
            logoBg: 'bg-green-800',
            description: 'Frutas especiais com pomares próprios, packing house e logística integrada garantindo frescor do campo ao destino.',
            specialty: 'Maçãs, Frutas de Caroço',
            since: 'Frutas Especiais',
        },
    ];

    return (
        <section id="partners" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">
                        Nossos Parceiros
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                        Grandes Marcas ao Nosso Lado
                    </h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Trabalhamos com as maiores referências do mercado de frutas. Quem fornece para a Raminho sabe que está em boa companhia.
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    <AnimatePresence mode="popLayout">
                        {(showAll ? partners : partners.slice(0, 2)).map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/10 relative overflow-hidden"
                            >
                                {/* Decorative Gradient */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full" />

                                {/* Partner Logo */}
                                <div className={`w-full h-24 flex items-center justify-start mb-6 ${partner.logoBg ? partner.logoBg + ' rounded-xl px-4' : ''}`}>
                                    <img
                                        src={partner.logo}
                                        alt={`Logo ${partner.name}`}
                                        loading="lazy"
                                        width="160"
                                        height="80"
                                        className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-primary mb-2">{partner.name}</h3>
                                <span className="inline-block px-3 py-1 bg-secondary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                                    {partner.since}
                                </span>
                                <p className="text-gray-600 leading-relaxed mb-4">{partner.description}</p>
                                <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                                    <Handshake size={16} />
                                    {partner.specialty}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Toggle Button */}
                {partners.length > 2 && (
                    <div className="text-center mb-16">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300"
                            aria-expanded={showAll}
                        >
                            {showAll ? 'Mostrar Menos' : 'Ver Todas as Marcas'}
                            {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    </div>
                )}

                {/* CTA for New Suppliers */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-primary rounded-3xl p-10 md:p-16 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left max-w-xl">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                                Quer ser nosso fornecedor?
                            </h3>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Estamos sempre em busca de novos parceiros que compartilhem nosso compromisso com qualidade e frescor. Faça parte do nosso time de fornecedores.
                            </p>
                        </div>
                        <a
                            href="#contact"
                            className="px-10 py-4 bg-secondary text-primary font-bold uppercase tracking-wider rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 group shadow-lg shrink-0"
                        >
                            Fale Conosco
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
