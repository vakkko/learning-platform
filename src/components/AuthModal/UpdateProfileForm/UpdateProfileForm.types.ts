export interface UserDataTypes {
  age?: number;
  avatar?: string;
  email: string;
  fullName?: string;
  id: number;
  mobileNumber?: string;
  profileComplete: boolean;
  username: string;
}

export interface UpdateProfileFormProps {
  handleModalClose: () => void;
}
