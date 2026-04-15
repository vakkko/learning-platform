import type { SetStateAction } from "react";

import type { PaginationMeta } from "../Browse.types";

export interface BrowseHeadingProps {
  sortBy: SortKeys;
  setSortBy: React.Dispatch<SetStateAction<SortKeys>>;
  handleClearFilters: () => void;
  paginationData: PaginationMeta | undefined;
}

export type SortKeys =
  | "newest"
  | "price_asc"
  | "price_desc"
  | "popular"
  | "title_asc";
