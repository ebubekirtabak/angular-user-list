import { DataInterface } from './';

export interface PageInterface {
  data: DataInterface;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
