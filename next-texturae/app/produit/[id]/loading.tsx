import React from "react";

/** 
 * composant à afficher lorsque le composant page unique n'est pas près à l'affichage
*/

function loading() {
  return (
    <section className="_single bg-primary flex justify-start gap-28 w-full mt-[80px] overflow-hidden max-h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-4 w-full">
          <div className="skeleton h-96 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
    </section>
  );
}

export default loading;
