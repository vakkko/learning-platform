import type { SelectedFilterType } from "../../Browse.types";

export interface TopicTypes {
  id: number;
  categoryId: number;
  name: string;
}

export interface TopicProps {
  topicId: number | undefined;
  handleChange: (
    e: React.MouseEvent<HTMLDivElement>,
    setState: React.Dispatch<
      React.SetStateAction<SelectedFilterType | undefined>
    >,
  ) => void;
  setTopicValue: React.Dispatch<
    React.SetStateAction<SelectedFilterType | undefined>
  >;
}
