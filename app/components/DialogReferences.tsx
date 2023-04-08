"use client";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

function DialogReferences() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        className="outline px-1 bg-red-700 hover:bg-gray-700"
        onClick={handleOpen}
        variant="gradient"
      >
        Click to View References
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="h-[385px] w-full flex flex-col justify-center items-center bg-slate-300"
      >
        <DialogHeader className="underline">References</DialogHeader>
        <DialogBody className="  w-5/6 h-[300px] flex flex-col justify-center items-center">
          <div className="w-full h-[50px] text-xl">
            Koehler, J. J. (1993). The base rate fallacy reconsidered:
            Descriptive, normative, and methodological challenges. Behavioral
            Sciences & the Law, 11(3), 343-359.
          </div>
          <div className="w-full h-full text-xl pt-8">
            Lynch, M. J. (2003). Truth machine: The contentious history of DNA
            fingerprinting. University of Chicago Press.
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="text-lg text-black outline px-4  hover:bg-red-700"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

export default DialogReferences;
