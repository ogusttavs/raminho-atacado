import { motion, AnimatePresence } from 'motion/react';

interface MobileMenuProps {
    isOpen: boolean;
    navLinks: { name: string; href: string }[];
    activeSection: string;
    onClose: () => void;
}

export default function MobileMenu({ isOpen, navLinks, activeSection, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
                >
                    <div className="px-4 pt-4 pb-8 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={onClose}
                                    className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${isActive
                                        ? 'text-primary bg-primary/5 font-bold'
                                        : 'text-gray-900 hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <div className="mt-6 px-2">
                            <a
                                href="#contact"
                                onClick={onClose}
                                className="block w-full text-center px-5 py-4 rounded-xl bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
