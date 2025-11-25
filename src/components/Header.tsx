import React from 'react';
import './Header.css';
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1> Meus Filmes Favoritos</h1>
        <p>Catálogo pessoal dos meus filmes favoritos</p>
      </div>
    </header>
  );
};

export default Header;