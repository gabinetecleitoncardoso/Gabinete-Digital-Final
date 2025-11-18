
import React from 'react';
import { contactData } from '../data/content.ts';
import { WhatsappIcon, InstagramIcon, FacebookIcon } from './icons.tsx';

const ContactInfo: React.FC = () => {
    const formatWhatsappLink = (phone: string) => `https://wa.me/55${phone.replace(/\D/g, '')}`;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">Contato do Gabinete - 1º Andar</h3>
      
      <div className="space-y-5 text-gray-700">
        <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Telefones</h4>
            {contactData.phones.map((phone, index) => (
                <div key={index} className="flex items-center space-x-3 mb-2">
                    <WhatsappIcon className="h-6 w-6 text-green-500" />
                    <a href={formatWhatsappLink(phone)} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">{phone}</a>
                </div>
            ))}
        </div>

        <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Email</h4>
            <p><a href={`mailto:${contactData.email}`} className="text-brand-blue hover:underline">{contactData.email}</a></p>
        </div>

        <div>
            <h4 className="font-bold text-lg text-gray-800 mb-2">Endereço</h4>
            <p className="whitespace-pre-line leading-relaxed">{contactData.address}</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t">
        <h4 className="font-bold text-lg text-gray-800 mb-4 text-center">Redes Sociais</h4>
        <div className="flex justify-center space-x-6">
          <a href={contactData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-dark transition-colors" aria-label="Instagram">
            <InstagramIcon className="h-8 w-8" />
          </a>
          <a href={contactData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-dark transition-colors" aria-label="Facebook">
            <FacebookIcon className="h-8 w-8" />
          </a>
          <a href={contactData.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:text-brand-dark transition-colors" aria-label="WhatsApp">
            <WhatsappIcon className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;