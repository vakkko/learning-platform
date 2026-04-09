import React from "react";

import Category from "../Category/Category";

import useGetData from "../../../../hooks/useGetData/useGetData";

import "./Topics.scss";

import type { TopicTypes } from "./Topics.types";

const Topics: React.FC = () => {
  const { data: topics } = useGetData<TopicTypes[]>({ endpoint: "topics" });

  return (
    <div>
      <h4>Topics</h4>
      <div className="topics-container">
        {topics?.map((topic) => (
          <React.Fragment key={topic.id}>
            <Category category={topic.name} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Topics;
