import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Atacado', href: '#wholesale' },
    { name: 'Produtos', href: '#products' },
    { name: 'Varejo', href: '#retail' },
    { name: 'Parceiros', href: '#partners' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/Logo.png"
                alt="Raminho Importadora"
                className="h-16 rounded-lg bg-white/10 p-1"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em frutas premium e importadas. Tradição e qualidade desde o Mercado Municipal de São Paulo, levando o melhor para sua mesa.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/raminhoimportadora"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511940361803"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Links Rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-secondary transition-colors flex items-center gap-2 group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>
                  Mercado Municipal de São Paulo<br />
                  Rua da Cantareira, 306<br />
                  Rua J Box 16 e Rua O 46<br />
                  CEP: 01024-000
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <a href="tel:+5511940361803" className="hover:text-secondary transition-colors">
                  (11) 94036-1803
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:contato@raminhoimportadora.com.br" className="hover:text-secondary transition-colors">
                  contato@raminhoimportadora.com.br
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 text-secondary shrink-0" />
                <span>Seg a Sáb: 10h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">Receba novidades e ofertas exclusivas.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-secondary text-white placeholder-gray-500 transition-colors"
              />
              <button className="w-full px-4 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-yellow-400 transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Raminho Importadora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
