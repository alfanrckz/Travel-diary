import { Request, Response } from "express";
import { IJourney } from "../types/app";
import { getJourneys, getJourneysByuserId, postJourney } from "../services/journeyService";

export const journeyPost = async (req: Request, res: Response) => {
    try {
        
        const body = req.body as IJourney;
        body.userId = res.locals.user;
    
        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        const image = files.image[0]?.filename;
    
        if (image) {
            body.image = image;
        
        }else{
            throw new Error("image is required");
        }
    

        const card = await postJourney(body);

        res.json({
            status:true,
            message:"Journey created successfully",
            data: card
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

export const journeyGet = async (req: Request, res: Response) => {
    
    try {
        const userId = res.locals.user;
        const journey = await getJourneysByuserId(+userId);
        res.json({
            status: true,
            message: "Journey fetched successfully",
            data: journey
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

export const journeyGetAll = async (req: Request, res: Response) => {

    try {
        const journey = await getJourneys();
        res.json({
            status:true,
            message:"Journey fetched successfully",
            data: journey
        })
    }catch(error){
        const err = error as unknown as Error;
        console.log(err);
  
        res.status(500).json({
           status: false,
           message: err.message,
        });
    }
}