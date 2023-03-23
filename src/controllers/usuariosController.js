import usuariosModel from "../models/usuariosModel.js";
import UsuariosDAO from "../DAO/usuariosDAO.js";


const usuariosController = (app) => {
  app.get("/usuarios", async (req, res) => {
    const resposta = await UsuariosDAO.mostrarTodos();
    res.status(resposta.status).send(resposta.dados);
  });
  app.get("/usuarios/email/:email", async (req, res) => {
    const resposta = await UsuariosDAO.mostrarUm(req.params.email);
    res.status(resposta.status).send(resposta.dados);
  });
  app.post("/usuarios", async (req, res) => {
    const modelado = usuariosModel.modelar(req.body)
    const resposta = await UsuariosDAO.inserir(modelado)
    res.status(resposta.status).send(resposta.dados);
  });
   app.delete("/usuarios/email/:email", (req, res) => {
     const resposta = usuariosModel.deletar(req.params.email)
     res.status(resposta.status).send(resposta.dados)
  });
};

export default usuariosController;
