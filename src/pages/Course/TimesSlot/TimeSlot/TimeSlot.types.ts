export interface TimeSlotProps {
  dayPeriod: string;
  timePeriod: string;
  handleTimeClick: (id: number) => void;
  timeId?: number;
  id: number;
}
