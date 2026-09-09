type Crumb = {
  name: string;
  path: string;
};

type PageBreadcrumbProps = {
  current: string;
  items?: Crumb[];
};

export default function PageBreadcrumb({
  current,
  items = [],
}: PageBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm tracking-[0.02em]">
      <ol className="flex flex-wrap items-center gap-x-2 text-white">
        <li>
          <a
            href="/"
            className="text-white no-underline hover:text-white hover:no-underline"
          >
            Home
          </a>
        </li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-x-2">
            <span aria-hidden="true" className="text-white/60">
              /
            </span>
            <a
              href={item.path}
              className="text-white no-underline hover:text-white hover:no-underline"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className="flex items-center gap-x-2">
          <span aria-hidden="true" className="text-white/60">
            /
          </span>
          <span className="underline decoration-white/80 underline-offset-4">
            {current}
          </span>
        </li>
      </ol>
    </nav>
  );
}
