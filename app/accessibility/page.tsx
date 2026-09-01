import type { Metadata } from "next";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Accessibility | Bradley Innovations Group",
  description:
    "Accessibility information for the Bradley Innovations Group website, including WCAG alignment and how to report barriers.",
  path: "/accessibility",
});

export default function Accessibility() {
  return (
    <SecondaryPage
      title="Accessibility"
      path="/accessibility"
      lede="This website is intended to be usable by as many people as possible."
      intro={
        <p>
          Bradley Innovations Group aims to meet WCAG 2.2 Level AA for contrast,
          keyboard access, focus visibility, headings and form labels. Essential
          content on this site does not depend on cookies or third-party
          tracking.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">What we support</h2>
        <ul className="space-y-3 text-text-body list-none p-0 m-0">
          <li>
            Keyboard navigation with a visible focus indicator and a skip link
            to main content.
          </li>
          <li>
            Semantic headings, landmarks and labeled form fields for screen
            readers.
          </li>
          <li>
            Text that can be resized to at least 200% without loss of content.
          </li>
          <li>
            Meaningful alternative text for approved images such as the brand
            mark and leadership portraits.
          </li>
        </ul>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Known limitations</h2>
        <p className="text-text-body">
          Some linked operating-company sites and third-party destinations are
          outside our control and may not meet the same standard. PDF or other
          downloadable documents, when published, will be reviewed for
          accessibility as they are approved.
        </p>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Report a barrier</h2>
        <p className="text-text-body">
          If you encounter an accessibility barrier on this website, please
          contact{" "}
          <a href="mailto:info@bradleyinnovations.group">
            info@bradleyinnovations.group
          </a>
          . Include the page URL and a short description of the issue so we can
          improve it.
        </p>
      </section>
    </SecondaryPage>
  );
}
