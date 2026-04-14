import type { SelectedFilterType } from "../../Browse.types";

export interface CategoryTypes {
  id: number;
  name: string;
  icon: string;
}

export interface CategoriesProps {
  categoryValue?: SelectedFilterType;
  handleChange: (
    e: React.MouseEvent<HTMLDivElement>,
    setState: React.Dispatch<
      React.SetStateAction<SelectedFilterType | undefined>
    >,
  ) => void;
  setCategoryValue: React.Dispatch<
    React.SetStateAction<SelectedFilterType | undefined>
  >;
}
