import { prisma } from './client.js'

const app = async () => {
    await  prisma.user.create({data : { email : "debashish@gmail.com"}})
}

app()