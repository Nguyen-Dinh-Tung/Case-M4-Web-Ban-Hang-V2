import { Request, Response, NextFunction } from 'express';

const permission = (req: Request, res: Response, next: NextFunction) => {
  let user: any = req.user;
  let role = user.role;
  if (user.role == 'user') {
    res.render('401page')
  } else {
    next()
  }

}

export default permission;