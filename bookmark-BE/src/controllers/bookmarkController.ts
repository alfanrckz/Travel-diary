import { Request, Response } from "express";
import { createBookCard } from "../services/bookmarkService";

export const createBookmark = async (req:Request, res:Response) => {
    try {
        
        const {journeyId} = req.body
        const userId = res.locals.user
    
        const bookmark = await createBookCard({
            
                userId,
                journeyId
            
        })
        res.json({
            status:true,
            message:"Bookmark save successfully",
            data:bookmark
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