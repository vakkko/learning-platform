export interface TimesSlotProps {
  daysId?: number;
  handleTimeClick: (id: number, timeValue: string) => void;
  timeId?: number;
}

export interface TimeSlotTypes {
  id: number;
  label: string;
  startTime: string;
  endTime: string;
}
