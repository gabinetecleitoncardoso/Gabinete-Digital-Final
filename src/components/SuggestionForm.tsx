
import React, { useState } from 'react';
import { SendIcon, LoaderIcon } from './icons.tsx';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzXOmrS1KzHWfhuXlNHeIoD1vIVQBuP7PXxFGkWlwJtA7QSMmEyzyc2QxtWUXrIMVksKA/exec';

const SuggestionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [social, setSocial] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !suggestion) {
      setError('Por favor, preencha todos os campos obrigatórios (*).');
      return;
    }

    setError('');
    setStatus('submitting');
    
    const formData = {
        name,
        phone,
        social,
        suggestion,
        submittedAt: new Date().toLocaleString('pt-BR'),
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
        redirect: 'follow',
      });

      if (response.ok) {
        setStatus('submitted');
        setName('');
        setPhone('');
        setSocial('');
        setSuggestion('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setError('Houve um problema ao enviar sua sugestão. Tente novamente mais tarde.');
        setStatus('idle');
      }
    } catch (err) {
      console.error('Erro de envio:', err);
      setError('Não foi possível enviar sua sugestão. Verifique sua conexão com a internet.');
      setStatus('idle');
    }
  };


  if (status === 'submitted') {
    return (
      <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-2">Obrigado!</h3>
        <p>Sua sugestão foi enviada com sucesso e será analisada pela nossa equipe.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-brand-dark mb-4">Envie sua Sugestão</h3>
      <p className="text-gray-600 mb-6">Sua participação é fundamental para construirmos um futuro melhor. Envie aqui seu requerimento ou sugestão de projeto de lei.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo *</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone (WhatsApp) *</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
        </div>
        <div>
          <label htmlFor="social" className="block text-sm font-medium text-gray-700">Link de Rede Social (Opcional)</label>
          <input type="url" id="social" value={social} onChange={(e) => setSocial(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue" />
        </div>
        <div>
          <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700">Sua Sugestão *</label>
          <textarea id="suggestion" value={suggestion} onChange={(e) => setSuggestion(e.target.value)} required rows={6} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"></textarea>
        </div>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button type="submit" disabled={status === 'submitting'} className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:bg-gray-400">
          {status === 'submitting' ? (
            <>
              <LoaderIcon className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
              Enviando...
            </>
          ) : (
            <>
              <SendIcon className="-ml-1 mr-2 h-5 w-5" />
              Enviar Sugestão
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SuggestionForm;