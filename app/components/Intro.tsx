import React from "react";
import { Button } from "@material-tailwind/react";
import Image from "next/image";
import intro from "../../public/intro.jpg";
import { Link as LinkScroll } from "react-scroll";

interface Section1Props {
  id: string;
}

function Intro({ id }: Section1Props) {
  return (
    <section id={id} className="h-[700px]">
      <div className="relative h-full pt-16 pb-32 flex content-center items-center justify-center">
        <div className="absolute top-0 w-full h-full">
          <Image src={intro} alt="intro image" fill={true} quality={100} />
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex ">
            <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-green-500 font-bold text-4xl">
                  Forensic evidence is not always conclusive in solving crimes.
                </h1>
                <p className="pt-16 text-2xl font-normal text-gray-400">
                  Forensic evidence is often portrayed as a foolproof method for
                  solving crimes, but the reality is much more complex. DNA and
                  other physical evidence can be contaminated or misinterpreted,
                  eyewitness testimony can be unreliable, and forensic
                  techniques themselves can be flawed. We must be cautious in
                  relying solely on forensic evidence to reach a verdict, as it
                  can lead to wrongful convictions.
                </p>
              </div>
              <div className="pt-24 sm:mt-12">
                <LinkScroll
                  activeClass="active"
                  to="Evidence1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button
                    className="bg-black border-white text-white rounded-lg border-2 px-8 py-3 hover:bg-red-600"
                    ripple={true}
                    size="lg"
                  >
                    Find out why{" "}
                    <span role="img" aria-label="ghost">
                      👻
                    </span>
                  </Button>
                </LinkScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
