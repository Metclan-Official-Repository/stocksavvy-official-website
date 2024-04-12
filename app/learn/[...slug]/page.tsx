import { docLinks } from "@/app/contants/docLinks";
import { Metadata } from "next";
import { root } from "postcss";
import Markdown from "react-markdown";
type Params = {
  params: { slug: string[] };
};
export function generateMetadata({ params: { slug } }: Params): Metadata {
  const rootLink = `/learn/${slug[0]}`;
  if (slug.length > 1) {
    const segmentLink = `/learn/${slug[0]}/${slug[1]}`;
    const field = docLinks.find((docLink) => docLink.link === rootLink);
    const subField = field?.childrenLinks?.find(
      (doc) => doc.link === segmentLink
    );
    return {
      title: subField?.title,
    };
  } else {
    const field = docLinks.find((docLink) => docLink.link === rootLink);
    return {
      title: field?.title,
    };
  }
}
export default function Slug({ params: { slug } }: Params) {
  let title;
  let render;
  // For documents with children links
  const rootLink = `/learn/${slug[0]}`;
  if (slug.length > 1) {
    const segmentLink = `/learn/${slug[0]}/${slug[1]}`;
    const field = docLinks.find((docLink) => docLink.link === rootLink);
    const subField = field?.childrenLinks?.find(
      (doc) => doc.link === segmentLink
    );
    title = subField?.title;
    render = <Markdown>{subField?.content}</Markdown>;
  } else {
    const field = docLinks.find((docLink) => docLink.link === rootLink);
    title = field?.title;
    render = <Markdown>{field?.content}</Markdown>;
  }
  return (
    <div className="prose text-[14px] lg:text-[16px] text-gray-600 prose-h2:font-bold prose-h1:font-bold prose-h3:font-bold marker:text-[#525CEB]">
      {render}
    </div>
  );
}
