import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { A } from 'hookrouter';

import './style.css';

export default function ItensListarTarefas(props) {

  function marcarConcluida(tarefa) {
    return tarefa.concluido ? "line-through" : "none"
  }

  return (
    props.tarefas.map(tarefa => (
      <tr key={tarefa.id} data-testid="tarefa">
        <td data-testid="nome-tarefa" style={{ textDecoration: marcarConcluida(tarefa) }}>
          {tarefa.tarefa}
        </td>

        <td>
          <A
            href={`/atualizar/${tarefa.id}`}
            className={tarefa.concluida ? "hidden" : "btn btn-sm btn-warning"}
          >
            <FontAwesomeIcon icon={faEdit} />
          </A>
        </td>
      </tr>
    ))
  );
}

ItensListarTarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  recarregarTarefas: PropTypes.func.isRequired
};