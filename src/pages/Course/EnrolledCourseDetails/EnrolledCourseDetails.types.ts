import type { EnrollmentRecord } from "../../Landing/ContinueLearning/ContinueLearning.types";

export interface EnrolledCourseDetailsProps {
  enrolledData: EnrollmentRecord | undefined | null;
  setEnrolledData: React.Dispatch<
    React.SetStateAction<EnrollmentRecord | undefined>
  >;
  setShowEnrolledData: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  handleScheduleReset: () => void;
}
