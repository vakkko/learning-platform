import type { carouselItemsTypes } from "../../../../consts/consts.types";

export interface CarouselItemProps extends carouselItemsTypes {
  nextSlide: () => void;
  prevSlide: () => void;
  currentIndex: number;
}
