/*fetches all players*/
export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players"
    );
    const myPlayers = await response.json();
    console.log("Puppy Players:", myPlayers);
    return myPlayers.data.players;
  } catch (error) {
    console.log("Error", error);
    //   return[]
  }
};

//fetch player by id
export const fetchPlayerById = async (id) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

//delete a puppy
export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players/${playerId}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

//fetches teams
export const fetchTeams = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2502-FTB-ET-WEB-FT/players"
    );
    const teamsData = await response.json();
    console.log("Teams:", teamsData);
    return teamsData.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
