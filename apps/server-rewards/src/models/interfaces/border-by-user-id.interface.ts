import { Client } from '@libsql/client';

export interface BorderByUserIdReq {
  client: Client;
  userId: string;
  page: number;
  pageSize: number;
  filterByName?: string;
}
