import React from "react";

function loading() {
  return (
    <section className="_single bg-alice-blue flex justify-start gap-28 w-full mt-[80px] overflow-hidden max-h-[calc(100vh-80px)]">
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
