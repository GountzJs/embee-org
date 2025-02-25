import { Rank } from '@/ranking/models/enums/rank.enum';

export type UserProfileEntity = {
  id: string;
  username: string;
  avatar: string;
  quantityBorders: number;
  rank: Rank;
};
