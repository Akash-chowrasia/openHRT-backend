import assert from 'assert';
import createError from 'http-errors-lite';
import { StatusCodes } from 'http-status-codes';
import httpHandler from '../../commons/http-handler';

const doctorMiddleware = {};

doctorMiddleware.isPatient = httpHandler(async (req, res, next) => {
  const { user } = req;
  const { role } = user;
  assert(
    role === 'PATIENT',
    createError(StatusCodes.BAD_REQUEST, 'access denied')
  );
  next();
});

export default doctorMiddleware;
