export interface WeekObjectTypes {
  id: number;
  label: string;
  days: string[];
}

export interface WeeklyScheduleProps {
  handleDaysClick: (id: number) => void;
  daysId?: number;
}
