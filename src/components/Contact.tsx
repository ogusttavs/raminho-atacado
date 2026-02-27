import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d{0,2})/, '($1');
    }

    setPhone(value);
  };
  return (
    <section id="contact" className="py-24 2xl:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="text-center mb-16 2xl:mb-24">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm 2xl:text-base mb-2 block">
            Fale Conosco
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-serif font-bold text-primary">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-32">
          {/* Units List - Matching Othil's Layout */}
          <div>
            <h3 className="text-2xl 2xl:text-4xl font-serif font-bold text-primary mb-8 2xl:mb-12 border-b border-gray-200 pb-4">
              Nossas Unidades
            </h3>

            <div className="space-y-12 2xl:space-y-16">
              <div className="group">
                <h4 className="text-xl 2xl:text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin className="text-secondary" />
                  Unidade Mercado Municipal
                </h4>
                <div className="pl-8 border-l-2 border-gray-100 group-hover:border-secondary transition-colors">
                  <p className="text-gray-600 mb-4">
                    Rua da Cantareira, 306 - Centro Histórico<br />
                    São Paulo - SP<br />
                    <span className="text-primary font-medium">Rua J Box 16 e Rua O 46</span>
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+5511940361803" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Phone size={16} className="text-secondary" />
                      <span className="font-medium">Comercial:</span> (11) 94036-1803
                    </a>
                    <a href="mailto:contato@raminhoimportadora.com.br" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors break-all">
                      <Mail size={16} className="text-secondary shrink-0" />
                      <span className="font-medium shrink-0">Email:</span> <span className="break-all">contato@raminhoimportadora.com.br</span>
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Mercado+Municipal+São+Paulo+Rua+da+Cantareira+306"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-bold text-primary uppercase tracking-wider border-b-2 border-secondary hover:text-secondary transition-colors"
                  >
                    | Veja no Mapa |
                  </a>
                </div>
              </div>

              <div className="group">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin className="text-secondary" />
                  Unidade Zona Cerealista
                </h4>
                <div className="pl-8 border-l-2 border-gray-100 group-hover:border-secondary transition-colors">
                  <p className="text-gray-600 mb-4">
                    Rua Comendador Assad Abdalla, 154 - Centro Histórico<br />
                    São Paulo - SP
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+5511940361803" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Phone size={16} className="text-secondary" />
                      <span className="font-medium">Comercial:</span> (11) 94036-1803
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rua+Comendador+Assad+Abdalla+154+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-bold text-primary uppercase tracking-wider border-b-2 border-secondary hover:text-secondary transition-colors"
                  >
                    | Veja no Mapa |
                  </a>
                </div>
              </div>

              <div className="group">
                <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <MapPin className="text-secondary" />
                  Unidade Centro Histórico
                </h4>
                <div className="pl-8 border-l-2 border-gray-100 group-hover:border-secondary transition-colors">
                  <p className="text-gray-600 mb-4">
                    R. Dr. Itapura de Miranda, 46 - Centro Histórico<br />
                    São Paulo - SP
                  </p>
                  <div className="space-y-2">
                    <a href="tel:+5511940361803" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                      <Phone size={16} className="text-secondary" />
                      <span className="font-medium">Comercial:</span> (11) 94036-1803
                    </a>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rua+Dr+Itapura+de+Miranda+46+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm font-bold text-primary uppercase tracking-wider border-b-2 border-secondary hover:text-secondary transition-colors"
                  >
                    | Veja no Mapa |
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Matching Othil's Layout */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">
              Formulário de Contato
            </h3>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
              }}
            >
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
                <input
                  id="nome"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                  <input
                    id="telefone"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                <select id="assunto" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white">
                  <option>Selecione uma opção</option>
                  <option>Vendas / Atacado</option>
                  <option>Financeiro</option>
                  <option>Parcerias</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
