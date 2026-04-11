export interface SessionsTypeProps {
  daysId?: number;
  timeId?: number;
  handleSessionClick: (id: number, price: number) => void;
  sessionId?: number;
}

export interface SessionTypes {
  id: number;
  courseScheduleId: number;
  name: string;
  priceModifier: number;
  availableSeats: number;
  location: string | null;
}
