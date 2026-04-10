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
  },
];

export const SESSION_TYPES = [
  { sessionType: "Online", place: "Google Meet", price: "Included" },
  { sessionType: "In-Person", place: "Chavchavadze St.34", price: "+ $30" },
  { sessionType: "Hybrid", place: "Chavchavadze St.34", price: "+ $50" },
];
