import { Rank } from '../models/enums/rank.enum';

export const getRankByIndex = (index: number): Rank => {
  if (index === 0) return Rank.Challenger;
  if (index === 1) return Rank.Master;
  if (index === 2) return Rank.Diamond;
  if (index === 3) return Rank.Platinum;
  if (index === 4) return Rank.Gold;
  if (index === 5) return Rank.Silver;
  if (index === 6) return Rank.Bronze;
  return Rank.Unranked;
};
