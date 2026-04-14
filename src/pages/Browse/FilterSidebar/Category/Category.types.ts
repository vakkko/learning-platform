import type { SelectedFilterType } from "../../Browse.types";

export interface CategoryInterface {
  category: string;
  icon?: string;
  id?: number;
  categoryId?: SelectedFilterType;
}
