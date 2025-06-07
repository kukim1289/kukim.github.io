'use client';

import Link from 'next/link';
import { ReactNode, useState, useEffect } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleSubmenu = (menuName: string) => {
    setOpenMenus(prev => 
      prev.includes(menuName) 
        ? prev.filter(name => name !== menuName)
        : [...prev, menuName]
    );
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger-menu');
      if (
        sidebar &&
        hamburger &&
        !sidebar.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div id="wrapper" className={sidebarOpen ? 'is-menu-visible' : ''}>
      {/* Hamburger Menu */}
      <div 
        id="hamburger-menu"
        className={`hamburger-menu${sidebarOpen ? ' is-active' : ''}`}
        onClick={toggleSidebar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Main */}
      <div id="main">
        <div className="inner">
          {/* Header */}
          <header id="header">
            <Link href="/" className="logo">
              <strong>{title}</strong>
            </Link>
            <ul className="icons">
              <li>
                <a href="mailto:kuk005@berkeley.edu" className="icon solid fa-envelope">
                  <span className="label">email</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/kukim1289" className="icon brands fa-github">
                  <span className="label">Github</span>
                </a>
              </li>
            </ul>
          </header>

          {/* Content */}
          {children}
        </div>
      </div>

      {/* Sidebar */}
      <div id="sidebar" className={sidebarOpen ? 'active' : ''}>
        <div className="inner">
          {/* Menu */}
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><Link href="/" onClick={() => setSidebarOpen(false)}>Homepage</Link></li>
              <li>
                <span 
                  className={`opener${openMenus.includes('portfolio') ? ' active' : ''}`}
                  onClick={() => toggleSubmenu('portfolio')}
                >
                  Portfolio
                </span>
                <ul className={openMenus.includes('portfolio') ? 'active' : ''}>
                  <li><Link href="/programming" onClick={() => setSidebarOpen(false)}>Programming</Link></li>
                  <li><Link href="/biology" onClick={() => setSidebarOpen(false)}>Biology</Link></li>
                </ul>
              </li>
              <li>
                <span 
                  className={`opener${openMenus.includes('employment') ? ' active' : ''}`}
                  onClick={() => toggleSubmenu('employment')}
                >
                  Employment History
                </span>
                <ul className={openMenus.includes('employment') ? 'active' : ''}>
                  <li><Link href="/promisdx" onClick={() => setSidebarOpen(false)}>Promis Diagnostics</Link></li>
                  <li><Link href="/zymo" onClick={() => setSidebarOpen(false)}>Zymo Research Corp</Link></li>
                </ul>
              </li>
              <li><Link href="/teaching" onClick={() => setSidebarOpen(false)}>Teaching</Link></li>
              <li><Link href="/blog" onClick={() => setSidebarOpen(false)}>Blog</Link></li>
              <li><a href="/Ku_Kim Resume_2022.pdf">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
} 