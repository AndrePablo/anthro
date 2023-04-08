import React from "react";
import DialogReferences from "./DialogReferences";

interface refProps {
  id: string;
}

function References({ id }: refProps) {
  return (
    <section id={id} className=" w-full h-[250px] bg-black">
      <div className="w-full h-full flex justify-center items-center">
        <DialogReferences />
      </div>
    </section>
  );
}

export default References;
