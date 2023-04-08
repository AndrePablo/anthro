"use client";

import React from "react";
import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CardEvi2 from "./CardEvi2";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}

const p1 = `
    The use of forensic evidence has been widely accepted as a powerful tool in the investigation of crimes. However, despite the apparent objectivity of forensic science, the use of such evidence is not always conclusive in solving crimes. This is because forensic evidence can be influenced by a number of factors, including contamination, human error, and subjective interpretation. Therefore, it is crucial that forensic evidence be viewed with a critical eye and be accompanied by other forms of evidence to increase the likelihood of achieving justice.
Contamination is one of the most significant issues affecting forensic evidence. The mere presence of a contaminant can render forensic evidence useless, and it can occur in any stage of evidence collection, preservation, and analysis. For example, a sample of DNA can be contaminated by the DNA of a laboratory technician or another individual involved in the evidence collection process. Additionally, the environment in which evidence is collected can contribute to contamination. This can occur when the collection site is not properly sealed off or when evidence is collected without sufficient protective gear. The effects of contamination can be compounded if the sample size is small, which is often the case in forensic investigations.Human error is another factor that can undermine the reliability of forensic evidence. Investigators, technicians, and analysts are all human beings who can make mistakes, such as misidentifying a sample or improperly labeling evidence. Furthermore, the interpretation of forensic evidence can be subjective, which can lead to different interpretations of the same evidence by different analysts. This is particularly true of forensic evidence that relies on pattern recognition, such as fingerprint analysis or handwriting analysis. Even DNA evidence, which is often seen as the gold standard of forensic evidence, can be subject to interpretation, particularly when dealing with complex mixtures or low-level samples.
`;

const p2 = ` Other forms of evidence, such as eyewitness testimony, circumstantial evidence, and confessions, can also be used to build a case against a suspect. Furthermore, the use of forensic evidence can lead to a false sense of security, which can lead investigators to overlook other forms of evidence that may be equally or more important in determining guilt or innocence.
 While forensic evidence is a powerful tool in the investigation of crimes, it is not always conclusive in solving crimes. The use of forensic evidence is subject to contamination, human error, and subjective interpretation, and it is only one piece of evidence that can be considered in a criminal investigation. Therefore, forensic evidence should be viewed with a critical eye and be accompanied by other forms of evidence to increase the likelihood of achieving justice. This view is supported by Lynch, M. J. (2003) in his book, "Truth machine: The contentious history of DNA fingerprinting," where he highlights the limitations and potential for misuse of forensic evidence in criminal investigations.`;

const p3 = `
 In his book "Truth Machine: The Contentious History of DNA Fingerprinting," Lynch (2003) emphasizes the importance of critically evaluating forensic evidence in criminal investigations. While forensic evidence can be a powerful tool in solving crimes, it is subject to contamination, human error, and subjective interpretation, and should not be relied on as the sole basis for a conviction.

One example of the potential for contamination of forensic evidence is the case of JoAnn Parks. Parks was convicted of arson and murder based on the testimony of a fire investigator who claimed to have found evidence of arson at the scene. However, further investigation revealed that the evidence had been contaminated by the investigator's use of gasoline to start a fire for demonstration purposes. Parks was ultimately exonerated by the California Innocence Project in 2020, after serving over 27 years in prison (California Innocence Project, 2020).

Human error can also play a role in the interpretation of forensic evidence. For example, in the case of Cameron Todd Willingham, a man was executed for arson and murder based on faulty evidence that was later found to be based on flawed science (Grann, 2009). Despite the lack of evidence supporting the arson theory, the prosecutor argued that Willingham had intentionally set the fire based on the pattern of burn marks on the floor. However, later investigations found that the burn patterns were consistent with accidental fires, and that the original investigator had relied on outdated and discredited theories.

Lynch (2003) also notes that forensic evidence can be subject to subjective interpretation, particularly in cases where the evidence is ambiguous or open to multiple interpretations. For example, in the case of bite mark analysis, forensic experts have been known to disagree on whether a mark was made by human teeth, and if so, whether it was made by the suspect's teeth (American Academy of Forensic Sciences, 2021). This subjectivity can lead to false identifications and wrongful convictions.
 `;
const p = [p1, p2, p3];

function Carousel({ autoSlide, autoSlideInterval }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  function GetCurrSlide() {
    return (
      <>
        <CardEvi2 p={p[curr]} />
      </>
    );
  }

  const prev = () => setCurr((curr) => (curr === 0 ? 2 : curr - 1));
  const next = () => setCurr((curr) => (curr === 2 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className=" h-full w-full relative">
      <div className="h-full w-full ">{GetCurrSlide()}</div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BsChevronCompactRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
