import prisma from "../db";

export const createBookCard = async (payload: {
    userId: number;
    journeyId: number;
  }) => {
    const existedjourney = await prisma.journeys.findFirst({
      where: {
        id: payload.journeyId,
      },
    });
    if (!existedjourney) throw new Error("Journey not found");
  
    const existedbookmark = await prisma.bookmarks.findFirst({
      where: {
          userId: payload.userId,
        journeyId: payload.journeyId,
      },
    });
  
    if (existedbookmark) {
       await prisma.bookmarks.deleteMany({
        where: {
          journeyId: payload.journeyId,
          userId: payload.userId,
        },
      });
return "delete success"
    }
  
     await prisma.bookmarks.create({ data:{...payload}  }); 
     return "create success"
  };