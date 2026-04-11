export interface StatusModalProps {
  image: string;
  title: string;
  description: string;
  btn1: string;
  btn2?: string;
  handleBtn1Click: () => void;
  handleBtn2Click?: () => void;
}
