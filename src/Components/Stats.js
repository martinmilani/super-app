import React from "react";
import Table from "./Table";
import { useStateValue } from "../StateProvider";
import { getTeamMembersCount } from "../reducer";

function Stats() {
  const [{ team }] = useStateValue();
  return (
    <div className="d-flex flex-column justify-content-center">
      <h1 className="font-weight-light mb-4 text-center p-2">
        Your Team Stats
      </h1>

      {getTeamMembersCount(team) === 0 ? (
        <section className="text-center p-2 mb-4">
          <h5>
            Your team has no members yet
            <br />
            Start search to add them
          </h5>
        </section>
      ) : (
        <div className="col-8 col-md-3 mx-auto mb-4">
          <Table />
        </div>
      )}
      <p className="text-center font-weight-lighter text-muted px-4 mb-4">
        Your team muts have 6 members, 3 with alignment "god" and 3 with
        alignment "bad"
      </p>
    </div>
  );
}

export default Stats;
