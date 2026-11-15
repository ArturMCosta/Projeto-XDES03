import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service.js";

const filmeService = new FilmeService();

export class FilmeController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;

        await filmeService.create(dados);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
        // TODO: pegar o id em req.params.id, chamar filmeService.delete e responder 200
    }

    async update(req:Request, res:Response)
    {
        // TODO: pegar o id em req.params.id e os dados em req.body,
        // chamar filmeService.update e responder 200
    }

    async findAll(req:Request, res:Response)
    {
        const filmes = await filmeService.findAll();
        res.status(200).json(filmes);
    }

    async findById(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const filme = await filmeService.findById(id);
        res.status(200).json(filme);
    }

}