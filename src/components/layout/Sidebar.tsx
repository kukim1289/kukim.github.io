import React, { useState } from 'react';
import Link from 'next/link';
import { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { title: 'Homepage', href: '/' },
  {
    title: 'Portfolio',
    href: '#',
    subItems: [
      { title: 'Programming', href: '/pages/programming' },
      { title: 'Biology', href: '/pages/biology' }
    ]
  },
  {
    title: 'Employment History',
    href: '#',
    subItems: [
      { title: 'Promis Diagnostics', href: '/pages/promisdx' },
      { title: 'Zymo Research Corp', href: '/pages/zymo' }
    ]
  },
  { title: 'Teaching', href: '/pages/teaching' },
  { title: 'Blog', href: '/pages/blog' },
  { title: 'Resume', href: '/Ku_Kim Resume_2022.pdf' }
];

const Sidebar: React.FC = () => {
  const [openMenus, setOpenMenus] = useState<Set<string>>(new Set());

  const toggleMenu = (title: string) => {
    const newOpenMenus = new Set(openMenus);
    if (newOpenMenus.has(title)) {
      newOpenMenus.delete(title);
    } else {
      newOpenMenus.add(title);
    }
    setOpenMenus(newOpenMenus);
  };

  return (
    <div id="sidebar">
      <div className="inner">
        <nav id="menu">
          <header className="major">
            <h2>Menu</h2>
          </header>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <>
                    <span 
                      className={`opener ${openMenus.has(item.title) ? 'active' : ''}`}
                      onClick={() => toggleMenu(item.title)}
                    >
                      {item.title}
                    </span>
                    <ul className={openMenus.has(item.title) ? 'active' : ''}>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subItem.href}>{subItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <header className="major">
            <h2>Get in touch</h2>
          </header>
          <p>
            Please feel free to contact me if you have any questions about my projects,
            work experience, education, or want to just talk about anything that's on your mind.
          </p>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="mailto:kuk005@berkeley.edu">kuk005@berkeley.edu</a>
            </li>
            <li className="icon brands fa-github">
              <a href="https://github.com/kukim1289">Github</a>
            </li>
          </ul>
        </section>

        <footer id="footer">
          <p className="copyright">
            &copy; Ku Kim. All rights reserved. Images: Ku Kim. Design:{' '}
            <a href="https://html5up.net">HTML5 UP</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Sidebar; 