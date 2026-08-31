export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://bradleyinnovations.group";

export const SITE_NAME = "Bradley Innovations Group";

export const SITE_LEGAL_NAME = "Bradley Innovations Group";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og?title=${encodeURIComponent(SITE_NAME)}`;
