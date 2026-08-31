import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility | Bradley Innovations Group",
  description:
    "Accessibility information for the Bradley Innovations Group website.",
  path: "/accessibility",
});

export default function Accessibility() {
  return (
    <SecondaryPage
      title="Accessibility"
      path="/accessibility"
      intro={
        <p>
          Bradley Innovations Group aims to make this website usable by as many
          people as possible. A formal accessibility statement will be published
          here when approved.
        </p>
      }
    >
      <p className="text-text-body text-sm">
        If you encounter an accessibility barrier, please contact{" "}
        <a href="mailto:info@bradleyinnovations.group">
          info@bradleyinnovations.group
        </a>
        .
      </p>
    </SecondaryPage>
  );
}
