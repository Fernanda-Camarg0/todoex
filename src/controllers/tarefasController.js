import tarefasModel from "../models/tarefasModel.js";

const tarefasController = (app) => {
  app.get("/tarefas", (req, res) => {
    const resposta = tarefasModel.mostarTodos()
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/tarefas", (req, res) => {
    const resposta = tarefasModel.armazenar(req.body)
    res.status(resposta.status).send(resposta.dados);
  });
};

export default tarefasController;
