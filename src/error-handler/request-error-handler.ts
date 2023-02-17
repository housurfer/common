
import { RequestValidationError } from './validation-error';
import {Request, Response, NextFunction} from 'express';
import 'express-async-errors';
import { body, validationResult, ValidationError } from 'express-validator';

export const requestErrorHandler = (req: Request) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      throw new RequestValidationError(errors.array());
    }
  }

