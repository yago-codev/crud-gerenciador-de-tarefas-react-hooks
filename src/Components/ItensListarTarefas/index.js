import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default function ItensListarTarefas(props) {
  return <h1>Itens da Listagem de Tarefas</h1>
}

ItensListarTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired
};