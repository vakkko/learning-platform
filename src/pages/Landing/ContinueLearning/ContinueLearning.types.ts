import type { FullCourse } from "../FeaturedCourses/FeaturedCourses.types";

export interface EnrolledCourseTypes {
  data: EnrollmentRecord;
}

export interface EnrollmentRecord {
  id: number;
  quantity: number;
  totalPrice: number;
  progress: number;
  completedAt: string;
  course: FullCourse;
  schedule: Schedule;
}

export interface Schedule {
  weeklySchedule: {
    id: number;
    label: string;
    days: string[];
  };
  timeSlot: {
    id: number;
    label: string;
    startTime: string;
    endTime: string;
  };
  sessionType: {
    id: number;
    courseScheduleId: number;
    name: string;
    priceModifier: number;
    availableSeats: number;
    location: string;
  };
  location: string;
}
