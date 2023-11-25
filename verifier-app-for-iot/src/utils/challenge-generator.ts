import { nanoid } from 'nanoid';

export const generateChallenge = (size = 30) => {
  return nanoid(size);
};
