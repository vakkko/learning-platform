import type { ImageDetails } from "../TextInput.types";

export interface ImagePreviewProps {
  preview: string | null;
  imageDetails?: ImageDetails;
  updateUserStep?: boolean;
  userName?: string;
}
