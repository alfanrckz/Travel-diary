import prisma from "../db";
import { IJourney } from "../types/app";

export const postJourney = async (payload: IJourney) => {
    const result = await prisma.journeys.create({
        data: { ...payload}
    })
    return result
}

export const getJourneysByuserId = async (userId: number) => {
    const result = await prisma.journeys.findMany({
        where: { userId: userId },
        orderBy: { id: 'asc' }
    })
    return result
}

export const getJourneys = async () => {
    const result = await prisma.journeys.findMany()
    return result
}