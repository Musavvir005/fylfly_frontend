import React, { useState } from 'react';
import './App.css';
import UploadPanel from './components/UploadPanel';
import RetrievePanel from './components/RetrievePanel';
import AboutPanel from './components/AboutPanel';

function App() {
  const [activePanel, setActivePanel] = useState('upload');

  const navItems = [
    { id: 'upload', label: 'Upload', icon: '⬆️' },
    { id: 'retrieve', label: 'Retrieve', icon: '⬇️' },
    { id: 'about', label: 'About Me', icon: '👤' },
  ];

  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">FYL</div>
          <span className="brand-name">FLY</span>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activePanel === item.id ? 'active' : ''}`}
              onClick={() => setActivePanel(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {activePanel === item.id && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="status-dot" />
          <span>ABDUL MUSAVVIR</span>
        </div>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <header className="topbar">
          <div className="topbar-title">
            {navItems.find((n) => n.id === activePanel)?.label}
          </div>
          <div className="topbar-meta">Secure · Fast · Private</div>
        </header>

        <div className="panel-area">
          {activePanel === 'upload' && <UploadPanel />}
          {activePanel === 'retrieve' && <RetrievePanel />}
          {activePanel === 'about' && <AboutPanel />}
        </div>
      </main>
    </div>
  );
}

export default App;
