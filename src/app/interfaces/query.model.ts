export class QueryParams {
  q: string;
  per_page: number;
  page: number;
  direction: 'asc' | 'desc';
  sort: 'created' | 'updated' | 'comments';
}
