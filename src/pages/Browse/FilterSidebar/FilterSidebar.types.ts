export interface FilterSidebarProps {
  categoryId?: number;
  setCategoryId: React.Dispatch<React.SetStateAction<number | undefined>>;
  topicId?: number;
  setTopicId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
