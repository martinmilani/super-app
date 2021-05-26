import React from "react";
import { useStateValue } from "../StateProvider";
import { getTeamMembersCount } from "../reducer";

function Card({ item }) {
  const [{ team }, dispatch] = useStateValue();

  const alreadyOnTeam = (id) => team.some((item) => item.id === id);

  const alignmentCount = (team, orientation) => {
    return team?.filter((item) => item.alignment === orientation).length === 3;
  };

  const isNeutral = (alignment) => alignment === "neutral";

  const openAlert = (error) => {
    dispatch({
      type: "OPEN_ALERT",
      alertMsg: error,
    });
  };

  const handleAdd = () => {
    if (alreadyOnTeam(item.id)) {
      openAlert("Character already selected!");
    } else if (isNeutral(item.biography.alignment)) {
      openAlert("Your can't select members with neutral alignment");
    } else if (getTeamMembersCount(team) === 6) {
      openAlert("Your Team is full");
    } else if (alignmentCount(team, item.biography.alignment)) {
      openAlert(
        `You already have 3 members whit alignment ${item.biography.alignment}`
      );
    } else {
      dispatch({
        type: "ADD_TO_TEAM",
        item: {
          weight: item.appearance.weight[1],
          height: item.appearance.height[1],
          name: item.name,
          aliases: item.biography.aliases,
          eyeColor: item.appearance["eye-color"],
          hairColor: item.appearance["hair-color"],
          base: item.work.base,
          combat: item.powerstats.combat,
          durability: item.powerstats.durability,
          intelligence: item.powerstats.intelligence,
          power: item.powerstats.power,
          speed: item.powerstats.speed,
          strength: item.powerstats.strength,
          key: item.id,
          id: item.id,
          alignment: item.biography.alignment,
          img: item.image.url,
        },
      });
      dispatch({
        type: "SHOW_TOAST",
        toastMsg: `${item.name} has been added to your team!`,
      });
    }
  };
  return (
    <div>
      <div className="card shadow-sm m-2" style={{ width: "16rem" }}>
        <img
          className="img-fluid p-2"
          style={{ height: "20rem", borderRadius: "12px" }}
          src={item?.image.url}
          alt={item.name}
        />

        <div className="card-body">
          <p className="card-text text-center">{item?.name}</p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
