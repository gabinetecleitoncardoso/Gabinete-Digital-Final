
import React from 'react';
import { instagramPostsData } from '../data/content.ts';
import { InstagramIcon } from './icons.tsx';

const InstagramFeed: React.FC = () => {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">Mural do Insta</h3>
        <p className="text-gray-600">Confira aqui os últimos recados e novidades rápidas do nosso Instagram.</p>
      </div>
      
      <div className="space-y-4">
        {instagramPostsData.map(post => (
          <div key={post.id} className="bg-white p-5 rounded-lg shadow-md relative overflow-hidden transition-transform hover:scale-105 duration-300">
            {post.isNew && (
                 <span className="absolute top-3 right-3 text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-full z-10">NOVO</span>
            )}
            <p className="text-gray-800 leading-relaxed mb-4">{post.text}</p>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                    <InstagramIcon className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                </div>
                <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-blue text-white font-bold py-2 px-4 rounded-md hover:bg-brand-dark transition-colors text-sm"
                >
                    <InstagramIcon className="h-4 w-4 mr-2" />
                    Ver no Instagram
                </a>
            </div>
          </div>
        ))}
        {instagramPostsData.length === 0 && (
          <div className="text-center p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-500">Nenhum recado no momento. Volte em breve!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstagramFeed;