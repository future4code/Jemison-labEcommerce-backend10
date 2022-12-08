import { connection } from '../connection/connection'
import { Request, Response } from 'express'

export async function searchBuy (req: Request, res: Response) {
    try{

        const user_id = req.params.user_id

        if(!user_id){
            res.statusCode = 422
            throw new Error("Preenchimento obrigatório.");
        }

        const user: any = await connection("labecommerce_users").select().where("id", user_id)
        const purchase: any = await connection("labecommerce_purchases").select().where("user_id", user_id)

        const searchBuy = {user, purchase}
        
        res.status(200).send(searchBuy)

    }catch(error){
    res.status(400).send(error)
}
}