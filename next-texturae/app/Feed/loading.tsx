import React from "react";

/** 
 * composant à afficher lorsque le composant tous les produits n'est pas prêt à l'affichage
*/

function Loading() {
  return (
    <section className="flex-grow overflow-x-hidden pt-[120px] bg-primary flex flex-col">
      <div className="p-5 grid min-[320px]:grid-cols-1 min-[500px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Loading;
