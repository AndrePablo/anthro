"use client";

import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";
import Evidence1 from "./components/Evidence1";
import Intro from "./components/Intro";
import Evidence2 from "./components/Evidence2";
import References from "./components/References";

export default function Home() {
  return (
    <main>
      <NavBar />
      <SubNavBar />
      <Intro id="Intro" />
      <Evidence1 id="Evidence1" />
      <Evidence2 id="Evidence2" />
      <References id="References" />
    </main>
  );
}
