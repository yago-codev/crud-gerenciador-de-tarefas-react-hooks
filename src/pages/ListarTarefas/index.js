import React from "react";
import { A } from "hookrouter";

export default function ListarTarefas() {
  return (
    <A href="/cadastrar" className="btn btn-sm">
      Nova Tarefa
    </A>
  );
}
