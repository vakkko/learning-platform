import type { FeaturedCourseTypes } from "../Landing/FeaturedCourses/FeaturedCourses.types";

interface Review {
  userId: number;
  rating: number;
}

interface Category extends Pick<
  FeaturedCourseTypes["category"],
  "id" | "name"
> {
  icon: string;
}

export interface CourseTypes extends FeaturedCourseTypes {
  hours: number;
  isRated: boolean;
  enrollment: null | string;
  reviews: Review[];
  category: Category;
}
