export interface CategoryTypes {
  id: number;
  name: string;
  icon: string;
}

export interface CategoriesProps {
  categoryId?: number;
  handleChange: (e: React.MouseEvent<HTMLDivElement>) => void;
}
