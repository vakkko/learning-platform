export interface TimesSlotProps {
  daysId?: number;
  handleTimeClick: (id: number) => void;
  timeId?: number;
}

export interface TimeSlotTypes {
  id: number;
  label: string;
  startTime: string;
  endTime: string;
}
