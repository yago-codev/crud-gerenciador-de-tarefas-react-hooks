import React from "react";
import ReactDOM from "react-dom";

import CadastrarTarefa from "./index";

it("Teste do componente de cadastro de tarefa", () => {
  describe("Deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CadastrarTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
