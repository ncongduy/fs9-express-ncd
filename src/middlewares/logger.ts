import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';

const logPath = path.join(__dirname, 'log.txt');

const logger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date();
  const log = JSON.stringify({ body: req.body, path: req.path, date: date }) + ', ';

  fs.appendFile(logPath, log, function (err) {
    if (err) throw err;
    console.log('Store the information inside file log.txt');
    console.log(log);
  });

  next();
};

export { logger };
