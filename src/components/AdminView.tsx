import React, { useState } from 'react';
import {
  Lock,
  Unlock,
  Plus,
  Trash2,
  Edit3,
  Save,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Code2
} from 'lucide-react';
import {
  ModProject,
  StudioConfig,
  StudioCredential,
  DEFAULT_MODS,
  DEFAULT_STUDIO_CONFIG,
  DEFAULT_CREDENTIALS
} from '../data/modsData';

interface AdminViewProps {
  studioConfig: StudioConfig;
  onUpdateStudioConfig: (cfg: StudioConfig) => void;
  allMods: ModProject[];
  onUpdateAllMods: (mods: ModProject[]) => void;
  credentials: StudioCredential[];
  onUpdateCredentials: (creds: StudioCredential[]) => void;
}

export const AdminView: React.FC<AdminViewProps> = ({
  onUpdateStudioConfig,
  allMods,
  onUpdateAllMods,
  onUpdateCredentials
}) => {
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(
    () => localStorage.getItem('gamer_roundup_admin_auth') === 'true'
  );
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'mods' | 'export' | 'reset'>('mods');
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [copiedJson, setCopiedJson] = useState(false);

  // Mod editor form
  const [editingMod, setEditingMod] = useState<ModProject | null>(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('Galaxy In');
  const [status, setStatus] = useState('Available Now');
  const [description, setDescription] = useState('');
  const [creationsLink, setCreationsLink] = useState('');
  const [featuresText, setFeaturesText] = useState('');

  const showToast = (type: 'success' | 'error', text: string) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'Kalie0423!') {
      setIsUnlocked(true);
      localStorage.setItem('gamer_roundup_admin_auth', 'true');
      setAuthError('');
      showToast('success', 'Console authenticated. Full studio control unlocked.');
    } else {
      setAuthError('Invalid authorization passcode. Access denied.');
    }
  };

  const handleLock = () => {
    setIsUnlocked(false);
    localStorage.removeItem('gamer_roundup_admin_auth');
    setPasscode('');
  };

  const startEditMod = (mod: ModProject) => {
    setEditingMod(mod);
    setTitle(mod.title);
    setSubtitle(mod.subtitle);
    setCategory(mod.category);
    setStatus(mod.status);
    setDescription(mod.description);
    setCreationsLink(mod.creationsLink || '');
    setFeaturesText(mod.features.join('\n'));
  };

  const handleSaveMod = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      showToast('error', 'Title and Description are required.');
      return;
    }
    const feats = featuresText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    if (editingMod) {
      const updated: ModProject = {
        ...editingMod,
        title: title.trim(),
        subtitle: subtitle.trim(),
        category,
        status,
        description: description.trim(),
        creationsLink: creationsLink.trim() || '#',
        features: feats
      };
      onUpdateAllMods(allMods.map((m) => (m.id === editingMod.id ? updated : m)));
      setEditingMod(null);
      showToast('success', `Updated "${updated.title}" in studio catalog.`);
    } else {
      const newMod: ModProject = {
        id: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title: title.trim(),
        subtitle: subtitle.trim() || 'Starfield Systems Overhaul',
        category,
        status,
        description: description.trim(),
        creationsLink: creationsLink.trim() || '#',
        nexusLink: '#',
        features: feats.length > 0 ? feats : ['100% Conflict-Free Load Order', 'Native Papyrus Architecture'],
        visualTheme: 'from-zinc-950 via-neutral-900 to-zinc-900 border-zinc-700 hover:border-amber-400 text-zinc-100',
        iconName: 'Layers',
        accentColor: 'amber',
        bannerHeader: title.toUpperCase(),
        bannerSub: category.toUpperCase(),
        bannerTag: status.toUpperCase()
      };
      onUpdateAllMods([...allMods, newMod]);
      showToast('success', `Added "${newMod.title}" to studio catalog.`);
    }
    setTitle('');
    setSubtitle('');
    setDescription('');
    setCreationsLink('');
    setFeaturesText('');
  };

  const handleDeleteMod = (id: string) => {
    onUpdateAllMods(allMods.filter((m) => m.id !== id));
    showToast('success', 'Removed creation from catalog.');
  };

  const handleFactoryReset = () => {
    onUpdateAllMods(DEFAULT_MODS);
    onUpdateStudioConfig(DEFAULT_STUDIO_CONFIG);
    onUpdateCredentials(DEFAULT_CREDENTIALS);
    localStorage.removeItem('gamer_roundup_mods');
    localStorage.removeItem('gamer_roundup_config');
    localStorage.removeItem('gamer_roundup_creds');
    showToast('success', 'Restored default GAMERROUNDUP Studios catalog and copy.');
  };

  const handleCopyCatalogCode = () => {
    navigator.clipboard.writeText(JSON.stringify(allMods, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 3000);
  };

  if (!isUnlocked) {
    return (
      <div className="max-w-md mx-auto glass-panel-violet rounded-3xl p-8 border border-violet-500/30 space-y-6 text-center my-10">
        <div className="w-16 h-16 rounded-2xl bg-violet-500/15 border border-violet-400/40 flex items-center justify-center mx-auto text-amber-400">
          <Lock className="w-8 h-8" />
        </div>
        <div className="space-y-1.5">
          <h2 className="text-2xl font-black text-white">Studio Master Console</h2>
          <p className="text-xs text-zinc-400">
            Enter authorization passcode to manage Starfield creations, studio copy, and credentials.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4 text-left">
          <div>
            <label className="text-xs font-mono text-zinc-400 block mb-1.5">Admin Passcode</label>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="Enter studio passcode..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-400 font-mono"
            />
          </div>
          {authError && (
            <div className="text-xs font-mono text-red-400 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4" />
              <span>{authError}</span>
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-violet-600 text-white font-display font-bold text-xs uppercase tracking-wider cursor-pointer"
          >
            Unlock Admin Console
          </button>
        </form>
        <div className="text-[11px] font-mono text-zinc-500">
          Passcode Protected • Local Preview & Deployment Export
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel rounded-3xl p-6 flex flex-wrap items-center justify-between gap-4 border border-emerald-500/30">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300">
            <Unlock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-black text-white">GAMERROUNDUP Master Studio Console</h2>
            <p className="text-xs font-mono text-zinc-400">
              Manage Starfield Creations ({allMods.length}), Export for Live Deployment & Reset Cache
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('mods')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer ${
              activeTab === 'mods'
                ? 'bg-amber-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-300 border border-white/10'
            }`}
          >
            Starfield Mods ({allMods.length})
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer ${
              activeTab === 'export'
                ? 'bg-emerald-500 text-zinc-950'
                : 'bg-zinc-900 text-zinc-300 border border-white/10'
            }`}
          >
            Publish Live (Export JSON)
          </button>
          <button
            onClick={() => setActiveTab('reset')}
            className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold cursor-pointer ${
              activeTab === 'reset'
                ? 'bg-violet-600 text-white'
                : 'bg-zinc-900 text-zinc-300 border border-white/10'
            }`}
          >
            Backup & Reset
          </button>
          <button
            onClick={handleLock}
            className="px-3.5 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 border border-red-500/30 text-xs font-mono text-red-300 cursor-pointer"
          >
            Lock Console
          </button>
        </div>
      </div>

      {toast && (
        <div className="p-4 rounded-2xl bg-emerald-950/90 border border-emerald-500/40 text-xs font-mono text-emerald-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toast.text}</span>
        </div>
      )}

      {activeTab === 'mods' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Mod List */}
          <div className="lg:col-span-7 space-y-3">
            {allMods.map((mod) => (
              <div
                key={mod.id}
                className="glass-panel rounded-2xl p-4 border border-white/10 flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-white">{mod.title}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-amber-300 border border-white/10">
                      {mod.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1 mt-0.5">{mod.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => startEditMod(mod)}
                    className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-amber-300 cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteMod(mod.id)}
                    className="p-2 rounded-xl bg-red-950/50 hover:bg-red-900/60 border border-red-500/30 text-red-300 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Add / Edit Mod Form */}
          <form
            onSubmit={handleSaveMod}
            className="lg:col-span-5 glass-panel-violet rounded-3xl p-6 border border-violet-500/30 space-y-4"
          >
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-4 h-4 text-amber-400" />
              <span>{editingMod ? `Edit: ${editingMod.title}` : 'Add New Starfield Creation'}</span>
            </h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Creation Title..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono"
            />
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Subtitle..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono"
            />
            <div className="grid grid-cols-2 gap-2">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-zinc-950 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white font-mono"
              >
                <option value="Galaxy In">Galaxy In</option>
                <option value="Trade Wars">Trade Wars</option>
              </select>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="bg-zinc-950 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white font-mono"
              >
                <option value="Available Now">Available Now</option>
                <option value="Upcoming / Expanded">Upcoming / Expanded</option>
                <option value="Beta Access">Beta Access</option>
              </select>
            </div>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Full Mod Description..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-sans"
            />
            <input
              type="text"
              value={creationsLink}
              onChange={(e) => setCreationsLink(e.target.value)}
              placeholder="Bethesda Creations URL..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono"
            />
            <textarea
              rows={3}
              value={featuresText}
              onChange={(e) => setFeaturesText(e.target.value)}
              placeholder="Features (one per line)..."
              className="w-full bg-zinc-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white font-mono"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{editingMod ? 'UPDATE CREATION' : 'SAVE CREATION'}</span>
              </button>
              {editingMod && (
                <button
                  type="button"
                  onClick={() => setEditingMod(null)}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 text-xs font-mono text-zinc-300 cursor-pointer"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {activeTab === 'export' && (
        <div className="glass-panel rounded-3xl p-8 border border-emerald-500/30 space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <span>Make Admin Changes Live for Every Visitor</span>
              </h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
                Because static Vercel deployments don&apos;t use an external database by default, Admin edits are saved in your browser&apos;s LocalStorage for previewing. To bake your Admin edits into the permanent live build for all visitors, copy this JSON and paste it into <code className="text-amber-300">src/data/modsData.ts</code> (or paste it into the chat and ask the agent to bake &amp; deploy it).
              </p>
            </div>
            <button
              onClick={handleCopyCatalogCode}
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono font-bold text-xs flex items-center gap-2 shrink-0 cursor-pointer"
            >
              {copiedJson ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedJson ? 'COPIED CATALOG JSON!' : 'COPY LIVE CATALOG JSON'}</span>
            </button>
          </div>
          <pre className="p-4 rounded-2xl bg-zinc-950 border border-white/10 text-[11px] font-mono text-cyan-300 overflow-x-auto max-h-80">
            {JSON.stringify(allMods, null, 2)}
          </pre>
        </div>
      )}

      {activeTab === 'reset' && (
        <div className="glass-panel rounded-3xl p-8 border border-white/10 space-y-4">
          <h3 className="text-lg font-bold text-white">Factory Reset & Cache Sync</h3>
          <p className="text-xs text-zinc-400 max-w-xl">
            Restore all 8 flagship Starfield creations (including Galaxy Colonized and Galaxy Salvage Runner), Matt Pratt’s 2026 GAMERROUNDUP Studios biography, and verified registries to their canonical defaults.
          </p>
          <button
            onClick={handleFactoryReset}
            className="px-5 py-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-200 font-mono font-bold text-xs flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>RESTORE CANONICAL STUDIO DEFAULTS</span>
          </button>
        </div>
      )}
    </div>
  );
};
