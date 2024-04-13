type DocChildLink = {
  id: string;
  title: string;
  link: string;
  content?: string;
};
type DocLink = {
  id: string;
  title: string;
  link: string;
  hasChildrenLinks: boolean;
  childrenLinks?: DocChildLink[] | undefined;
  content?: string;
};
type Testimonial = {
  id: string;
  customerName: string;
  occupation: string;
  customerPhoto: string;
  testimonial: string;
  star: number;
};

type Faq = {
  id: string;
  question: string;
  answer: string;
};
