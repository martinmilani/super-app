import React from "react";
import { getTeamMembersCount } from "../reducer";
import { useStateValue } from "../StateProvider";
import MainCard from "./MainCard";

function TeamGrid() {
  const [{ team }] = useStateValue();

  return (
    <div className="album py-5">
      <div className="container">
        {getTeamMembersCount(team) === 0 ? (
          <h4 className="text-center">You have no members in your team</h4>
        ) : (
          <div className="flex-wrap my-4 d-flex flex-column flex-md-row justify-content-center align-items-center">
            {team.map((item) => (
              <MainCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamGrid;
