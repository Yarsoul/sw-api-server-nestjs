import { Request } from 'express';
import User from '../user/entities/user';

interface RequestWithUser extends Request {
  user: User;
}
export default RequestWithUser;
