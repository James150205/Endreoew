'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ProjectItem, defaultProjects } from '@/data/defaultProjects';
import {
  getStoredProjects,
  addProject,
  updateProject,
  deleteProject,
  resetToDefaultProjects,
  saveProjects,
} from '@/utils/portfolioStorage';

// Credentials for Admin Access
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'nirwikara2026!';
const AUTH_KEY = 'nirwikara_admin_session_v1';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [notification, setNotification] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // Form Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Residential Architecture');
  const [projectGroup, setProjectGroup] = useState('');
  const [type, setType] = useState('');
  const [tag, setTag] = useState('');
  const [desc, setDesc] = useState('');
  const [specs, setSpecs] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageMode, setImageMode] = useState<'upload' | 'url'>('upload');
  const [imageUrl, setImageUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('All');

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check persisted auth session on mount
  useEffect(() => {
    const session = localStorage.getItem(AUTH_KEY);
    if (session === 'true') {
      setIsAuthenticated(true);
    }
    setProjects(getStoredProjects());
  }, []);

  const showToast = (text: string, type: 'success' | 'error' = 'success') => {
    setNotification({ text, type });
    setTimeout(() => setNotification(null), 4000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (
      usernameInput.trim().toLowerCase() === ADMIN_USER.toLowerCase() &&
      passwordInput === ADMIN_PASS
    ) {
      localStorage.setItem(AUTH_KEY, 'true');
      setIsAuthenticated(true);
      setProjects(getStoredProjects());
      showToast('Welcome back, Admin! You are logged in.');
    } else {
      setAuthError('Invalid username or password. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsAuthenticated(false);
    setUsernameInput('');
    setPasswordInput('');
  };

  // Image Upload File Handler (converts to optimized Base64)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Please select a valid image file (JPG, PNG, WebP).', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  };

  const openAddModal = () => {
    setEditingProject(null);
    setTitle('');
    setCategory('Residential Architecture');
    setProjectGroup('Pering, Gianyar, Bali');
    setType('Residential Architecture');
    setTag(new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));
    setDesc('');
    setSpecs('');
    setImagePreview('');
    setImageUrl('');
    setImageMode('upload');
    setIsModalOpen(true);
  };

  const openEditModal = (proj: ProjectItem) => {
    setEditingProject(proj);
    setTitle(proj.title);
    setCategory(proj.category);
    setProjectGroup(proj.projectGroup);
    setType(proj.type);
    setTag(proj.tag);
    setDesc(proj.desc);
    setSpecs(proj.specs);
    setImagePreview(proj.image);
    setImageUrl(proj.image.startsWith('http') || proj.image.startsWith('/assets') ? proj.image : '');
    setImageMode(proj.image.startsWith('data:') ? 'upload' : 'url');
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalImage = imageMode === 'upload' ? imagePreview : imageUrl.trim();

    if (!title.trim()) {
      showToast('Please enter a project title.', 'error');
      return;
    }
    if (!finalImage) {
      showToast('Please upload an image or provide an image URL.', 'error');
      return;
    }

    if (editingProject) {
      const updated = updateProject(editingProject.id, {
        title: title.trim(),
        category,
        projectGroup: projectGroup.trim() || 'Bali',
        type: type.trim() || category,
        tag: tag.trim() || '2026',
        desc: desc.trim() || 'Modern architectural exhibit by NIRWIKARA.',
        specs: specs.trim() || 'Premium Architectural Finish',
        image: finalImage,
      });
      setProjects(updated);
      showToast(`Exhibit "${title}" updated successfully!`);
    } else {
      const updated = addProject({
        title: title.trim(),
        category,
        projectGroup: projectGroup.trim() || 'Bali',
        type: type.trim() || category,
        tag: tag.trim() || '2026',
        desc: desc.trim() || 'Modern architectural exhibit by NIRWIKARA.',
        specs: specs.trim() || 'Premium Architectural Finish',
        image: finalImage,
      });
      setProjects(updated);
      showToast(`New exhibit "${title}" added and live on the website!`);
    }

    setIsModalOpen(false);
  };

  const handleDelete = (id: number, projectTitle: string) => {
    if (confirm(`Are you sure you want to delete "${projectTitle}" from the portfolio?`)) {
      const updated = deleteProject(id);
      setProjects(updated);
      showToast(`Exhibit "${projectTitle}" deleted.`);
    }
  };

  const handleResetDefaults = () => {
    if (
      confirm(
        'Warning: This will reset the portfolio back to the original 24 curated exhibits. Are you sure?'
      )
    ) {
      const updated = resetToDefaultProjects();
      setProjects(updated);
      showToast('Portfolio exhibits reset to original 24 exhibits.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(projects, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `nirwikara_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Portfolio JSON backup downloaded.');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0) {
          saveProjects(parsed);
          setProjects(parsed);
          showToast(`Imported ${parsed.length} exhibits successfully!`);
        } else {
          showToast('Invalid JSON format for portfolio items.', 'error');
        }
      } catch (err) {
        showToast('Failed to parse JSON file.', 'error');
      }
    };
    reader.readAsText(file);
  };

  // Filter & Search
  const filteredList = projects.filter((p) => {
    const matchesCategory =
      selectedFilterCategory === 'All' || p.category === selectedFilterCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.projectGroup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // =========================================================================
  // VIEW: LOGIN SCREEN (if not authenticated)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00AEEF]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-md w-full relative z-10 space-y-8">
          {/* Brand Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 p-2 shadow-xl mx-auto">
              <img
                src="/assets/images/logo-icon.png"
                alt="NIRWIKARA Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white">
              NIRWIKARA Admin Portal
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Sign in to manage and upload new architectural exhibits to the live website.
            </p>
          </div>

          {/* Login Card */}
          <div className="bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
            {authError && (
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-medium flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  required
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="admin"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-[#00AEEF] focus:ring-2 focus:ring-[#00AEEF]/20 text-white text-sm outline-none transition-all placeholder:text-slate-600"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#00AEEF] hover:bg-[#0096ce] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#00AEEF]/20 active:scale-95 cursor-pointer"
                >
                  Enter Admin Dashboard &rarr;
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
              <Link href="/" className="hover:text-[#00AEEF] transition-colors flex items-center gap-1">
                &larr; Back to Public Website
              </Link>
              <span className="font-mono text-[10px]">v1.0 • Secure</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW: AUTHENTICATED ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-[#00AEEF] selection:text-white">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-5 right-5 z-50 animate-bounce">
          <div
            className={`px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold tracking-wide flex items-center gap-2.5 border ${
              notification.type === 'error'
                ? 'bg-rose-500 text-white border-rose-400'
                : 'bg-emerald-500 text-white border-emerald-400'
            }`}
          >
            <span>{notification.text}</span>
          </div>
        </div>
      )}

      {/* Admin Navbar */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-800 p-1 border border-slate-700">
              <img src="/assets/images/logo-icon.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="text-sm font-bold font-display text-white tracking-tight">NIRWIKARA</span>
              <span className="text-[10px] font-mono text-[#00AEEF] block uppercase tracking-widest leading-none">
                Portfolio Manager
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors border border-slate-700"
            >
              <span>View Live Website</span>
              <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 text-xs font-semibold transition-colors border border-rose-500/20 cursor-pointer"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 flex-1 space-y-8">
        
        {/* Metric Overview Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
            <span className="text-[11px] font-mono uppercase text-slate-400">Total Exhibits</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">{projects.length}</p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
            <span className="text-[11px] font-mono uppercase text-slate-400">Residential</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00AEEF] font-display mt-1">
              {projects.filter((p) => p.category === 'Residential Architecture').length}
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
            <span className="text-[11px] font-mono uppercase text-slate-400">Interior &amp; Joinery</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display mt-1">
              {projects.filter((p) => p.category === 'Interior & Custom Joinery').length}
            </p>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5">
            <span className="text-[11px] font-mono uppercase text-slate-400">Public &amp; Hospitality</span>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display mt-1">
              {projects.filter((p) => p.category === 'Public Facility & Hospitality').length}
            </p>
          </div>
        </div>

        {/* Action Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={openAddModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0096ce] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              <span>Upload New Project</span>
            </button>

            <button
              type="button"
              onClick={handleExportJSON}
              className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors border border-slate-700 cursor-pointer"
              title="Download portfolio backup file"
            >
              Export JSON
            </button>

            <label className="px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors border border-slate-700 cursor-pointer inline-flex items-center">
              <span>Import JSON</span>
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>

            <button
              type="button"
              onClick={handleResetDefaults}
              className="px-3 py-2.5 rounded-xl bg-slate-800/60 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 text-xs transition-colors border border-slate-700/60 cursor-pointer"
              title="Reset to factory default exhibits"
            >
              Reset 24 Exhibits
            </button>
          </div>

          {/* Search & Category Filter */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search by title, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:border-[#00AEEF] outline-none w-48 sm:w-60"
            />
            <select
              value={selectedFilterCategory}
              onChange={(e) => setSelectedFilterCategory(e.target.value)}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
            >
              <option value="All">All Categories</option>
              <option value="Residential Architecture">Residential</option>
              <option value="Interior & Custom Joinery">Interior & Joinery</option>
              <option value="Public Facility & Hospitality">Hospitality</option>
            </select>
          </div>
        </div>

        {/* Portfolio Table / Card Grid */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-950/80 border-b border-slate-800 text-slate-400 uppercase font-mono text-[10px] tracking-wider">
                <tr>
                  <th className="px-4 py-3.5 w-16">Preview</th>
                  <th className="px-4 py-3.5">Title &amp; Group</th>
                  <th className="px-4 py-3.5">Category &amp; Type</th>
                  <th className="px-4 py-3.5">Date / Tag</th>
                  <th className="px-4 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredList.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-12 text-slate-500">
                      No architectural exhibits found matching your search.
                    </td>
                  </tr>
                ) : (
                  filteredList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="px-4 py-3">
                        <div className="w-14 h-11 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 flex-shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="px-4 py-3 max-w-xs">
                        <div className="font-bold text-white leading-snug line-clamp-1">{item.title}</div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">{item.projectGroup}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/20 mb-1">
                          {item.category}
                        </span>
                        <div className="text-[11px] text-slate-400">{item.type}</div>
                      </td>
                      <td className="px-4 py-3 font-mono text-slate-400">
                        {item.tag}
                        {item.isCustom && (
                          <span className="ml-2 px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Custom
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => openEditModal(item)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold mr-1.5 transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id, item.title)}
                          className="px-2.5 py-1 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* MODAL: ADD / EDIT PROJECT */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 my-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                  {editingProject ? 'Edit Architectural Exhibit' : 'Upload New Architectural Exhibit'}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Changes will be saved and rendered in the main portfolio immediately.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Image Input Selection */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                    Project Image *
                  </label>
                  <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[11px]">
                    <button
                      type="button"
                      onClick={() => setImageMode('upload')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        imageMode === 'upload' ? 'bg-[#00AEEF] text-white font-bold' : 'text-slate-400'
                      }`}
                    >
                      Upload File
                    </button>
                    <button
                      type="button"
                      onClick={() => setImageMode('url')}
                      className={`px-2.5 py-1 rounded-md transition-colors ${
                        imageMode === 'url' ? 'bg-[#00AEEF] text-white font-bold' : 'text-slate-400'
                      }`}
                    >
                      Image URL
                    </button>
                  </div>
                </div>

                {imageMode === 'upload' ? (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-700 hover:border-[#00AEEF] rounded-2xl p-4 sm:p-6 text-center bg-slate-950/60 cursor-pointer transition-colors group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    {imagePreview ? (
                      <div className="space-y-2">
                        <div className="relative aspect-[16/10] max-h-48 mx-auto rounded-xl overflow-hidden bg-black border border-slate-800">
                          <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-[11px] text-[#00AEEF] font-semibold">Click to choose a different photo</p>
                      </div>
                    ) : (
                      <div className="space-y-1.5 py-2">
                        <svg className="w-8 h-8 text-slate-500 mx-auto group-hover:text-[#00AEEF] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs font-semibold text-slate-300">Click or drag &amp; drop an image here</p>
                        <p className="text-[10px] text-slate-500 font-mono">Supports JPG, PNG, WebP</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <input
                      type="url"
                      placeholder="https://example.com/project-render.jpg or /assets/images/gallery/..."
                      value={imageUrl}
                      onChange={(e) => {
                        setImageUrl(e.target.value);
                        setImagePreview(e.target.value);
                      }}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                    />
                    {imageUrl && (
                      <div className="mt-2 aspect-[16/10] max-h-40 rounded-xl overflow-hidden bg-black border border-slate-800">
                        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Title & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Modern Tropical Residence — Front Elevation"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                  >
                    <option value="Residential Architecture">Residential Architecture</option>
                    <option value="Interior & Custom Joinery">Interior &amp; Custom Joinery</option>
                    <option value="Public Facility & Hospitality">Public Facility &amp; Hospitality</option>
                  </select>
                </div>
              </div>

              {/* Group & Type & Tag Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Group / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Private Residence Pering"
                    value={projectGroup}
                    onChange={(e) => setProjectGroup(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Architecture Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Courtyard Architecture"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                    Date / Badge Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. October 2026"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                  Architectural Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Architectural perspective highlighting the spatial massing, natural materials, and finishes..."
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none resize-none"
                />
              </div>

              {/* Specs */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                  Specifications / Materials
                </label>
                <input
                  type="text"
                  placeholder="e.g. Natural River Stone, Teak Timber, Charcoal Marble"
                  value={specs}
                  onChange={(e) => setSpecs(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0096ce] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
                >
                  {editingProject ? 'Save Changes' : 'Publish Exhibit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Admin Footer */}
      <footer className="border-t border-slate-800/80 px-4 sm:px-8 py-4 text-center text-xs text-slate-500 font-mono">
        NIRWIKARA Design And Build • Admin Management Portal
      </footer>
    </div>
  );
}
