
import React, { useState } from 'react';
import { CopyIcon, DownloadIcon } from './icons.tsx';
import { appShareUrl } from '../data/content.ts';

const ShareGallery: React.FC = () => {
  const [copyButtonText, setCopyButtonText] = useState('Copiar Link');
  
  const shareableUrl = appShareUrl || window.location.href;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(shareableUrl)}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareableUrl);
      setCopyButtonText('Copiado!');
      setTimeout(() => setCopyButtonText('Copiar Link'), 2000);
    } catch (err) {
      console.error('Falha ao copiar o link: ', err);
      alert('Não foi possível copiar o link. Por favor, selecione e copie manualmente.');
    }
  };

  const handleDownload = async () => {
      try {
        const response = await fetch(qrCodeUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gabinete-digital-qr.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } catch (err) {
          console.error('Erro ao baixar QR Code:', err);
          alert('Não foi possível baixar o QR Code.');
      }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-brand-dark mb-4 text-center">Compartilhe o App</h3>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md max-w-md mx-auto text-center">
        <div className="flex justify-center mb-6">
           <img 
              src={qrCodeUrl} 
              alt="QR Code para o aplicativo" 
              className="w-48 h-48 sm:w-56 sm:h-56 border-4 border-gray-200 rounded-lg"
            />
        </div>
        
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Ajude a ampliar nossa rede!</h4>
        <p className="text-gray-600 mb-6">
          Aponte a câmera para o QR Code ou use os botões abaixo para compartilhar o link com seus contatos.
        </p>

        <div className="mb-6 p-3 bg-gray-100 rounded-md text-xs text-gray-600 text-left">
          <p className="font-semibold mb-1">Link para compartilhar:</p>
          <span className="text-brand-blue break-all">{shareableUrl}</span>
        </div>

        <div className="space-y-3">
          <button 
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
          >
            <CopyIcon className="mr-3 h-5 w-5" />
            {copyButtonText}
          </button>
           <button 
            onClick={handleDownload}
            className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-lg font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
          >
            <DownloadIcon className="mr-3 h-5 w-5" />
            Baixar QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareGallery;