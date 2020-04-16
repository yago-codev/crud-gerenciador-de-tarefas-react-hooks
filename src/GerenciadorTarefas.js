import React from "react";
import { useRoutes } from "hookrouter";

import ListarTarefas from "./pages/ListarTarefas";
import CadastrarTarefa from "./pages/CadastrarTarefa";
import AtualizarTarefa from "./pages/AtualizarTarefa";

import "./GerenciadorTarefas.css";

const routes = {
  "/": () => <ListarTarefas />,
  "/cadastrar": () => <CadastrarTarefa />,
  "/atualizar/:id": ({ id }) => <AtualizarTarefa id={id} />,
};

function GerenciadorTarefas() {
  return useRoutes(routes);
}

export default GerenciadorTarefas;
