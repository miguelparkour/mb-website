// src/components/ActiveLink.tsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface ActiveLinkProps {
  to: string;
  children: React.ReactNode;
  exact?: boolean;
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ to, children, exact }) => {
  const location = useLocation();
  const isActive = exact ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <NavLink to={to} className={isActive ? 'active-link' : ''}>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
