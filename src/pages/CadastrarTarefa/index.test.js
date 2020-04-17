import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CadastrarTarefa from "./index";

describe("Teste do componente de cadastro de tarefa", () => {
  it("Deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CadastrarTarefa />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Deve cadastrar uma nova tarefa", () => {
    const { getByTestId } = render(<CadastrarTarefa />);

    fireEvent.change(getByTestId("input-tarefa"), {
      target: {
        value: "Nova tarefa",
      },
    });

    fireEvent.click(getByTestId("btn-cadastrar-tarefa"));

    expect(getByTestId("modal")).toHaveTextContent(
      "Tarefa criada com sucesso!"
    );
  });
});
