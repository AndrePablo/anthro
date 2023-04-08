"use client";

import React, { useState } from "react";

function E1sub() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: any) => {
    setActiveTab(tabIndex);
  };

  function renderTabContent(activeTab: any) {
    switch (activeTab) {
      case 1:
        return (
          <div className="flex flex-col justify-center items-center px-4">
            <h2
              className="pt-16 font-mono text-white"
              style={{ fontSize: "30px", fontStyle: "italic" }}
            >
              Base Rate Neglect
            </h2>
            <p
              className="pt-8 font-mono text-white leading-[2em]"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Forensic evidence can be valuable in criminal investigations;
              however, it is not always conclusive in solving crimes. One of the
              primary arguments against its use is base rate neglect. Base rate
              neglect is a significant challenge to the use of forensic evidence
              in criminal investigations. Koehler (1993) points out that people
              often rely too heavily on diagnostic information provided by
              forensic evidence without considering the prior probability of the
              event being investigated. For instance, DNA evidence found at a
              crime scene may seem conclusive, but the fact remains that there
              may be many people with the same DNA profile in the population.
              This neglect of the base rate can lead to errors in judgment and
              result in wrongful convictions. Therefore, it is essential to take
              into account the prior probability of the event being
              investigated, along with the diagnostic information provided by
              forensic evidence.
            </p>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col justify-center items-center px-4">
            <h2
              className="pt-16 font-mono text-white"
              style={{ fontSize: "30px", fontStyle: "italic" }}
            >
              Interpretation bias
            </h2>
            <p
              className="pt-8 font-mono text-white leading-[2em]"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Interpretation bias is another challenge to the use of forensic
              evidence in criminal investigations. As Koehler (1993) argues, the
              same forensic evidence can be interpreted differently by different
              experts, leading to inconsistencies in its use and decreasing its
              reliability in solving crimes. For instance, fingerprint analysis
              is an area where interpretation bias is prevalent. Two fingerprint
              analysts may reach different conclusions about whether a print
              matches a suspect based on their subjective interpretation of the
              evidence. This can create problems, especially when forensic
              evidence is presented as conclusive evidence in a criminal trial.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col justify-center items-center px-4">
            <h2
              className="pt-16 font-mono text-white"
              style={{ fontSize: "30px", fontStyle: "italic" }}
            >
              Confirmation Bias
            </h2>
            <p
              className="pt-8 font-mono text-white leading-[2em]"
              style={{ fontSize: "18px", fontStyle: "italic" }}
            >
              Confirmation bias is yet another challenge to the use of forensic
              evidence in criminal investigations. As Koehler (1993) notes,
              people tend to interpret new evidence in a way that confirms their
              existing beliefs or hypotheses. In the context of criminal
              investigations, if a prosecutor believes that a defendant is
              guilty, they may interpret forensic evidence in a way that
              supports this belief while ignoring or downplaying evidence that
              contradicts it. This can create tunnel vision, which hinders the
              investigation and may lead to wrongful convictions. Therefore, it
              is essential to ensure that forensic evidence is analyzed
              objectively, and investigators should avoid drawing conclusions
              based on their pre-existing beliefs or hypotheses.
            </p>
          </div>
        );
    }
  }
  return (
    <div className="flex flex-row">
      <div className="relative  w-1/4 h-[600px] bg-red-700">
        <div className="flex flex-col justify-center items-center">
          <h2
            className="pt-16 font-mono text-black"
            style={{ fontSize: "30px", fontStyle: "italic" }}
          >
            Evidence #1
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full pt-4">
          <button
            className={`border-b-2 border-transparent ${
              activeTab === 1
                ? "text-black border-black underline"
                : "hover:underline hover:text-green-700"
            } mr-4 focus:outline-none`}
            onClick={() => handleTabClick(1)}
          >
            <h2 className="pt-16 font-mono" style={{ fontSize: "18px" }}>
              1.1 B.R.N
            </h2>
          </button>
          <button
            className={`border-b-2 border-transparent ${
              activeTab === 2
                ? "text-black border-black underline"
                : "hover:underline hover:text-green-700"
            } mr-4 focus:outline-none pt-8`}
            onClick={() => handleTabClick(2)}
          >
            <h2 className="pt-2 font-mono" style={{ fontSize: "18px" }}>
              1.2 Interpretation Bias
            </h2>
          </button>
          <button
            className={`border-b-2 border-transparent ${
              activeTab === 3
                ? "text-black border-black underline"
                : "hover:underline hover:text-green-700"
            } mr-4 focus:outline-none pt-8`}
            onClick={() => handleTabClick(3)}
          >
            <h2 className="pt-2 font-mono" style={{ fontSize: "18px" }}>
              1.3 Confirmation Bias
            </h2>
          </button>
        </div>
      </div>
      <div className="relative w-3/4 bg-black h-[600px]">
        {renderTabContent(activeTab)}
      </div>
    </div>
  );
}

export default E1sub;
