import { verify } from 'jsonwebtoken';

export const decodeToken = (token: string) => {
  let decodedToken: any;
  decodedToken = verify(token, 'somesupersecretkey');
  return decodedToken;
}