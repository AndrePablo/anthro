import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import { FaFingerprint } from "react-icons/fa";

export default function CardEvi2({ p }: { p: any }) {
  return (
    <Card
      shadow={false}
      className=" flex flex-col h-full w-full  items-center  relative  text-center"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-gray-400 bg-cover bg-center"
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/20" />
      </CardHeader>
      <CardBody className="relative h-[full] w-[85%] pt-24 leading-[2em] text-xl  font-serif flex flex-col justify-center items-center">
        {p}
        <div className="pt-10">
          <FaFingerprint size={50} />
        </div>
      </CardBody>
    </Card>
  );
}
