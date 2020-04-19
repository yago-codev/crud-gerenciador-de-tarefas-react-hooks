import React from 'react';
import ReactDOM from 'react-dom';

import ItensListarTarefas from './index';

describe("Teste do componente de itens da listagem de tarefas", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement('div');
    ReactDOM.render(<ItensListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});