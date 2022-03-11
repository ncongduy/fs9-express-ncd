import { Request, Response, NextFunction } from 'express';

class Error {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: string) {
    return new Error(400, msg);
  }

  static notFound(msg: string) {
    return new Error(404, msg);
  }
}

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(error.code).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: 'Something went wrong!' });
};

export { errorHandler };
