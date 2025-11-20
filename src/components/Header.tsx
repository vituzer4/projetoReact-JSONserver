import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🎬 Meus Filmes Favoritos</h1>
        <p>Catálogo pessoal de filmes que eu amo</p>
      </div>
    </header>
  );
};

export default Header;