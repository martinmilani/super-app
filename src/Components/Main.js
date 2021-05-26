import React from "react";
/* import { getTeamMembersCount } from "../reducer";
import { useStateValue } from "../StateProvider"; */
import FormSearch from "./FormSearch";
import Stats from "./Stats";
import TeamGrid from "./TeamGrid";

function Main() {
  /* const [{ team }] = useStateValue(); */
  return (
    <main className="d-flex flex-column justify-content-center">
      <FormSearch />
      <Stats />
      <TeamGrid />
    </main>
  );
}

export default Main;
