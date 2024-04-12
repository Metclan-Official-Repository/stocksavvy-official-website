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
