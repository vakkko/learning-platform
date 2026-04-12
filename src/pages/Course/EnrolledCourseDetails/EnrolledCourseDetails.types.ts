import type { EnrollmentRecord } from "../../Landing/ContinueLearning/ContinueLearning.types";

export interface EnrolledCourseDetailsProps {
  enrolledData: EnrollmentRecord | undefined;
  setEnrolledData: React.Dispatch<
    React.SetStateAction<EnrollmentRecord | undefined>
  >;
}
