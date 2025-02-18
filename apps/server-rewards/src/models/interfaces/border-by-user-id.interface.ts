import { Client } from '@libsql/client';
import { BorderSort } from '../enums/border-sort';
import { BordersOrderBy } from '../enums/borders-order-by.enum';

export interface BorderByUserIdReq {
  client: Client;
  userId: string;
  page: number;
  pageSize: number;
  filterByName?: string;
  orderBy: BordersOrderBy;
  sort: BorderSort;
}
