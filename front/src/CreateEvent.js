import React, { useState } from 'react';
import './CreateEvent.css';

function CreateEvent() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    horario: '',
    tipo: 'presencial',
    local: '',
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imagem: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (let key in formData) {
      formDataToSubmit.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:8000/api/eventos', {
        method: 'POST',
        body: formDataToSubmit,
      });

      if (response.ok) {
        alert('Evento cadastrado com sucesso!');
        setFormData({
          nome: '',
          data: '',
          horario: '',
          tipo: 'presencial',
          local: '',
          imagem: null,
        });
      } else {
        alert('Erro ao cadastrar evento. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar evento:', error);
      alert('Erro ao cadastrar evento. Verifique sua conexão.');
    }
  };

  return (
    <div className="create-event-container">
      <h1 className="create-event-title">Criar Evento</h1>
      <form onSubmit={handleSubmit} className="create-event-form">
        <div>
          <label>Nome do Evento</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Horário</label>
          <input
            type="time"
            name="horario"
            value={formData.horario}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo</label>
          <select name="tipo" value={formData.tipo} onChange={handleChange} required>
            <option value="presencial">Presencial</option>
            <option value="online">Online</option>
            <option value="hibrido">Híbrido</option>
          </select>
        </div>
        <div>
          <label>Local</label>
          <input
            type="text"
            name="local"
            value={formData.local}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Imagem</label>
          <input
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Cadastrar Evento</button>
      </form>
    </div>
  );
}

export default CreateEvent;
