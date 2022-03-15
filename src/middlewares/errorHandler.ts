import { Request, Response, NextFunction } from 'express';

class ApiError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg: string) {
    return new ApiError(400, msg);
  }

  static notFound(msg: string) {
    return new ApiError(404, msg);
  }

  static internal(msg: string) {
    return new ApiError(500, msg);
  }
}

const errorHandler = (error: ApiError, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    res.status(error.code).json({ message: error.message });
    return;
  }

  res.status(500).json({ message: 'Something went wrong!' });
};

export { errorHandler, ApiError };
