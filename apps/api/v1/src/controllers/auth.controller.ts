import type {Request, Response} from 'express'

//  best to user zod here for current ignoring this
type AuthBody = {
    name? : string;
    email : string;
    password: string
}

export const login = async (req: Request<{}, {}, AuthBody>, res: Response) => {
    const {email, password} = req.body;
    res.json({'message': 'Trying to login with ' + email + ' ' + password})
}

export const register = async (req: Request<{}, {}, AuthBody>, res: Response) => {
    const {name, email, password} = req.body;
    res.json({'message': 'Trying to login with ' + email + ' ' + password})
}
