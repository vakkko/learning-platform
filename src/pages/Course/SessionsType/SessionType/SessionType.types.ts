export interface SessionTypeProps {
  sessionType: string;
  sessionPlace: string | null;
  price: number;
  availableSeats: number;
  handleSessionClick: (id: number, price: number) => void;
  sessionId?: number;
  id: number;
}
