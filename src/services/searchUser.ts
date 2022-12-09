import { connection } from '../connection/connection'
import { Request, Response } from 'express'

export async function searchUser (req: Request, res: Response) {
    try{
        let result = await connection ("labecommerce_users").select()

        res.status(200).send(result)

    }catch(error){
    res.status(400).send(error)
}
}