import { v4 } from 'uuid';

export const createId = () => {
  return v4();
};

export const createDateAt = () => {
  return new Date().toISOString();
};
