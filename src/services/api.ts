const API_URL = 'http://localhost:3000/filmes';

export interface Filme {
  id?: number;
  titulo: string;
  diretor: string;
  ano: number;
  genero: string;
  nota: number;
  poster: string;
}

// GET - Listar todos os filmes
export const getFilmes = async (): Promise<Filme[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Erro ao buscar filmes');
  return response.json();
};

// GET - Buscar filme por ID
export const getFilmeById = async (id: number): Promise<Filme> => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) throw new Error('Erro ao buscar filme');
  return response.json();
};

// POST - Criar novo filme
export const createFilme = async (filme: Filme): Promise<Filme> => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filme),
  });
  if (!response.ok) throw new Error('Erro ao criar filme');
  return response.json();
};

// PUT - Atualizar filme
export const updateFilme = async (id: number, filme: Filme): Promise<Filme> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(filme),
  });
  if (!response.ok) throw new Error('Erro ao atualizar filme');
  return response.json();
};

// DELETE - Deletar filme
export const deleteFilme = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Erro ao deletar filme');
};