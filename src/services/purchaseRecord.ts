import { connection } from '../connection/connection'
import { Request, Response } from 'express'

export async function purchaseRecord (req: Request, res: Response) {
    try{

        const {user_id, product_id, quantity} = req.body

        if(!user_id || !product_id || !quantity){
            res.statusCode = 422
            throw new Error("Preenchimento obrigatório.");
        }

        const getPrice: any = await connection("labecommerce_products").select("price").where("id", product_id)
        const total_price = getPrice[0].price * quantity

        const id = Math.random()
        const product = {id, user_id, product_id, quantity, total_price}

        let result = await connection ("labecommerce_purchases").insert(product)

        res.status(200).send("Compra realizada com sucesso.")

    }catch(error){
    res.status(400).send(error)
}
}