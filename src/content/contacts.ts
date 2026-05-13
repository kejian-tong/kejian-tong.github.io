import { getSocialLink, siteConfig } from "@/config/site";

export interface ContactData {
  email: string;
  location: string;
  github: string;
  linkedIn: string;
  devUsername: string;
}

export const contactsData: ContactData = {
  email: siteConfig.email,
  location: siteConfig.location,
  github: getSocialLink("GitHub")?.href ?? "",
  linkedIn: getSocialLink("LinkedIn")?.href ?? "",
  devUsername: siteConfig.devUsername,
};
