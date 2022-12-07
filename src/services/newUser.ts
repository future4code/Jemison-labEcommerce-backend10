import { connection } from '../connection/connection'
import { Request, Response } from 'express'

export async function newUser (req: Request, res: Response) {
    try{
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.statusCode = 422
            throw new Error("Preenchimento obrigatório");
        }

        const id = Math.random()
        const user = {id, name, email, password}

        let result = await connection ("labecommerce_users").insert(user)

        res.status(200).send("Usuario adicionado com sucesso!")

    }catch(error){
    res.status(400).send(error)
}
}