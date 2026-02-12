import React, { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';
import Background from './components/Background';
import PublicView from './components/PublicView';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import { storageService } from './services/storage';
import { LinkItem, SiteConfig } from './types';

type ViewState = 'landing' | 'login' | 'admin';

function App() {
  const [view, setView] = useState<ViewState>('landing');
  const [links, setLinks] = useState<LinkItem[]>([]);
  const [config, setConfig] = useState<SiteConfig>({
    companyName: '',
    tagline: '',
    subtitle: '',
    logoUrl: null,
    socials: {}
  });
  const [isLoading, setIsLoading] = useState(true);

  // Load initial data
  useEffect(() => {
    const loadedLinks = storageService.getLinks();
    const loadedConfig = storageService.getConfig();
    setLinks(loadedLinks);
    setConfig(loadedConfig);
    
    // Simulate initial loading for animation
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleUpdateLinks = (newLinks: LinkItem[]) => {
    setLinks(newLinks);
    storageService.saveLinks(newLinks);
  };

  const handleUpdateConfig = (newConfig: SiteConfig) => {
    setConfig(newConfig);
    storageService.saveConfig(newConfig);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-full bg-white flex items-center justify-center">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 border-t-2 border-brand-accent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-2 border-brand-gold/50 rounded-full animate-spin animation-delay-200"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-brand-text relative font-sans selection:bg-brand-accent/20 selection:text-brand-accent">
      <Background />

      {/* Admin Toggle Button (Visible on Landing) */}
      {view === 'landing' && (
        <button
          onClick={() => setView('login')}
          className="fixed bottom-6 right-6 z-50 p-4 bg-white hover:bg-brand-accent text-brand-accent hover:text-white rounded-full transition-all duration-300 shadow-lg border border-gray-100 hover:shadow-brand-accent/30 group"
          title="Admin Panel"
        >
          <Shield className="w-5 h-5 transition-transform group-hover:scale-110" />
        </button>
      )}

      {/* View Routing */}
      {view === 'landing' && (
        <PublicView links={links} config={config} />
      )}

      {view === 'login' && (
        <AdminLogin 
          onLogin={() => setView('admin')} 
          onCancel={() => setView('landing')} 
        />
      )}

      {view === 'admin' && (
        <AdminDashboard 
          links={links} 
          config={config} 
          onUpdateLinks={handleUpdateLinks}
          onUpdateConfig={handleUpdateConfig}
          onLogout={() => setView('landing')}
        />
      )}
    </div>
  );
}

export default App;