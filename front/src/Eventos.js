import React from 'react';

const eventos = [
  { id: 1, titulo: 'Evento 1', descricao: 'Descrição do Evento 1', tempo: '9 mins' },
  { id: 2, titulo: 'Evento 2', descricao: 'Descrição do Evento 2', tempo: '15 mins' },
  { id: 3, titulo: 'Evento 3', descricao: 'Descrição do Evento 3', tempo: '30 mins' },
  { id: 4, titulo: 'Evento 4', descricao: 'Descrição do Evento 4', tempo: '45 mins' },
  { id: 5, titulo: 'Evento 5', descricao: 'Descrição do Evento 5', tempo: '1 hora' },
  { id: 6, titulo: 'Evento 6', descricao: 'Descrição do Evento 6', tempo: '2 horas' },
  { id: 7, titulo: 'Evento 7', descricao: 'Descrição do Evento 7', tempo: '3 horas' },
  { id: 8, titulo: 'Evento 8', descricao: 'Descrição do Evento 8', tempo: '4 horas' },
  { id: 9, titulo: 'Evento 9', descricao: 'Descrição do Evento 9', tempo: '5 horas' },
];

const Eventos = () => {
  return (
    <main>
      <section className="py-5 text-center container">
     
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {eventos.map((evento) => (
              <div className="col" key={evento.id}>
                <div className="card shadow-sm">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>{evento.titulo}</title>
                    <rect width="100%" height="100%" fill="#55595c" />
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                      {evento.titulo}
                    </text>
                  </svg>
                  <div className="card-body">
                    <p className="card-text">{evento.descricao}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">{evento.tempo}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Eventos;
