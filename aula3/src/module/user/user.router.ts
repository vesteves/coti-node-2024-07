import { Request, Response, Router } from 'express'
import type { UserStore } from './user';
import userService from './user.service'

export const router = Router()

router.get('/', (_: Request, res: Response) => {
  const result = userService.getAll();

  return res.status(200).json(result);
});

router.get('/:id', (req: Request, res: Response) => {
  const result = userService.getOne(parseInt(req.params.id, 10));

  return res.json(result);
});

router.post('/', (req: Request, res: Response) => {
  const {
    nome,
    idade
  }: UserStore = req.body

  const result = userService.store({
    nome,
    idade
  })

  return res.status(201).json({
    message: 'Usuário criado com sucesso',
  });
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10)
  const result = userService.update(id, req.body)

  return res.json({
    message: 'Atualizar dados de um usuário',
  });
});

router.delete('/:id', (req: Request, res: Response) => {
  const result = userService.destroy(parseInt(req.params.id, 10))

  return res.json({
    message: 'Usuário removido',
  });
});

export default router