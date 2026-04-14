import type { SetStateAction } from "react";

export interface BrowseHeadingProps {
  sortBy: SortKeys;
  setSortBy: React.Dispatch<SetStateAction<SortKeys>>;
  handleClearFilters: () => void;
}

export type SortKeys =
  | "newest"
  | "price_asc"
  | "price_desc"
  | "popular"
  | "title_asc";
