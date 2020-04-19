import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import { Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

export default function ListarTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [carregarTarefas, setCarregarTarefas] = useState(true);

  useEffect(() => {
    function obterTarefas() {
      const tarefasDB = localStorage["tarefas"];

      let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : [];

      console.log(listarTarefas);
      setTarefas(listarTarefas);
    }

    if (carregarTarefas) {
      obterTarefas();
      setCarregarTarefas(false);
    }

  }, [carregarTarefas]);

  return (
    <Container className="mt-5">
      <Table striped hover responsive id="tabela" test-id="tabela">
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>
              <A
                href="/cadastrar"
                className="btn btn-sm"
                data-testid="btn-link-nova-tarefa"
              >
                <FontAwesomeIcon icon={faPlus} />
                &nbsp; Nova tarefa
              </A>
            </th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
}
