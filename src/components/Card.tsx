import React from 'react';
import type { Filme } from '../services/api';
import './Card.css';

interface CardProps {
  filme: Filme;
  onEdit: (filme: Filme) => void;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ filme, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="card-poster">
        <img src={filme.poster} alt={filme.titulo} />
        <div className="card-nota">⭐ {filme.nota}</div>
      </div>
      <div className="card-content">
        <h3 className="card-titulo">{filme.titulo}</h3>
        <p className="card-info">
          <strong>Diretor:</strong> {filme.diretor}
        </p>
        <p className="card-info">
          <strong>Ano:</strong> {filme.ano}
        </p>
        <p className="card-info">
          <strong>Gênero:</strong> {filme.genero}
        </p>
        <div className="card-actions">
          <button 
            className="btn btn-edit" 
            onClick={() => onEdit(filme)}
          >
             Editar
          </button>
          <button 
            className="btn btn-delete" 
            onClick={() => filme.id && onDelete(filme.id)}
          >
             Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;