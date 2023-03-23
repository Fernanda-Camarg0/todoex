import bd from "../infra/bd.js";

const tarefasModel = {
  modelar: (obj) => {
    return {
      titulo: obj.titulo,
      descricao: obj.descricao,
      criacao: obj.criacao,
    };
  },
  armazenar: (obj) => {
    const modelado = tarefasModel.modelar(obj);
    bd.tarefas.push(modelado);
    return {
      dados: { msg: "Tarefa criada com sucesso" },
      status: 201,
    };
  },
  mostarTodos: () => {
    return {
      dados: { msg: bd.tarefas },
      status: 200
    };
  },
};

export default tarefasModel;
