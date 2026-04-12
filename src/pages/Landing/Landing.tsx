import React, { useContext } from "react";

import CarouselContainer from "./CarouselContainer/CarouselContainer";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import ContinueLearning from "./ContinueLearning/ContinueLearning";

import "./Landing.scss";
import { AppContext, type ContextType } from "../../context/appContext";
import type { EnrollmentRecord } from "./ContinueLearning/ContinueLearning.types";
import useGetData from "../../hooks/useGetData/useGetData";

const Landing: React.FC = () => {
  const { authorized } = useContext(AppContext) as ContextType;

  const isAuthorized = authorized ? sessionStorage.getItem("token") : null;

  const { data: enrolledData } = useGetData<EnrollmentRecord[]>({
    endpoint: "enrollments",
    token: isAuthorized,
  });

  return (
    <main className="landing-main">
      <CarouselContainer />
      {enrolledData && (
        <ContinueLearning
          isAuthorized={!!isAuthorized}
          enrolledData={enrolledData}
        />
      )}
      <FeaturedCourses />
      {!enrolledData && <ContinueLearning isAuthorized={!!isAuthorized} />}
    </main>
  );
};

export default Landing;
