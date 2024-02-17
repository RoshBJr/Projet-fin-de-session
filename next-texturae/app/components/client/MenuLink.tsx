import Link from "next/link";
import React from "react";

interface Props {
    slug:string;
}

function MenuLink({slug}:Props) {
  return (
    <>
        <Link
            onClick={ () => {
                const drawer = document.querySelector('._drawer');
                drawer?.classList.remove('show');
            }}
            href={`/${slug}`}
        >
            {`${slug.slice(0,1).toLocaleUpperCase()}${slug.slice(1)}`}
        </Link>
    </>
  );
}

export default MenuLink;
