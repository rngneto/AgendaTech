import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Requisição GET para listar usuários
    axios.get('http://127.0.0.1:8000/api/listar_usuarios/')
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar usuários:', error);
      });
  }, []);

  return (
    <div className="user-list">
      <h2>Lista de Usuários</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} {usuario.sobrenome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
