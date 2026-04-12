export interface StatusModalProps {
  image: string;
  title: string;
  description: string;
  btnConfirm?: string;
  btnCancel?: string;
  handleConfirmClick?: () => void;
  handleCancelClick?: () => void;
  showSuccess?: boolean;
}
