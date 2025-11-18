
import React from 'react';
import { newsData } from '../data/content.ts';

const NewsFeed: React.FC = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-brand-dark mb-4">Acompanhe nosso trabalho</h3>
      {newsData.map(article => (
        <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h4 className="text-xl font-bold text-brand-dark mb-2">{article.title}</h4>
            <p className="text-gray-600 mb-4">{article.summary}</p>
            <a 
              href={article.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-brand-gold text-brand-dark font-bold py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
            >
              Leia a matéria
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;