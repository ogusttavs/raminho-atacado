import { motion } from 'motion/react';
import { Store, ShoppingCart, Clock, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export default function Retail() {
    return (
        <section id="retail" className="py-24 2xl:py-32 bg-white overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
                {/* Header */}
                <div className="text-center mb-16 2xl:mb-24">
                    <span className="text-secondary font-bold tracking-widest uppercase text-sm 2xl:text-base mb-2 block">
                        Também no Varejo
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-serif font-bold text-primary">
                        Direto para Você
                    </h2>
                    <p className="text-lg 2xl:text-2xl text-gray-600 mt-4 2xl:mt-6 max-w-2xl 2xl:max-w-4xl mx-auto">
                        Além de importadores e distribuidores no atacado, levamos nossas frutas premium diretamente ao consumidor final.
                    </p>
                    <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Loja Física */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-6 sm:p-10 text-white overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/3" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 2xl:w-20 2xl:h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 2xl:mb-10 shadow-lg">
                                <Store size={28} className="text-primary 2xl:w-10 2xl:h-10" />
                            </div>

                            <h3 className="text-3xl 2xl:text-5xl font-serif font-bold mb-4 2xl:mb-6">
                                Nossa Banca no Mercadão
                            </h3>

                            <p className="text-white/80 text-lg 2xl:text-2xl leading-relaxed mb-8 2xl:mb-12">
                                Sinta a qualidade de perto. O mesmo padrão extra que roda no atacado, disponível para você levar para casa direto do nosso box no coração de São Paulo.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <MapPin size={20} className="text-secondary shrink-0" />
                                    <span className="text-white/90">
                                        Mercado Municipal — Rua da Cantareira, 306, <strong>Rua J Box 16</strong>
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock size={20} className="text-secondary shrink-0" />
                                    <span className="text-white/90">Seg a Sáb: 10h às 18h</span>
                                </div>
                            </div>

                            <a
                                href="https://maps.google.com/?q=Mercado+Municipal+São+Paulo+Rua+da+Cantareira+306"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-primary font-bold rounded-full hover:bg-white transition-colors group/btn"
                            >
                                Como Chegar
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* E-commerce */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-10 border border-gray-100 overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] -translate-y-1/3 translate-x-1/3" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 2xl:w-20 2xl:h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 2xl:mb-10 shadow-lg">
                                <ShoppingCart size={28} className="text-white 2xl:w-10 2xl:h-10" />
                            </div>

                            <h3 className="text-3xl 2xl:text-5xl font-serif font-bold text-primary mb-4 2xl:mb-6">
                                Nosso E-commerce
                            </h3>

                            <p className="text-gray-600 text-lg 2xl:text-2xl leading-relaxed mb-6 2xl:mb-10">
                                Receba frutas premium na sua porta. Entregamos em toda a Grande São Paulo com frescor garantido do Mercado Municipal até você.
                            </p>

                            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mb-8">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Atenção</span>
                                </div>
                                <p className="text-gray-500 text-sm">
                                    As compras no E-commerce são <strong>exclusivas para o varejo</strong> (consumidor final).
                                    Para cotações de caixaria (Atacado), <a href="https://wa.me/5511940361803" className="text-secondary font-semibold hover:underline border-none">chame no WhatsApp</a>.
                                </p>
                            </div>

                            <a
                                href="https://raminhoimportadora.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-colors group/btn"
                            >
                                Visitar E-commerce
                                <ExternalLink size={18} className="group-hover/btn:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
