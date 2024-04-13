import React from "react";
import { docLinks } from "../contants/docLinks";
import { LearnLinksWithLinks } from "./components/learnlinks";
import { LearnMenu } from "./components/menu";
export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docLinkContents = docLinks.map((docLink) => (
    <LearnLinksWithLinks prop={docLink} key={docLink.id} />
  ));
  return (
    <section className="relative">
      <LearnMenu />
      <div className="w-[85%] mx-auto py-20">
        <div className="grid md:grid-cols-[280px_minmax(auto,_1fr)] md:gap-6 transition">
          <aside className="hidden md:block h-[500px] overflow-scroll px-4 sticky top-[150px]">
            <nav className="flex flex-col gap-3">{docLinkContents}</nav>
          </aside>
          <main>{children}</main>
        </div>
      </div>
    </section>
  );
}
