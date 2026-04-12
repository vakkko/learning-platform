import type { EnrollmentRecord } from "../../Landing/ContinueLearning/ContinueLearning.types";

export interface CoursePriceProps {
  basePrice?: string;
  sessionPrice?: number;
  activeStyle: boolean;
  courseId?: number;
  courseTitle?: string;
  dayValue?: string;
  timeValue?: string;
  courseScheduleId?: number;
  setEnrolledData: React.Dispatch<
    React.SetStateAction<EnrollmentRecord | undefined>
  >;
  handleDoneCLick: () => void;
}
