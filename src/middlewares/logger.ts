import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const logPath = path.join(__dirname, 'log.txt');

const logger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date();
  const log =
    JSON.stringify({ path: req.path, method: req.method, body: req.body, date: date }) + ', ';

  fs.appendFile(logPath, log, function (err) {
    if (err) throw err;
    console.log('Save the log information inside file log.txt');
    console.log(log);
  });

  next();
};

export { logger };
