import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'test' && password === 'test123456' || (username === 'test' && password === 'test123')) {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white/80 backdrop-blur-xl border border-white/40 p-8 rounded-2xl shadow-2xl ring-1 ring-gray-100"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-brand-accent/5 rounded-full flex items-center justify-center border border-brand-accent/20">
             <ShieldCheck className="w-8 h-8 text-brand-accent" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2 text-brand-accent">Admin Kirish</h2>
        <p className="text-center text-gray-500 text-sm mb-6">Xavfsiz boshqaruv tizimi</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Login</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
              placeholder="test"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Parol</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
              placeholder="test123"
            />
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-red-500 text-sm text-center bg-red-50 py-2 rounded"
            >
              Login yoki parol noto'g'ri!
            </motion.div>
          )}

          <button 
            type="submit"
            className="w-full bg-brand-accent hover:bg-blue-800 text-white font-medium py-3 rounded-lg shadow-lg shadow-blue-900/10 transition-all active:scale-95 flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" />
            Kirish
          </button>
        </form>

        <button 
          onClick={onCancel}
          className="w-full mt-4 text-gray-500 hover:text-brand-accent text-sm py-2 transition-colors"
        >
          Orqaga qaytish
        </button>
      </motion.div>
    </div>
  );
};

export default AdminLogin;