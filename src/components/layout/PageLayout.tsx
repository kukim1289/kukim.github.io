'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div id="wrapper">
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
      <div id="sidebar">
        <div className="inner">
          {/* Menu */}
          <nav id="menu">
            <header className="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><Link href="/">Homepage</Link></li>
              <li>
                <span className="opener">Portfolio</span>
                <ul>
                  <li><Link href="/programming">Programming</Link></li>
                  <li><Link href="/biology">Biology</Link></li>
                </ul>
              </li>
              <li>
                <span className="opener">Employment History</span>
                <ul>
                  <li><Link href="/promisdx">Promis Diagnostics</Link></li>
                  <li><Link href="/zymo">Zymo Research Corp</Link></li>
                </ul>
              </li>
              <li><Link href="/teaching">Teaching</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><a href="/Ku_Kim Resume_2022.pdf">Resume</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
} 