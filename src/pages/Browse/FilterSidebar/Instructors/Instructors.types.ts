import type { SelectedFilterType } from "../../Browse.types";

export interface InstructorsTypes {
  id: number;
  name: string;
  avatar: string;
}

export interface InstructorProps {
  handleChange: (
    e: React.MouseEvent<HTMLDivElement>,
    setId: React.Dispatch<React.SetStateAction<SelectedFilterType | undefined>>,
  ) => void;
  instuctorId?: number;
  setInstructorValue: React.Dispatch<
    React.SetStateAction<SelectedFilterType | undefined>
  >;
}
