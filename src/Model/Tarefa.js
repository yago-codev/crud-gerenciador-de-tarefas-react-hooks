export default function Tarefa(id, tarefa, concluido) {
  this.id = id;
  this.tarefa = tarefa;
  this.concluido = concluido;

  return {
    id,
    tarefa,
    concluido,
  };
}
