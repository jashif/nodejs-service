/* eslint-disable no-unused-vars */
import { Request, Response } from "express";
function errorHandler(err: object, _req: Request, res: Response, _next: any) {
  const errors: any = {};
  if (err) {
    Object.entries(err).forEach(([key, value]) => {
      errors[key] = value && value.toString();
      errors[key] = value;
    });
  }
  res.status(400).send({ error: errors });
}
export default errorHandler;
