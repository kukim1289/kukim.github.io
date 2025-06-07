import React from 'react';
import Link from 'next/link';
import { SocialLink } from '@/types';

const socialLinks: SocialLink[] = [
  {
    href: "mailto:kuk005@berkeley.edu",
    icon: "fa-envelope",
    label: "email"
  },
  {
    href: "https://github.com/kukim1289",
    icon: "fa-github",
    label: "Github"
  }
];

const Header: React.FC = () => {
  return (
    <header id="header">
      <Link href="/" className="logo">
        <strong>Homepage</strong>
      </Link>
      <ul className="icons">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className={`icon ${link.icon.startsWith('fa-brands') ? 'brands' : 'solid'} ${link.icon}`}
            >
              <span className="label">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header; 