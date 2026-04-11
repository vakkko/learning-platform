export interface TimeSlotProps {
  dayPeriod: string;
  timePeriod: string;
  handleTimeClick: (id: number, timeValue: string) => void;
  timeId?: number;
  id: number;
}
