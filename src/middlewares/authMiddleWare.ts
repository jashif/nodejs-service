import { Request, Response, NextFunction } from "express";
function authMiddleWare(req: Request, res: Response, next: NextFunction) {
  if (req.headers["x-user"]) {
    next();
    return;
  }
  res.status(401).send({
    message: "unautorized",
  });
}
export default authMiddleWare;
