import type { NavItem } from "./consts.types";

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
