/** 
 * les différentes requêtes vers le CMS pour afficher les produits dans l'application web
*/

export function feedQ(
  searchQuery: string,
  en: string | undefined,
  sorting: string[]
) {
  return `*[_type == "product" ${
    searchQuery
      ? `&& ${
          en
            ? `category.en match "*${searchQuery}*" || name.en match "*${searchQuery}*"`
            : `category.fr match "*${searchQuery}*" || name.fr match "*${searchQuery}*"`
        }`
      : ""
  } ] {
            _id,
            name,
            category,
            colors,
            description,
            gender,
            slug_en,
            slug_fr,
            price,
            defaultImg,
            materials,
            patterns,
            sizes,
            image[]{ "imgUrl": asset->url }
          } | order(${
            sorting[0] !== "name"
              ? "price"
              : en
              ? "lower(name.en)"
              : "lower(name.fr)"
          } ${sorting[1]})`;
}

export function femmeQ(
  searchQuery: string,
  en: string | undefined,
  sorting: string[]
) {
  return `*[gender.fr == "Femme" ${
    searchQuery
      ? `&& ${
          en
            ? `gender.fr == "Femme"  && (name.en match "*${searchQuery}*" || category.en match "*${searchQuery}*")`
            : `gender.fr == "Femme"  && (name.fr match "*${searchQuery}*" || category.fr match "*${searchQuery}*")`
        }`
      : ""
  } ] {
            _id,
            name,
            category,
            colors,
            description,
            gender,
            slug_en,
            slug_fr,
            price,
            defaultImg,
            materials,
            patterns,
            sizes,
            image[]{ "imgUrl": asset->url }
          } | order(${
            sorting[0] !== "name"
              ? "price"
              : en
              ? "lower(name.en)"
              : "lower(name.fr)"
          } ${sorting[1]})`;
}

export function hommeQ(
  searchQuery: string,
  en: string | undefined,
  sorting: string[]
) {
  return `*[gender.fr == "Homme" ${
    searchQuery
      ? `&& ${
          en
            ? `gender.fr == "Homme"  && (name.en match "*${searchQuery}*" || category.en match "*${searchQuery}*")`
            : `gender.fr == "Homme"  && (name.fr match "*${searchQuery}*" || category.fr match "*${searchQuery}*")`
        }`
      : ""
  } ] {
        _id,
        name,
        category,
        colors,
        description,
        gender,
        slug_en,
        slug_fr,
        price,
        defaultImg,
        materials,
        patterns,
        sizes,
        image[]{ "imgUrl": asset->url }
      } | order(${
        sorting[0] !== "name"
          ? "price"
          : en
          ? "lower(name.en)"
          : "lower(name.fr)"
      } ${sorting[1]})`;
}

export function panierQ() {
  return `*[_type == "product"] {
            _id,
            name,
            category,
            colors,
            description,
            price,
            gender,
            slug_en,
            slug_fr,
            sizes,
            defaultImg,
            materials,
            patterns,
            image[]{ "imgUrl": asset->url }
          }`;
}
