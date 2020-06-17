import express, {Request, Response} from 'express'

const routes = express.Router()

routes.get('/hello/:nome', (req: Request, res: Response) => {
  return res.send(`Hello ${req.params.nome}`)
})

export default routes
