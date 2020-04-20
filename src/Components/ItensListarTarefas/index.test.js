import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tarefa from '../../Model/Tarefa';
import ItensListarTarefas from './index';

describe("Teste do componente que exibe um item da listagem de tarefas", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ItensListarTarefas
        tarefas={[]}
        recarregarTarefas={() => false}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  const nomeTarefa = 'Tarefa';
  const tarefa = new Tarefa(1, nomeTarefa, false);

  it("Deve exibir a tarefa", () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <ItensListarTarefas
            tarefas={[tarefaConcluida]}
            recarregarTarefas={() => false}
          />
        </tbody>
      </table>
    );
    expect(getByTestId('tarefa')).toHaveTextContent(nomeTarefa);
  });

  const tarefaConcluida = new Tarefa(2, nomeTarefa, true);

  it("Deve exibir uma tarefa concluída", () => {
    const { getByTestId } = render(
      <table>
        <tbody>
          <ItensListarTarefas
            tarefas={[tarefaConcluida]}
            recarregarTarefas={() => false}
          />
        </tbody>
      </table>
    );
    expect(getByTestId('nome-tarefa')).toHaveStyle('text-decoration: line-through');
  });
});