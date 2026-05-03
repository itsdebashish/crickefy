import {api} from "@/services/api";

export const loginService = async (email: string, password: string) => {
   const response = await api('POST', 'auth/login', {email,password})
    console.log(response)
}

export const registerService = async (username: string,email: string, password: string) => {
    const response = await api('POST', 'auth/register', {email,password})
    console.log(response)
}
