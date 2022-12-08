import { connection } from '../connection/connection'
import { Request, Response } from 'express'

export async function product (req: Request, res: Response) {
    try{

        const {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            res.statusCode = 422
            throw new Error("Preenchimento obrigatório para adicionar um produto novo.");
        }

        const id = Math.random()
        const product = {id, name, price, image_url}

        let result = await connection ("labecommerce_products").insert(product)

        res.status(200).send("Produto adicionado com sucesso!")

    }catch(error){
    res.status(400).send(error)
}
}