import Link from "next/link";
import React, { useEffect, useState } from "react";

/**
 * composant lien menu de navigation
 */

interface Props {
    slug:string;
    menuTitre:string;
    menuTitreEn:string;
}

function MenuLink({slug, menuTitre, menuTitreEn}:Props) {
    const [en, setEn] = useState<boolean>(false);
    useEffect(()=> {
        if(document !== undefined) {
          setEn(document.cookie.includes("lang=en"));
        }
      })

  return (
    <>
        <Link
            onClick={ () => {
                const drawer = document.querySelector('._drawer');
                drawer?.classList.remove('show');
            }}
            href={{
                pathname: `/${slug}`,
                query: {
                  tri: "name-asc"
                }
              }}
        >
            {
                en ?
                `${menuTitreEn}`
                :
                `${menuTitre}`
            }
        </Link>
    </>
  );
}

export default MenuLink;
