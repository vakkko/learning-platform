export interface StatusModalProps {
  image: string;
  title: string;
  description: string;
  btnConfirm?: string;
  btnCancel?: string;
  handleConfirmClick?: () => void;
  handleCancelClick?: () => void;
  rating?: number | null;
  setRating?: React.Dispatch<React.SetStateAction<number | null>>;
}
