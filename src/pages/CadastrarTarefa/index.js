import React, { useState } from "react";
import { navigate, A } from "hookrouter";
import { Button, Form, Modal } from "react-bootstrap";

import "./style.css";

export default function CadastrarTarefa() {
  return (
    <section className="mt-5">
      <Form
        id="form"
        className="col-md-6 pt-5 pl-5 pr-5 pb-3 m-auto text-center"
      >
        <h3>Cadastro</h3>
        <Form.Group className="mt-4">
          <Form.Control
            placeholder="Nome da nova tarefa..."
            className="text-center"
            minLength="5"
            maxLength="100"
            required
          />
          <Form.Control.Feedback type="invalid">
            A tarefa deve conter ao menos 5 caracteres
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Button type="submit" className="w-100">
            Submit
          </Button>
        </Form.Group>
        <Form.Group className="mt-4">
          <A href="/">Voltar</A>
        </Form.Group>
      </Form>
      <Modal id="modal" show={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Tarefa criada com sucesso!
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <A href="/" className="m-auto">
            <Button type="button">Lista de Tarefas</Button>
          </A>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
