export interface SelectedFilterType {
  id: number;
  value: string;
}

export interface PaginationMeta {
  currentPage: number;
  lastPage: number;
  perPage: number;
  total: number;
}
