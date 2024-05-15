import API from ".."

export const getAllJourney = async() => {
    return await API.get("journeys") 
}