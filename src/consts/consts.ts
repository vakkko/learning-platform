import type { carouselItemsTypes, NavItem } from "./consts.types";

export const EXPLORE: NavItem[] = [
  { LinkTo: "Enrolled Courses" },
  { LinkTo: "Browse Courses" },
];

export const ACCOUNT: NavItem[] = [{ LinkTo: "My Profile" }];

export const CONTACT: NavItem[] = [
  { LinkTo: "contact@company.com", src: "images/contacts/message.png" },
  { LinkTo: "(+995) 555 111 222", src: "images/contacts/phone.png" },
  { LinkTo: "Aghmashenebeli St.115", src: "images/contacts/location.png" },
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
