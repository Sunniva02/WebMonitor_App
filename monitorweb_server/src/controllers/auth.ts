import { Request,Response } from "express"
import { prismaClient } from "..";
import {hashSync} from 'bcrypt'

export const signup = async (req:Request,res:Response) => {
    const {username,password,name} = req.body;

    let user = await prismaClient.user.findFirst({where:{username}})
    if (user) {
        throw Error("User alreadt exits!")
    }
    user = await prismaClient.user.create({
        data:{
            name,
            username,
            password: hashSync(password,10)
        }
    })
}


