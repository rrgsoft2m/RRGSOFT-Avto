import React, { useState, useRef } from 'react';
import { motion, Reorder } from 'framer-motion';
import { LinkItem, SiteConfig, IconName } from '../types';
import { AVAILABLE_ICONS } from '../constants';
import IconDisplay from './IconDisplay';
import { Save, Plus, Trash2, LogOut, Upload, GripVertical, X } from 'lucide-react';

interface AdminDashboardProps {
  links: LinkItem[];
  config: SiteConfig;
  onUpdateLinks: (links: LinkItem[]) => void;
  onUpdateConfig: (config: SiteConfig) => void;
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ 
  links, config, onUpdateLinks, onUpdateConfig, onLogout 
}) => {
  const [localLinks, setLocalLinks] = useState<LinkItem[]>(links);
  const [localConfig, setLocalConfig] = useState<SiteConfig>(config);
  const [showIconPicker, setShowIconPicker] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSave = () => {
    onUpdateLinks(localLinks);
    onUpdateConfig(localConfig);
    alert("O'zgarishlar saqlandi!");
  };

  const handleAddLink = () => {
    const newLink: LinkItem = {
      id: Date.now().toString(),
      title: 'Yangi Link',
      url: 'https://',
      icon: 'ExternalLink',
      active: true
    };
    setLocalLinks([...localLinks, newLink]);
  };

  const handleDeleteLink = (id: string) => {
    if (window.confirm("Haqiqatan ham bu linkni o'chirmoqchimisiz?")) {
      setLocalLinks(localLinks.filter(l => l.id !== id));
    }
  };

  const handleUpdateLink = (id: string, field: keyof LinkItem, value: any) => {
    setLocalLinks(localLinks.map(l => l.id === id ? { ...l, [field]: value } : l));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLocalConfig({ ...localConfig, logoUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen pb-20 p-4 md:p-8 bg-gray-50">
      {/* Header */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-brand-accent">Boshqaruv Paneli</h1>
          <p className="text-gray-500">RRGSOFT LinkHub sozlamalari</p>
        </div>
        <div className="flex gap-4">
           <button 
            onClick={onLogout}
            className="px-4 py-2 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" /> Chiqish
          </button>
           <button 
            onClick={handleSave}
            className="px-6 py-2 bg-brand-accent hover:bg-blue-800 text-white rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Saqlash
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: General Settings */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-brand-accent">Umumiy Sozlamalar</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gray-500 mb-1">Kompaniya Nomi</label>
                <input 
                  value={localConfig.companyName}
                  onChange={(e) => setLocalConfig({...localConfig, companyName: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-brand-text focus:border-brand-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-500 mb-1">Shior (Tagline)</label>
                <input 
                  value={localConfig.tagline}
                  onChange={(e) => setLocalConfig({...localConfig, tagline: e.target.value})}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-brand-text focus:border-brand-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-500 mb-1">Tavsif</label>
                <textarea 
                  value={localConfig.subtitle}
                  onChange={(e) => setLocalConfig({...localConfig, subtitle: e.target.value})}
                  rows={4}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-3 py-2 text-brand-text focus:border-brand-accent focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-500 mb-1">Logo</label>
                <div className="flex items-center gap-4">
                  {localConfig.logoUrl && (
                    <img src={localConfig.logoUrl} alt="Logo" className="w-12 h-12 object-contain bg-gray-100 rounded p-1 border border-gray-200" />
                  )}
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded px-3 py-2 text-sm text-center transition-colors flex items-center justify-center gap-2 text-gray-700"
                  >
                    <Upload className="w-4 h-4" /> Yuklash
                  </button>
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleLogoUpload}
                  />
                </div>
                {localConfig.logoUrl && (
                  <button 
                    onClick={() => setLocalConfig({...localConfig, logoUrl: null})}
                    className="text-red-400 text-xs mt-2 hover:underline"
                  >
                    Logoni o'chirish
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Links Manager */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-brand-accent">Linklar</h3>
              <button 
                onClick={handleAddLink}
                className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white px-3 py-1.5 rounded-lg text-sm transition-all flex items-center gap-2"
              >
                <Plus className="w-4 h-4" /> Qo'shish
              </button>
            </div>

            <Reorder.Group axis="y" values={localLinks} onReorder={setLocalLinks} className="space-y-3">
              {localLinks.map((link) => (
                <Reorder.Item 
                  key={link.id} 
                  value={link}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex gap-4 items-start group relative hover:shadow-md transition-shadow"
                >
                  <div className="cursor-grab active:cursor-grabbing mt-2 text-gray-400 hover:text-brand-accent">
                    <GripVertical className="w-5 h-5" />
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input 
                      value={link.title}
                      onChange={(e) => handleUpdateLink(link.id, 'title', e.target.value)}
                      placeholder="Sarlavha"
                      className="bg-transparent border-b border-gray-300 focus:border-brand-accent outline-none text-brand-text py-1 px-2"
                    />
                    <input 
                      value={link.url}
                      onChange={(e) => handleUpdateLink(link.id, 'url', e.target.value)}
                      placeholder="URL manzili"
                      className="bg-transparent border-b border-gray-300 focus:border-brand-accent outline-none text-gray-500 text-sm py-1 px-2 font-mono"
                    />
                    
                    <div className="relative">
                      <button 
                        onClick={() => setShowIconPicker(showIconPicker === link.id ? null : link.id)}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-accent bg-white border border-gray-200 px-2 py-1 rounded w-full"
                      >
                        <IconDisplay name={link.icon} className="w-4 h-4" />
                        <span>{link.icon}</span>
                      </button>
                      
                      {/* Icon Picker Popover */}
                      {showIconPicker === link.id && (
                        <div className="absolute top-full left-0 z-50 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl p-2 grid grid-cols-4 gap-2">
                          {AVAILABLE_ICONS.map((icon) => (
                            <button
                              key={icon}
                              onClick={() => {
                                handleUpdateLink(link.id, 'icon', icon);
                                setShowIconPicker(null);
                              }}
                              className={`p-2 rounded hover:bg-brand-accent/10 flex justify-center ${link.icon === icon ? 'bg-brand-accent/10 text-brand-accent' : 'text-gray-400'}`}
                            >
                              <IconDisplay name={icon} className="w-5 h-5" />
                            </button>
                          ))}
                          <button onClick={() => setShowIconPicker(null)} className="col-span-4 text-xs text-center text-gray-500 pt-1">Yopish</button>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <label className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
                        <input 
                          type="checkbox" 
                          checked={link.active}
                          onChange={(e) => handleUpdateLink(link.id, 'active', e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 bg-transparent text-brand-accent focus:ring-brand-accent"
                        />
                        Aktiv
                      </label>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleDeleteLink(link.id)}
                    className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </Reorder.Item>
              ))}
            </Reorder.Group>

            {localLinks.length === 0 && (
              <div className="text-center py-10 text-gray-500">
                Linklar mavjud emas. Yangi qo'shing.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;