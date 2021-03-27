const fs = require("fs");

const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.js",
    "pages/blog/*.js",
    "pages/inspiration/*.js",
    "pages/projects/*.js",
    "pages/concepts/*.js",
    "!pages/_*.js",
    "!pages/api",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace("pages", "")
                  .replace("pages/inspiration", "")
                  .replace("pages/projects", "")
                  .replace("pages/concepts", "")
                  .replace("pages/blog", "")
                  .replace(".js", "")
                  .replace(".mdx", "");
                const route = path === "/index" ? "" : path;

                // CHANGE THE DOMAIN TO THIS SCRIPT CAN RUNNING
                // PHONG.VN IS MY TEMPLATE DOMAIN.
                return `
                        <url>
                            <loc>${`https://phong.vn${route}`}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.xml", formatted);
})();
