import React from "react";
import ReactDOM from "react-dom";

import ListarTarefas from "./index";

describe("Teste do componente de listagem de tarefas", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ListarTarefas />, div);
    ReactDOM.unmountComponentAtNode(div); // removendo/desmontando o componente
  });
});
