import React, { useState, useEffect } from 'react';
import Header from '../componets/Header';
import Card from '../componets/Card';
import Form from '../componets/Form';
import type { Filme } from '../services/api';
import { getFilmes, createFilme, updateFilme, deleteFilme } from '../services/api';
import './Home.css';

const Home: React.FC = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filmeEdit, setFilmeEdit] = useState<Filme | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Carregar filmes ao montar o componente
  useEffect(() => {
    loadFilmes();
  }, []);

  const loadFilmes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getFilmes();
      setFilmes(data);
    } catch (err) {
      setError('Erro ao carregar filmes. Verifique se o JSON Server está rodando.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (filme: Filme) => {
    try {
      await createFilme(filme);
      loadFilmes();
      setShowForm(false);
      alert('Filme adicionado com sucesso!');
    } catch (err) {
      alert('Erro ao adicionar filme');
      console.error(err);
    }
  };

  const handleUpdate = async (filme: Filme) => {
    if (!filme.id) return;
    
    try {
      await updateFilme(filme.id, filme);
      loadFilmes();
      setFilmeEdit(null);
      setShowForm(false);
      alert('Filme atualizado com sucesso!');
    } catch (err) {
      alert('Erro ao atualizar filme');
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Tem certeza que deseja excluir este filme?')) return;
    
    try {
      await deleteFilme(id);
      loadFilmes();
      alert('Filme excluído com sucesso!');
    } catch (err) {
      alert('Erro ao excluir filme');
      console.error(err);
    }
  };

  const handleEdit = (filme: Filme) => {
    setFilmeEdit(filme);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancel = () => {
    setFilmeEdit(null);
    setShowForm(false);
  };

  const handleSubmit = (filme: Filme) => {
    if (filmeEdit) {
      handleUpdate(filme);
    } else {
      handleCreate(filme);
    }
  };

  return (
    <div className="home">
      <Header />
      
      <div className="container">
        <div className="add-button-container">
          <button 
            className="btn-add-filme" 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? '❌ Cancelar' : '➕ Adicionar Filme'}
          </button>
        </div>

        {showForm && (
          <Form 
            filmeEdit={filmeEdit}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Carregando filmes...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <p>❌ {error}</p>
            <button onClick={loadFilmes} className="btn-retry">
              🔄 Tentar Novamente
            </button>
          </div>
        )}

        {!loading && !error && filmes.length === 0 && (
          <div className="empty">
            <p>📽️ Nenhum filme cadastrado ainda.</p>
            <p>Clique em "Adicionar Filme" para começar!</p>
          </div>
        )}

        {!loading && !error && filmes.length > 0 && (
          <div className="filmes-grid">
            {filmes.map(filme => (
              <Card
                key={filme.id ?? filme.titulo}
                filme={filme}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;