import { nanoid } from "nanoid";
export const testimonialsData: Testimonial[] = [
  {
    id: nanoid(),
    customerName: "Ella Damilola",
    occupation: "Grocery store owner",
    customerPhoto: "/images/feedback-1.jpg",
    testimonial:
      "Stocksavvy has been of immense help to me ever since I started using it. It helps me automate tasks, track both sold and unsold products, product expiration dates, manage my sales and customer payments. ",
    star: 5,
  },

  {
    id: nanoid(),
    customerName: "Solomon Nzatu",
    occupation: "Accountant",
    customerPhoto: "/images/feedback-2.jpg",
    testimonial:
      "As a chartered accountant, I've used a couple of inventory systems but Stocksavvy is indeed a game-changer. Now I can effortlessly reconcile accounts, track expenses, and generate accurate finanacial reports.",
    star: 5,
  },
  {
    id: nanoid(),
    customerName: "Tashiana Iiyonna",
    occupation: "Cosmetics store owner",
    customerPhoto: "/images/feedback-3.jpg",
    testimonial:
      "I have several cosmetics store in the state and Stocksavvy helps me track them. With Stocksavvy, I can easily tell how much products I have sold, calculate my profit, and also know how much my entire stocks are worth.",
    star: 5,
  },
];
