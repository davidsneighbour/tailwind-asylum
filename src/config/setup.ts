// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Tailwind Asylum";
export const SITE_DESCRIPTION =
  "A runnable Astro, Tailwind CSS, and React sandbox for examples, support cases, bug reproductions, and design tests.";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/works/", label: "Works" },
  { href: "/asylum/", label: "Blog" },
] as const;
