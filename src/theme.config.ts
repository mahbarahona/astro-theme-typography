export const THEME_CONFIG: App.Locals["config"] = {
  /** blog title */
  title: "Academy",
  /** your name */
  author: "Angular",
  /** website description */
  desc: "Inspect",
  /** your deployed domain */
  website: "https://astro-theme-typography.vercel.app/",
  /** your locale */
  locale: "es-cl",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    //   {
    //     name: "github",
    //     href: "https://github.com/moeyua/astro-theme-typography",
    //   },
    // {
    //   name: "rss",
    //   href: "/atom.xml",
    // },
    //   {
    //     name: "twitter",
    //     href: "https://github.com/moeyua/astro-theme-typography",
    //   },
    //   {
    //     name: "mastodon",
    //     href: "https://github.com/moeyua/astro-theme-typography",
    //   },
  ],
  /** your header info */
  header: {
    twitter: " ",
  },
  /** your navigation links */
  navs: [
    {
      name: "Glosario",
      href: "/posts/page/1",
    },
    {
      name: "Blog",
      href: "/posts/page/1",
    },
    {
      name: "Components",
      href: "/components/page/1",
    },
    {
      name: "Templates",
      href: "/templates/page/1",
    },
    // {
    //   name: "Archive",
    //   href: "/archive",
    // },
    {
      name: "Temario",
      href: "/temario",
    },
    {
      name: "Training",
      href: "/about",
    },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [{ name: "胡适", path: "hu-shi" }],
  /** your comment provider */
  comments: {
    disqus: {
      // please change this to your disqus shortname
      shortname: "ng academy",
    },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  },
};
