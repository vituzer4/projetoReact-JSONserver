import React, { useState, useEffect } from 'react';
import type { Filme } from '../services/api';
import './Form.css';

interface FormProps {
  filmeEdit?: Filme | null;
  onSubmit: (filme: Filme) => void;
  onCancel: () => void;
}

const Form: React.FC<FormProps> = ({ filmeEdit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Filme>({
    titulo: '',
    diretor: '',
    ano: new Date().getFullYear(),
    genero: '',
    nota: 0,
    poster: '',
  });

  useEffect(() => {
    if (filmeEdit) {
      setFormData(filmeEdit);
    }
  }, [filmeEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'ano' || name === 'nota' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Limpar formulário após envio
    if (!filmeEdit) {
      setFormData({
        titulo: '',
        diretor: '',
        ano: new Date().getFullYear(),
        genero: '',
        nota: 0,
        poster: '',
      });
    }
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{filmeEdit ? '✏️ Editar Filme' : '➕ Adicionar Novo Filme'}</h2>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="titulo">Título *</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
            placeholder="Ex: Interestelar"
          />
        </div>

        <div className="form-group">
          <label htmlFor="diretor">Diretor *</label>
          <input
            type="text"
            id="diretor"
            name="diretor"
            value={formData.diretor}
            onChange={handleChange}
            required
            placeholder="Ex: Christopher Nolan"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="ano">Ano *</label>
            <input
              type="number"
              id="ano"
              name="ano"
              value={formData.ano}
              onChange={handleChange}
              required
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>

          <div className="form-group">
            <label htmlFor="nota">Nota (0-10) *</label>
            <input
              type="number"
              id="nota"
              name="nota"
              value={formData.nota}
              onChange={handleChange}
              required
              min="0"
              max="10"
              step="0.1"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="genero">Gênero *</label>
          <input
            type="text"
            id="genero"
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            required
            placeholder="Ex: Ficção Científica"
          />
        </div>

        <div className="form-group">
          <label htmlFor="poster">URL do Poster *</label>
          <input
            type="url"
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            required
            placeholder="https://exemplo.com/poster.jpg"
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {filmeEdit ? '💾 Salvar Alterações' : '➕ Adicionar Filme'}
          </button>
          {filmeEdit && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              ❌ Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;