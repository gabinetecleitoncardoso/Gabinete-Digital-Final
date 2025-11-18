import React, { useState } from 'react';
import Header from './components/Header.tsx';
import SuggestionForm from './components/SuggestionForm.tsx';
import NewsFeed from './components/NewsFeed.tsx';
import ShareGallery from './components/ShareGallery.tsx';
import ContactInfo from './components/ContactInfo.tsx';
import InstagramFeed from './components/InstagramFeed.tsx';
import { EditIcon, NewspaperIcon, ShareIcon, PhoneIcon, InstagramIcon } from './components/icons.tsx';
import { brandingData, instagramPostsData } from './data/content.ts';

type View = 'suggestion' | 'news' | 'share' | 'contact' | 'instagram';

const hasNewInstaPost = instagramPostsData.some(post => post.isNew);

const menuItems: { view: View; label: string; subtitle: string; icon: React.ReactElement; hasNotification?: boolean }[] = [
    { 
      view: 'suggestion', 
      label: 'Envie sua Sugestão', 
      subtitle: 'Contribua com ideias para projetos de lei e requerimentos.',
      icon: <EditIcon className="h-6 w-6" /> 
    },
    { 
      view: 'news', 
      label: 'Acompanhe nosso trabalho', 
      subtitle: 'Fique por dentro de tudo o que estamos fazendo.',
      icon: <NewspaperIcon className="h-6 w-6" /> 
    },
    {
      view: 'instagram',
      label: 'Mural do Insta',
      subtitle: 'Recados rápidos e novidades do dia a dia.',
      icon: <InstagramIcon className="h-6 w-6" />,
      hasNotification: hasNewInstaPost,
    },
    { 
      view: 'share', 
      label: 'Compartilhe o App', 
      subtitle: 'Ajude a ampliar nossa rede e fortalecer a participação popular.',
      icon: <ShareIcon className="h-6 w-6" /> 
    },
    { 
      view: 'contact', 
      label: 'Fale Conosco', 
      subtitle: 'Entre em contato com nossa equipe para dúvidas e informações.',
      icon: <PhoneIcon className="h-6 w-6" /> 
    }
];

const WelcomeCard = () => (
    <div className="w-full flex items-center p-4 text-left bg-white rounded-lg shadow-md mb-6">
        <img 
            src={brandingData.deputyPhotoUrl} 
            alt="Foto do Deputado" 
            className="h-16 w-16 rounded-full border-2 border-brand-gold object-cover"
        />
        <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-800">Bem-vindo(a)!</h2>
            <p className="text-gray-600">Um canal direto para você participar ativamente do nosso mandato.</p>
        </div>
    </div>
);

type NavButtonProps = {
    item: typeof menuItems[0];
    onClick: () => void;
};

const NavButton: React.FC<NavButtonProps> = ({ item, onClick }) => (
    <button
        onClick={onClick}
        className="w-full relative flex items-center p-4 text-left bg-white rounded-lg shadow-md hover:bg-gray-50 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
    >
        <div className="p-3 rounded-full bg-icon-circle-bg mr-4">
            <div className="text-icon-circle-fg">{item.icon}</div>
        </div>
        <div>
            <span className="text-lg font-semibold text-gray-800">{item.label}</span>
            <p className="text-sm text-gray-500">{item.subtitle}</p>
        </div>
        {item.hasNotification && (
            <span className="absolute top-3 right-3 text-xs font-bold bg-red-500 text-white px-2 py-1 rounded-full">
                NOVO!
            </span>
        )}
    </button>
);


const HomeScreen = ({ onSelectView }: { onSelectView: (view: View) => void }) => (
    <div className="w-full max-w-lg space-y-4">
        <WelcomeCard />
        {menuItems.map(item => (
            <NavButton
                key={item.view}
                item={item}
                onClick={() => onSelectView(item.view)}
            />
        ))}
    </div>
);


const App: React.FC = () => {
  const [activeView, setActiveView] = useState<View | null>(null);

  const renderContent = () => {
    switch (activeView) {
      case 'suggestion':
        return <SuggestionForm />;
      case 'news':
        return <NewsFeed />;
      case 'instagram':
        return <InstagramFeed />;
      case 'share':
        return <ShareGallery />;
      case 'contact':
        return <ContactInfo />;
      default:
        return <HomeScreen onSelectView={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-page-bg flex flex-col">
      <Header 
        showBackButton={activeView !== null}
        onGoBack={() => setActiveView(null)}
      />

      <main className={`container mx-auto p-4 sm:p-6 lg:p-8 flex-grow ${activeView === null ? 'flex flex-col items-center justify-center' : ''}`}>
        <div className="w-full max-w-2xl mx-auto">
          {renderContent()}
        </div>
      </main>

      <footer className="bg-brand-navy text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gabinete Digital - Dep. Cleiton Cardoso.
            <br className="sm:hidden"/> Todos os direitos reservados.
          </p>
          {activeView !== null && (
            <img 
              src={brandingData.mascotUrl} 
              alt="Mascote Gabinete Digital" 
              className="h-16 w-auto mt-4 sm:mt-0" 
            />
          )}
        </div>
      </footer>
    </div>
  );
};

export default App;