import type { Dispatch, SetStateAction } from "react";

export interface TopicTypes {
  id: number;
  categoryId: number;
  name: string;
}

export interface TopicProps {
  topicId: number | undefined;
  handleChange: (
    e: React.MouseEvent<HTMLDivElement>,
    setState: React.Dispatch<React.SetStateAction<number | undefined>>,
  ) => void;
  setTopicId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
