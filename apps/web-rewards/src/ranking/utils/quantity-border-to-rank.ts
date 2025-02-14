import { Rank } from '../models/enums/rank.enum';

export function quantityBorderToRank(quantity: number): Rank {
  if (quantity === 1) return Rank.Bronze;
  if (quantity === 2) return Rank.Silver;
  if (quantity === 3) return Rank.Gold;
  if (quantity === 4) return Rank.Platinium;
  if (quantity === 5) return Rank.Diamond;
  if (quantity === 6) return Rank.Master;
  return Rank.Challenger;
}
