/**
 * One-shot generator for governance document PDFs.
 * Run: node scripts/generate-governance-pdfs.mjs
 * Requires pdfkit (npm install pdfkit --no-save).
 */
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/assets/documents");

const GOLD = "#B8962E";
const BODY = "#1a1a1a";
const MUTED = "#555555";

fs.mkdirSync(outDir, { recursive: true });

function writeDoc(filename, title, sections) {
  const filePath = path.join(outDir, filename);
  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 72, bottom: 72, left: 72, right: 72 },
    info: {
      Title: title,
      Author: "Bradley Innovations Group",
      Subject: title,
    },
  });
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  doc
    .fillColor(GOLD)
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("BRADLEY INNOVATIONS GROUP", { characterSpacing: 1.5 });

  doc.moveDown(0.4);
  doc.fillColor(BODY).font("Helvetica-Bold").fontSize(20).text(title);

  doc.moveDown(0.35);
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(9)
    .text("Effective date: September 2, 2026")
    .text(
      "Draft for operational publication. Counsel may update this document without prior notice.",
    );

  doc.moveDown(0.6);
  doc
    .strokeColor("#D2AB36")
    .lineWidth(1)
    .moveTo(72, doc.y)
    .lineTo(540, doc.y)
    .stroke();
  doc.moveDown(1);

  for (const section of sections) {
    if (doc.y > 680) doc.addPage();
    doc.fillColor(BODY).font("Helvetica-Bold").fontSize(13).text(section.heading);
    doc.moveDown(0.35);
    for (const para of section.paragraphs) {
      if (doc.y > 700) doc.addPage();
      doc
        .fillColor(BODY)
        .font("Helvetica")
        .fontSize(10.5)
        .text(para, { align: "left", lineGap: 3 });
      doc.moveDown(0.55);
    }
    if (section.bullets?.length) {
      for (const bullet of section.bullets) {
        if (doc.y > 700) doc.addPage();
        doc
          .fillColor(BODY)
          .font("Helvetica")
          .fontSize(10.5)
          .text(`•  ${bullet}`, { indent: 8, lineGap: 2 });
        doc.moveDown(0.35);
      }
      doc.moveDown(0.35);
    }
    doc.moveDown(0.35);
  }

  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(9)
    .text(
      "Bradley Innovations Group  ·  Chicago, Illinois, United States  ·  Dubai, United Arab Emirates",
      72,
      720,
      { width: 468, align: "left" },
    )
    .text("info@bradleyinnovations.group", 72, 734);

  doc.end();
  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
}

const docs = [
  {
    filename: "privacy-policy.pdf",
    title: "Privacy Policy",
    sections: [
      {
        heading: "1. Who we are",
        paragraphs: [
          "Bradley Innovations Group (“BIG,” “we,” “us,” or “our”) operates the website associated with bradleyinnovations.group and related inquiry channels. This Privacy Policy describes how we handle information submitted through this site and related corporate contact channels.",
          "United States office: 332 South Michigan Ave STE 121 2170, Chicago, IL 60604. GCC office: Damac Park Towers, Tower B Unit 301, DIFC, Dubai, P.O. Box 75505, United Arab Emirates. Privacy contact: info@bradleyinnovations.group.",
        ],
      },
      {
        heading: "2. Information we collect",
        paragraphs: [
          "We may collect information you voluntarily provide when you use our contact forms or email us, including name, email address, organization, inquiry type, message content, and any other details you choose to include.",
          "We may also collect limited technical information typically associated with website use, such as browser type, device information, approximate location derived from IP address, pages viewed, and referral source, where analytics or hosting logs are enabled.",
        ],
      },
      {
        heading: "3. Purpose and legal basis",
        paragraphs: [
          "We use personal information to respond to inquiries; evaluate partnership, media, investor, or other corporate requests; operate and secure the website; maintain business records; and comply with applicable law.",
          "Where required, processing is based on your consent, our legitimate interests in operating an institutional website and responding to business inquiries, and/or legal obligations.",
        ],
      },
      {
        heading: "4. Retention",
        paragraphs: [
          "We retain inquiry and related records for as long as needed to respond to your request, manage follow-up, meet legal or audit requirements, and address disputes. Retention periods vary by inquiry type and legal requirements. When information is no longer needed, we delete or de-identify it where practicable.",
        ],
      },
      {
        heading: "5. Service providers and transfers",
        paragraphs: [
          "We may use trusted service providers for hosting, email delivery, analytics, and related operations. Those providers process information only as needed to perform services for us and are expected to protect it appropriately.",
          "Because BIG operates across the United States and the GCC, information may be processed or accessed in more than one country. Where cross-border transfers occur, we take steps consistent with applicable requirements.",
        ],
      },
      {
        heading: "6. Cookies and tracking",
        paragraphs: [
          "This site may use essential cookies required for security and basic functionality. If analytics or similar tools are enabled, they may use cookies or similar technologies to understand aggregate site usage. You can control cookies through your browser settings where available.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "Depending on applicable United States, UAE, and other relevant laws, you may have rights to request access, correction, deletion, restriction, or a copy of certain personal information, and to object to certain processing or withdraw consent where processing is consent-based.",
          "To exercise these rights, contact info@bradleyinnovations.group. We may need to verify your identity before responding. You may also have the right to lodge a complaint with a supervisory authority where applicable.",
        ],
      },
      {
        heading: "8. Security and breach contact",
        paragraphs: [
          "We use reasonable administrative, technical, and organizational measures designed to protect personal information. No method of transmission or storage is completely secure. If you believe there has been unauthorized access involving information submitted to us, contact info@bradleyinnovations.group promptly.",
        ],
      },
      {
        heading: "9. Updates",
        paragraphs: [
          "We may update this Privacy Policy from time to time. The effective date above will be revised when material changes are published. Continued use of the site after an update constitutes notice of the revised policy where permitted by law.",
        ],
      },
    ],
  },
  {
    filename: "website-terms-of-use.pdf",
    title: "Website Terms of Use",
    sections: [
      {
        heading: "1. Acceptance",
        paragraphs: [
          "By accessing or using the Bradley Innovations Group website, you agree to these Terms of Use. If you do not agree, do not use the site.",
        ],
      },
      {
        heading: "2. Informational purpose only",
        paragraphs: [
          "The information on this website is provided for general informational purposes only. It is not intended to be, and should not be construed as, investment, legal, accounting, tax, or other professional advice.",
          "Bradley Innovations Group is privately held. Nothing on this website constitutes an offer to sell, or a solicitation of an offer to buy, any security. Any securities offering may be made only through definitive offering documents and in compliance with applicable law.",
        ],
      },
      {
        heading: "3. Accuracy and changes",
        paragraphs: [
          "Descriptions of operating companies, strategic ventures, relationships, and ownership are subject to change and may be qualified by definitive legal agreements. References to third parties, former employers, customers, partners, advisors, or other organizations do not imply endorsement unless expressly stated.",
          "Forward-looking statements, if any, involve risks and uncertainties. Actual results may differ materially. Bradley Innovations Group undertakes no obligation to update forward-looking information except as required by law.",
        ],
      },
      {
        heading: "4. Portfolio-company separation",
        paragraphs: [
          "Bradley Innovations Group and its operating companies are separate legal entities. Each company is responsible for its own products, services, contracts, and obligations. Links to operating-company websites are provided for convenience and are subject to the terms and privacy practices of those websites.",
        ],
      },
      {
        heading: "5. Intellectual property",
        paragraphs: [
          "Site content, branding, and materials are owned by Bradley Innovations Group or its licensors and are protected by applicable intellectual-property laws. You may not copy, modify, distribute, or commercially exploit site materials without prior written permission, except for personal, non-commercial viewing.",
        ],
      },
      {
        heading: "6. Acceptable use",
        paragraphs: [
          "You agree not to misuse the site, attempt unauthorized access, interfere with security or availability, submit unlawful or misleading content, or use the site in any way that could harm BIG, its affiliates, or other users.",
        ],
      },
      {
        heading: "7. Disclaimer and limitation",
        paragraphs: [
          "The site is provided “as is” and “as available.” To the fullest extent permitted by law, BIG disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement, and limits liability for indirect, incidental, consequential, or punitive damages arising from use of the site.",
        ],
      },
      {
        heading: "8. Contact",
        paragraphs: [
          "Questions about these Terms of Use may be sent to info@bradleyinnovations.group.",
        ],
      },
    ],
  },
  {
    filename: "responsible-ai-principles.pdf",
    title: "Responsible AI Principles",
    sections: [
      {
        heading: "Purpose",
        paragraphs: [
          "Bradley Innovations Group is committed to disciplined capital allocation, responsible technology, transparent decision rights, and the separate legal accountability of each operating company. These Responsible AI Principles guide how we design, deploy, and oversee intelligent systems across the group.",
          "Our central thesis is Identic AI: intelligence bound to a person, with the authority and accountability to act. Action without identity creates an accountability gap. These principles exist to close that gap.",
        ],
      },
      {
        heading: "Principles",
        paragraphs: [
          "The following principles apply to AI systems we build, operate, or materially influence:",
        ],
        bullets: [
          "Identity and accountability — AI behavior should be linked to a clearly defined owner, role, or organizational authority.",
          "Human authority — Humans retain decision rights over material, high-risk, and exceptional cases.",
          "Traceability — Important recommendations and actions should be attributable and reviewable.",
          "Data stewardship — Information should be used only for authorized purposes and protected according to its sensitivity.",
          "Security by design — Access controls, identity boundaries, and system protections should be designed into the platform.",
          "Continuous review — AI systems should be monitored and improved as outcomes, risks, and regulations evolve.",
        ],
      },
      {
        heading: "Governance alignment",
        paragraphs: [
          "These principles sit alongside BIG’s broader governance commitments: long-term orientation, accountable ownership, disciplined capital allocation, operating-company clarity, conflict transparency, and responsible AI as a group standard.",
          "Each operating company remains responsible for implementing these principles in its products, contracts, and customer environments, with shared support from the parent where appropriate.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about these principles may be directed to info@bradleyinnovations.group.",
        ],
      },
    ],
  },
  {
    filename: "code-of-conduct.pdf",
    title: "Code of Conduct",
    sections: [
      {
        heading: "Purpose",
        paragraphs: [
          "This Code of Conduct sets group standards for integrity, accountability, and professional conduct at Bradley Innovations Group and within businesses we build, own, and operate. It is intended to support trust with colleagues, customers, partners, and the communities in which we work.",
        ],
      },
      {
        heading: "Our standards",
        paragraphs: ["Everyone working with or for BIG is expected to:"],
        bullets: [
          "Act with honesty and integrity in communications, records, and decisions.",
          "Treat colleagues, customers, partners, and counterparties with respect and professionalism.",
          "Protect confidential, proprietary, and personal information entrusted to us.",
          "Avoid and promptly disclose conflicts of interest; escalate material related-party matters through approved processes.",
          "Comply with applicable laws, regulations, and contractual obligations in the jurisdictions where we operate.",
          "Use company systems, data, and AI capabilities only for authorized purposes and within defined authority.",
          "Report concerns in good faith without fear of retaliation for honest reporting.",
        ],
      },
      {
        heading: "Accountability and AI",
        paragraphs: [
          "Where AI systems support decisions or actions, human owners remain accountable. Team members must not present automated outputs as human judgment when that would mislead a customer, partner, regulator, or colleague, and must escalate high-risk or exceptional cases to appropriate human authority.",
        ],
      },
      {
        heading: "Operating companies",
        paragraphs: [
          "Each operating company maintains its own legal identity and may adopt supplemental policies. This Code establishes a common baseline; more specific company policies apply where they are stricter or more detailed.",
        ],
      },
      {
        heading: "Reporting",
        paragraphs: [
          "Concerns regarding potential violations of this Code may be raised with a manager, leadership, or info@bradleyinnovations.group. BIG prohibits retaliation against anyone who raises a concern in good faith.",
        ],
      },
      {
        heading: "Updates",
        paragraphs: [
          "BIG may update this Code as the group grows. Material updates will be reflected in the published document and effective date.",
        ],
      },
    ],
  },
];

for (const d of docs) {
  const p = await writeDoc(d.filename, d.title, d.sections);
  console.log("Wrote", p);
}
