export interface CategoryTypes {
  id: number;
  name: string;
  icon: string;
}

export interface CategoriesProps {
  categoryId?: number;
  handleChange: (
    e: React.MouseEvent<HTMLDivElement>,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => void;
  setCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
