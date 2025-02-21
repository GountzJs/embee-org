import { BorderIdEntity } from '../models/entities/border-by-id.type';

export const borderByIdAdapter = ({
  avatar,
  id,
  last_created_at,
  name,
  quantity,
  special,
  url,
  username,
}: BorderIdEntity) => ({
  id,
  url,
  special: Boolean(special),
  createdAt: last_created_at,
  username,
  avatar,
  quantity,
  name,
});
