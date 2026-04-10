import type { WeekObjectTypes } from "../WeeklySchedule.types";

export interface DaySlotProps {
  weekObj: WeekObjectTypes;
  handleDaysClick: (id: number) => void;
  daysId?: number;
}
