import React from 'react';
import './About.css'; // Importar um arquivo CSS para melhorar a estilização

function About() {
  const developers = [
    { name: "Delphino Luciani", github: "https://github.com/dlpaf" },
    { name: "Victor Matheus", github: "https://github.com/Matheus21098" },
    { name: "Vival José", github: "https://github.com/VivalJose" },
    { name: "Raimundo Neto", github: "https://github.com/rngneto" },
  ];

  return (
    <div className="container about-container mt-5">
      <div className="text-center about-header">
        <h1>Sobre o Agenda Tech</h1>
        <p className="mt-4 lead">
          O Agenda Tech é uma plataforma dedicada a exibir eventos relacionados à tecnologia que acontecem em várias cidades.
          Nosso objetivo é conectar entusiastas e profissionais com oportunidades para aprender, se conectar e crescer em suas
          áreas de interesse.
        </p>
      </div>
      
      <div className="developers-section mt-5">
        <h2 className="text-center">Desenvolvedores</h2>
        <div className="row mt-4">
          {developers.map((dev, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card developer-card shadow-sm mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title">{dev.name}</h5>
                  <a href={dev.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
                    Ver GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
