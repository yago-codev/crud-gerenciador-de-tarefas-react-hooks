import React from "react";
import ReactDOM from "react-dom";

import GerenciadorTarefas from "./GerenciadorTarefas";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <GerenciadorTarefas />
  </React.StrictMode>,
  document.getElementById("root")
);
