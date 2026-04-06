import type { ImageDetails } from "../TextInput.types";

export interface ImagePreviewProps {
  preview?: string;
  imageDetails?: ImageDetails;
  updateUserStep?: boolean;
  userName?: string;
  completeProfile?: boolean;
}
