import React, { useEffect, useState } from 'react';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const eventosPorPagina = 9;

  useEffect(() => {
    const carregarEventos = async () => {
      try {
        const resposta = await fetch(`/api/eventos?page=${paginaAtual}&limit=${eventosPorPagina}`);
        const dados = await resposta.json();

        // Supondo que o backend retorna `eventos` e `totalPaginas`.
        setEventos(dados.eventos || []);
        setTotalPaginas(dados.totalPaginas || 1);
      } catch (erro) {
        console.error('Erro ao carregar eventos:', erro);
        setEventos([]);
      }
    };

    carregarEventos();
  }, [paginaAtual]);

  // Preenche os slots vazios com cards em branco, caso haja menos de 9 eventos na página.
  const eventosCompletos = [...eventos];
  while (eventosCompletos.length < eventosPorPagina) {
    eventosCompletos.push({
      id: `placeholder-${eventosCompletos.length + 1}`,
      nome: '',
      data: '',
      horario: '',
      tipo: '',
      local: '',
      link: '',
      vazio: true, // Marca este card como vazio.
    });
  }

  const mudarPagina = (novaPagina) => {
    if (novaPagina > 0 && novaPagina <= totalPaginas) {
      setPaginaAtual(novaPagina);
    }
  };

  return (
    <main>
      <section className="py-5 text-center container">
        <h1>Eventos</h1>
        <p className="lead text-muted">
          Página {paginaAtual} de {totalPaginas}
        </p>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {eventosCompletos.map((evento) => (
              <div className="col" key={evento.id}>
                <div className={`card shadow-sm ${evento.vazio ? 'bg-light' : ''}`}>
                  <div className="card-body">
                    <h5 className="card-title">{evento.nome || 'Nome do Evento'}</h5>
                    <p className="card-text">
                      Data: {evento.data || '---'}
                      <br />
                      Horário: {evento.horario || '---'}
                      <br />
                      Tipo: {evento.tipo || '---'}
                      <br />
                      Local: {evento.local || '---'}
                      <br />
                      {evento.link ? (
                        <a href={evento.link} className="btn btn-link">
                          Saiba mais
                        </a>
                      ) : (
                        'Link não disponível'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <button
              className="btn btn-primary"
              onClick={() => mudarPagina(paginaAtual - 1)}
              disabled={paginaAtual === 1}
            >
              Anterior
            </button>
            <button
              className="btn btn-primary"
              onClick={() => mudarPagina(paginaAtual + 1)}
              disabled={paginaAtual === totalPaginas}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Eventos;
