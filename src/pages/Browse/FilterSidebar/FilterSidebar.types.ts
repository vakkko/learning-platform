import type { SelectedFilterType } from "../Browse.types";

export interface FilterSidebarProps {
  categoryValue?: SelectedFilterType;
  setCategoryValue: React.Dispatch<
    React.SetStateAction<SelectedFilterType | undefined>
  >;
  topicValue?: SelectedFilterType;
  setTopicValue: React.Dispatch<
    React.SetStateAction<SelectedFilterType | undefined>
  >;
}
