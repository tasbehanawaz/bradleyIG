export type Leader = {
  name: string;
  role: string;
  bio: string;
  /** Relative path fragment for Person schema @id */
  slug: string;
};

export const leaders: Leader[] = [
  {
    name: "Joseph M. Bradley",
    slug: "joseph-m-bradley",
    role: "Founder & Chief Executive Officer",
    bio: "Creator of Identic AI and Enterprise Intelligence Infrastructure. Former CEO of TONOMUS at NEOM, former Vice President of IoT and AI at Cisco and former President of Uptake. Author of You to the Power of Two and Questioneering. Leads company creation, strategy, enterprise relationships and capital allocation.",
  },
  {
    name: "Beverly Rider",
    slug: "beverly-rider",
    role: "Co-Founder & Chief Operating Officer",
    bio: "Technology and commercial executive with leadership experience across NEOM and TONOMUS, Ericsson, Hitachi and GE. Board director and attorney. Leads the shared operating platform, governance and execution across the group.",
  },
  {
    name: "Hamza Aqeel",
    slug: "hamza-aqeel",
    role: "Chief Technology Officer",
    bio: "AI systems architect and technical leader for the Identic AI and Enterprise Intelligence Infrastructure platforms. Leads shared engineering, architecture, security, enterprise integration and product delivery.",
  },
  {
    name: "Zain Javaid",
    slug: "zain-javaid",
    role: "President, GCC",
    bio: "Fintech operator and founder with experience in digital financial services, lending, distribution and market development. Leads regional origination, institutional relationships, partnerships and GCC market entry across the group.",
  },
  {
    name: "Alex Cheung",
    slug: "alex-cheung",
    role: "Chief Financial Officer",
    bio: "Finance and transaction professional with experience in Deloitte M&A and transaction services, private equity and institutional banking. Leads financial strategy, planning, capital allocation, transfer pricing and investor readiness.",
  },
];
