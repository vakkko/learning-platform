import React from "react";

import Category from "../Category/Category";

import useGetData from "../../../../hooks/useGetData/useGetData";

import "./Topics.scss";

import type { TopicProps, TopicTypes } from "./Topics.types";

const Topics: React.FC<TopicProps> = ({
  handleChange,
  setTopicId,
  topicId,
}) => {
  const { data: topics } = useGetData<TopicTypes[]>({ endpoint: "topics" });

  return (
    <div>
      <h4>Topics</h4>
      <div
        onClick={(e) => handleChange(e, setTopicId)}
        className="topics-container"
      >
        {topics?.map((topic) => (
          <React.Fragment key={topic.id}>
            <Category
              id={topic.id}
              categoryId={topicId}
              category={topic.name}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Topics;
