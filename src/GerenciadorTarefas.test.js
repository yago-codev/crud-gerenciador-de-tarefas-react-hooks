import React from "react";
import ReactDOM from "react-dom";

import GerenciadorTarefas from "./GerenciadorTarefas";

describe("Teste do componente gerenciador de tarefas", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GerenciadorTarefas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
