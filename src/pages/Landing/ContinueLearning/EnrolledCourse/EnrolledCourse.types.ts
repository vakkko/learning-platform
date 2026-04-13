import type { ReactNode } from "react";

export interface EnrolledCourseTypes {
  image: string;
  lecturer: string;
  heading: string;
  avgRating: number;
  progressValue: number;
  courseId: number;
  children?: ReactNode;
}
