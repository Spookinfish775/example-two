function Products(context) {
  return [{
      title: context.$t("products.aknur.automat.title"),
      description: `${context.$t("products.washingPowder")} - ${context.$t("products.kg6")}`,
      image: "aknur-automat-6kg.png",
      color: "blue-sky",
      link: "/production/ak-nur"
    },
    {
      title: context.$t("products.aknur.index"),
      description: context.$t("products.aknur.oxygen.title"),
      image: "aknur-oxygen.png",
      color: "pink",
      link: "/production/ak-nur-oxy"
    },
    {
      title: context.$t("products.aknur.color.title"),
      description: `${context.$t("products.washingPowder")} - ${context.$t("products.kg6")}`,
      image: "aknur-automat-color-6kg.png",
      color: "blue-sky",
      link: "/production/ak-nur"
    },
    {
      title: context.$t("products.pakize.index"),
      description: `${context.$t("products.soap")} - ${context.$t("products.pakize.soap.type.lavender")}`,
      image: "pakize-purple.png",
      color: "purple",
      link: "/production/pakize"
    },
    {
      title: context.$t("products.aynur.hand.title"),
      description: `${context.$t("products.washingPowder")} - ${context.$t("products.kg6")}`,
      image: "aynur-6kg.png",
      color: "blue-sky",
      link: "/production/ay-nur"
    },
    {
      title: context.$t("products.pakize.index"),
      description: `${context.$t("products.soap")} - ${context.$t("products.pakize.soap.type.peach")}`,
      image: "pakize-red.png",
      color: "pink",
      link: "/production/pakize"
    },
    {
      title: context.$t("products.aynur.automat.title"),
      description: `${context.$t("products.washingPowder")} - ${context.$t("products.kg6")}`,
      image: "aynur-automat-6kg.png",
      color: "blue-sky",
      link: "/production/ay-nur"
    },
    {
      title: context.$t("products.pakize.index"),
      description: `${context.$t("products.soap")} - ${context.$t("products.pakize.soap.type.mint")}`,
      image: "pakize-green.png",
      color: "green",
      link: "/production/pakize"
    },
  ];
}


export {
  Products
}
