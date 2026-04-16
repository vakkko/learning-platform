import type { carouselItemsTypes, NavItem } from "./consts.types";

export const MAX_FILE_SIZE = 1024 * 1024;

export const EXPLORE: NavItem[] = [
  { linkTo: "Enrolled Courses" },
  { linkTo: "Browse Courses", to: "/browse/1" },
];

export const ACCOUNT: NavItem[] = [{ linkTo: "My Profile" }];

export const CONTACT: NavItem[] = [
  {
    linkTo: "contact@company.com",
    src: "images/contacts/message.png",
    href: "mailto:contact@company.com",
  },
  {
    linkTo: "(+995) 555 111 222",
    src: "images/contacts/phone.png",
    href: "tel:+995 555 111 222",
  },
  {
    linkTo: "Aghmashenebeli St.115",
    src: "images/contacts/location.png",
    href: "https://www.google.com/maps/search/?api=1&query=41.7126916,44.7952346",
  },
];

export const BASE_URL = "https://api.redclass.redberryinternship.ge/api";

export const carouselItems: carouselItemsTypes[] = [
  {
    imgSrc: "images/carousel/1.png",
    heading: "Start learning something new today",
    text: "Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.",
    buttonText: "Browse Courses",
    link: "/browse/1",
  },
  {
    imgSrc: "images/carousel/2.png",
    heading: "Pick up where you left off",
    text: "Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.",
    buttonText: "Start Learning",
  },
  {
    imgSrc: "images/carousel/3.png",
    heading: "Learn together, grow faster",
    text: "",
    buttonText: "Learn More",
    link: "/browse/1",
  },
];

export const SHOW_SORT_BY: {
  newest: string;
  price_asc: string;
  price_desc: string;
  popular: string;
  title_asc: string;
} = {
  newest: "Newest",
  price_asc: "Price: Low to High",
  price_desc: "Price:High to Low",
  popular: "Most Popular",
  title_asc: "Title:A-Z",
};
