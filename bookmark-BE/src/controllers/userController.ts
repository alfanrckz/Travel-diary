import { Request, Response } from "express";
import { loginService, registerService } from "../services/userService";

export const register = async (req:Request, res:Response) => {
    try {
       
       const result = await registerService(req.body)
        res.json({
            status:true,
            message: 'success',
            data:result
        })
    } catch (error) {
        const err = error as unknown as Error;
      console.log(err);

      res.status(500).json({
         status: false,
         message: err.message,
      });
    }
}

export const login = async (req:Request, res:Response) => {
    try {
        const { email, password } = req.body
        const token = await loginService(email,password)
        console.log(req.body)
        res.json({
            status:true,
            message: 'yr logged in',
            token,
        })
    } catch (error) {
        const err = error as unknown as Error;
      console.log(err);

      res.status(500).json({
         status: false,
         message: err.message,
      });
        
    }
}