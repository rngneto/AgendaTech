import React, { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImageHelper';
import './CreateEvent.css';

function CreateEvent() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    horario: '',
    tipo: 'presencial',
    local: '',
    link: '',
    descricao: '',
    palestrantes: ['', '', ''],
    imagem: null,
  });
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedFileName, setCroppedFileName] = useState(null); // Adiciona o estado aqui

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePalestranteChange = (index, value) => {
    const novosPalestrantes = [...formData.palestrantes];
    novosPalestrantes[index] = value;
    setFormData({ ...formData, palestrantes: novosPalestrantes });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropSave = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      setFormData({ ...formData, imagem: croppedImage });
      setCroppedFileName('Imagem recortada'); // Atualiza o nome do arquivo
      setImageSrc(null); // Fecha o modal de recorte
    } catch (error) {
      console.error('Erro ao recortar imagem:', error);
    }
  };

  const handleCropCancel = () => {
    setImageSrc(null); // Fecha o modal de recorte sem salvar
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    for (let key in formData) {
      if (key === 'palestrantes') {
        formData[key].forEach((palestrante, index) => {
          formDataToSubmit.append(`palestrantes[${index}]`, palestrante);
        });
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    }

    try {
      const response = await fetch('http://localhost:8000/api/cadastrar_evento/', {
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
          link: '',
          descricao: '',
          palestrantes: ['', '', ''],
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

      {imageSrc ? (
  <div className="cropper-container-vertical">
    {/* Área de recorte */}
    <div className="cropper-area">
      <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={4 / 3}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={handleCropComplete}
      />
    </div>

    {/* Botões de ação */}
    <div className="cropper-buttons">
      <button onClick={handleCropSave} className="btn btn-primary">
        Confirmar Recorte
      </button>
      <button onClick={handleCropCancel} className="btn btn-secondary">
        Cancelar
      </button>
    </div>
  </div>
) : (


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
            <label>Link</label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Palestrantes</label>
            {formData.palestrantes.map((palestrante, index) => (
              <input
                key={index}
                type="text"
                value={palestrante}
                onChange={(e) => handlePalestranteChange(index, e.target.value)}
                placeholder={`Palestrante ${index + 1}`}
              />
            ))}
          </div>
          <div>
            <label>Descrição</label>
            <textarea
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Imagem</label>
            <input
              type="file"
              name="imagem"
              accept="image/*"
              onChange={handleFileChange}
            />
            {croppedFileName && (
              <small className="text-muted">{croppedFileName}</small>
            )}
          </div>
          <button type="submit">Cadastrar Evento</button>
        </form>
      )}
    </div>
  );
}

export default CreateEvent;
