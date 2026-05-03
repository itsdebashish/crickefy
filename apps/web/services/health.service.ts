import {api} from "@/services/api";

export const healthService = async () => {
    console.log(await  api('GET','health'))
}