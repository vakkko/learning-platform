import type { WeekObjectTypes } from "../WeeklySchedule.types";

export interface DaySlotProps {
  weekObj: WeekObjectTypes;
  handleDaysClick: (id: number, dayValue: string) => void;
  daysId?: number;
}
