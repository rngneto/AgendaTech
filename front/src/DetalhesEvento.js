import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalhesEvento() {
  const { id } = useParams();
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    const carregarEvento = async () => {
      try {
        const resposta = await fetch(`http://localhost:8000/api/eventos/${id}`);
        const dados = await resposta.json();
        setEvento(dados);
      } catch (erro) {
        console.error('Erro ao carregar detalhes do evento:', erro);
      }
    };

    carregarEvento();
  }, [id]);

  if (!evento) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{evento.nome}</h1>
      <p>Data: {evento.data}</p>
      <p>Horário: {evento.horario}</p>
      <p>Tipo: {evento.tipo}</p>
      <p>Local: {evento.local}</p>
      <p>Descrição: {evento.descricao}</p>
      <p>
        Link:{' '}
        <a href={evento.link} target="_blank" rel="noopener noreferrer">
          Mais Informações
        </a>
      </p>
      <p>Palestrantes:</p>
      <ul>
        {evento.palestrantes.map((palestrante, index) => (
          <li key={index}>{palestrante}</li>
        ))}
      </ul>
      {evento.imagem && (
        <img
          src={`http://localhost:8000${evento.imagem}`}
          alt={evento.nome}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </div>
  );
}

export default DetalhesEvento;
