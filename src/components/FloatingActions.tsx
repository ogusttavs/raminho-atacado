import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingActions() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [whatsappPulse, setWhatsappPulse] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 600);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Stop pulse after 5 seconds
        const timer = setTimeout(() => setWhatsappPulse(false), 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* Back to Top */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 10 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white text-primary rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow border border-gray-100"
                        aria-label="Voltar ao topo"
                    >
                        <ArrowUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* WhatsApp FAB */}
            <motion.a
                href="https://wa.me/5511940361803?text=Olá! Gostaria de saber mais sobre o atacado de frutas."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 200 }}
                className="relative w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                aria-label="Falar pelo WhatsApp"
            >
                <MessageCircle size={26} fill="white" strokeWidth={0} />

                {/* Pulse ring */}
                {whatsappPulse && (
                    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                )}
            </motion.a>
        </div>
    );
}
