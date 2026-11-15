import { FilmeController } from "../controller/filme.controller.js";
import { Router } from "express";

const router = Router();
const filmeController = new FilmeController();

router.post('/',filmeController.create);
router.get('/',filmeController.findAll);
router.get('/:id',filmeController.findById);
// TODO: rota DELETE /:id
// TODO: rota PUT /:id

export {router as filmeRoutes};