import axios from "axios";

const baseUrl = process.env.baseURL || 'http://localhost:3000/api/v1/'

// what should we give the data type as every api call may have different type
export const api = async (method: string, url: string, data? : any) => {
    try {
        switch (method) {
            case 'GET':
                return await axios.get(baseUrl  + url);

            case 'POST' :
                return await axios.post(baseUrl  + url, data);
            default:
                throw  new Error("Something went wrong in the api service !! Pass Valid Parameter")
        }
    } catch (error) {
        console.log("Error in the api call " + error)
    }
}