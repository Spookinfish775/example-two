function Articles(context) {
  return [{
      title: context.$t("articles.rightClear.title"),
      image: "right-clear.jpg",
      link: "/blog/howWash"
    },
    {
      title: context.$t("articles.sheet.title"),
      image: "sheet.jpg",
      link: "/blog/washSheets"
    },
    {
      title: context.$t("articles.lifehack.title"),
      image: "lifehack.jpg",
      link: "/blog/lifehacks"
    },
    {
      title: context.$t("articles.deepClear.title"),
      image: "deep-clear.jpg",
      link: "/blog/washer"
    },
    {
      title: context.$t("articles.highClear.title"),
      image: "high-clear.jpg",
      link: "/blog/production"
    },
    {
      title: context.$t("articles.detergents.title"),
      image: "detergents.jpg",
      link: "/blog/funds"
    }
  ];
}


export {
  Articles
}
