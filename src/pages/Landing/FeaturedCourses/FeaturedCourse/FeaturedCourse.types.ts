import type { CourseTypes } from "../../../Course/Course.types";
import type { FeaturedCourseTypes } from "../FeaturedCourses.types";

export interface FeaturedCourseProps {
  courseData: FeaturedCourseTypes | CourseTypes;
  coursePage?: boolean;
  removeDescription?: boolean;
}
