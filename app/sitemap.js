const baseUrl = "https://stackforge.tech";

export default function sitemap() {
  const routes = [
    "",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
