export interface Story {
  id: string;
  title: string;
  imgUrl: string | null;
  paragraph: string;
}

export const navOptions = [
  { value: "/", label: "Home" },
  { value: "neighborhood", label: "Neighborhood" },
  { value: "about", label: "About us" },
  { value: "subscribe", label: "Subscribe" },
  { value: "contact", label: "Contact" },
];
