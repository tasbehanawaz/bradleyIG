import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SecondaryPage from "@/components/SecondaryPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Bradley Innovations Group",
  description:
    "Contact Bradley Innovations Group regarding partnerships, investor information, media, speaking and general corporate inquiries.",
  path: "/contact",
});

export default function Contact() {
  return (
    <SecondaryPage
      title="Contact Bradley Innovations Group"
      path="/contact"
      intro={
        <p>
          For partnerships, media, investor information, speaking inquiries or
          general corporate matters, please use the appropriate contact below.
        </p>
      }
    >
      <section className="body-stack">
        <h2 className="text-2xl font-sans">Contact Information</h2>
        <dl className="space-y-4 text-text-body">
          <div>
            <dt className="font-semibold text-text-main">General inquiries</dt>
            <dd>
              <a href="mailto:info@bradleyinnovations.group">
                info@bradleyinnovations.group
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Partnerships</dt>
            <dd>
              <a href="mailto:partnerships@bradleyinnovations.group">
                partnerships@bradleyinnovations.group
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Investor information</dt>
            <dd>
              <a href="mailto:investors@bradleyinnovations.group">
                investors@bradleyinnovations.group
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">Media and speaking</dt>
            <dd>
              <a href="mailto:media@bradleyinnovations.group">
                media@bradleyinnovations.group
              </a>
            </dd>
          </div>
        </dl>
      </section>

      <section className="body-stack">
        <h2 className="text-2xl font-sans">Offices</h2>
        <dl className="space-y-4 text-text-body">
          <div>
            <dt className="font-semibold text-text-main">United States</dt>
            <dd>
              332 South Michigan Ave STE 121 2170
              <br />
              Chicago, IL 60604
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-text-main">GCC</dt>
            <dd>
              Damac Park Towers, Tower B Unit 301
              <br />
              DIFC, Dubai
              <br />
              P.O. Box 75505
              <br />
              United Arab Emirates
            </dd>
          </div>
        </dl>
      </section>

      <section className="w-full max-w-2xl">
        <div className="rounded-2xl border border-gold-dim/30 bg-white/[0.025] px-5 py-6 md:px-7 md:py-8">
          <div className="body-stack">
            <h2 className="text-2xl font-sans">Send an inquiry</h2>
            <p className="text-text-body text-sm">
              Please do not send confidential, proprietary or personal
              information through the website contact form.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </SecondaryPage>
  );
}
