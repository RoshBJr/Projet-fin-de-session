import Link from "next/link";
import React from "react";

interface Props {
    slug:string;
    menuTitre:string;
    menuTitreEn:string;
}

function MenuLink({slug, menuTitre, menuTitreEn}:Props) {
  return (
    <>
        <Link
            onClick={ () => {
                const drawer = document.querySelector('._drawer');
                drawer?.classList.remove('show');
            }}
            href={`/${slug}`}
        >
            {
                document.cookie.includes('lang=en') ?
                `${menuTitreEn}`
                :
                `${menuTitre}`
            }
        </Link>
    </>
  );
}

export default MenuLink;
