export const initialState = {
  team: [],
  searchName: "",
  showToast: false,
  showAlert: false,
  alertMsg: "",
  toastMsg: "",
};

export const getTeamStats = (team) =>
  team?.reduce(
    (statsSum, item) => {
      return {
        intelligence: statsSum.intelligence + parseInt(item.intelligence),
        strength: statsSum.strength + parseInt(item.strength),
        speed: statsSum.speed + parseInt(item.speed),
        durability: statsSum.durability + parseInt(item.durability),
        power: statsSum.power + parseInt(item.power),
        combat: statsSum.combat + parseInt(item.combat),
        weight:
          Math.round(
            ((statsSum.weight + parseInt(item.weight)) / team?.length) * 100
          ) / 100,
        height:
          Math.round(
            ((statsSum.height + parseInt(item.height)) / team?.length) * 100
          ) / 100,
      };
    },
    {
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability: 0,
      power: 0,
      combat: 0,
      weight: 0,
      height: 0,
    }
  );

export const getTeamMembersCount = (team) => team?.length;

const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        showToast: true,
        toastMsg: action.toastMsg,
      };

    case "CLOSE_TOAST":
      return {
        ...state,
        showToast: false,
      };

    case "OPEN_ALERT":
      return {
        ...state,
        showAlert: true,
        alertMsg: action.alertMsg,
      };

    case "CLOSE_ALERT":
      return {
        ...state,
        showAlert: false,
      };

    case "SET_SEARCH_NAME":
      return {
        ...state,
        searchName: action.name,
      };

    case "ADD_TO_TEAM":
      return {
        ...state,
        team: [...state.team, action.item],
      };

    case "REMOVE_FROM_TEAM":
      console.log(action.id);
      const index = state.team.findIndex(
        (teamItem) => teamItem.id === action.id
      );

      let newTeam = [...state.team];

      newTeam.splice(index, 1);

      return {
        ...state,
        team: newTeam,
      };

    default:
      return state;
  }
};

export default reducer;
