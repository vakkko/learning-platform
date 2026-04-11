export interface WeekObjectTypes {
  id: number;
  label: string;
  days: string[];
}

export interface WeeklyScheduleProps {
  handleDaysClick: (id: number, dayValue: string) => void;
  daysId?: number;
}
