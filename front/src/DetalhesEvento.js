import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalhesEvento() {
  const { id } = useParams(); // Obtém o ID do evento a partir da URL
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    const carregarDetalhes = async () => {
      try {
        const resposta = await fetch(`http://localhost:8000/api/eventos/${id}`);
        if (resposta.ok) {
          const dados = await resposta.json();
          setEvento(dados);
        } else {
          console.error('Erro ao buscar evento:', resposta.statusText);
        }
      } catch (erro) {
        console.error('Erro ao carregar detalhes:', erro);
      }
    };

    carregarDetalhes();
  }, [id]);

  if (!evento) return <p>Carregando detalhes do evento...</p>;

  return (
    <div className="detalhes-container">
      <h1>{evento.nome}</h1>
      <p><strong>Data:</strong> {evento.data}</p>
      <p><strong>Horário:</strong> {evento.horario}</p>
      <p><strong>Local:</strong> {evento.local}</p>
      <p><strong>Tipo:</strong> {evento.tipo}</p>
      <p><strong>Descrição:</strong> {evento.descricao}</p>
      <p><strong>Palestrantes:</strong></p>
      <ul>
        {evento.palestrantes.split(',').map((palestrante, index) => (
          <li key={index}>{palestrante.trim()}</li>
        ))}
      </ul>
      {evento.link && (
        <a href={evento.link} target="_blank" rel="noopener noreferrer">
          Mais informações
        </a>
      )}
      {evento.imagem && (
        <img
          src={`http://localhost:8000${evento.imagem}`}
          alt={evento.nome}
          className="detalhes-imagem"
        />
      )}
    </div>
  );
}

export default DetalhesEvento;
