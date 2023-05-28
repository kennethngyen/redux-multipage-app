// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import axios from "axios";
// import { Card } from "@mui/material";

// //games API call postseason TRUE as parameter
// //returns all games
// //filter through all games, look at data.team
// //if data.team not in TEAM ARRAY then push to team array else ignore
// //repeat, team array should have all post season teams

// //

// type Team = {
//     team_players:Player[];
// };

// //grab teams first, then clean data, then attach player to team
// //vanilla javascript, how to merge array

// type Player = {
//     player_id:number;
// }

// const PlayerData = () => {
//   const [players, setPlayers] = useState<Player[] | null>(null);
//   useEffect(() => {
//     const options = {
//       method: 'GET',
//       url: 'https://www.balldontlie.io/api/v1/stats',
//       params: {postseason: 'true', per_page: '100', 'seasons[]': '2022'}
//     };
    
//     axios.request(options).then(function (response) {
//       console.log(response.data);
//       setPlayers(response.data.data) 
//     }).catch(function (error) {
//       console.error(error);
//     });
//   }, [])
//   return (
//     <div className="text-black flex flex-col justify-center items-center">
//       <h1 className="text-3xl">2022 NBA Postseason Player Data</h1>
//       <Card className="flex flex-col w-1/2 h-60 overflow-auto justify-center items-center">
//         {players && players.map((singlePlayer, index) => {
//           return (
//             <Link href={`/page3/${singlePlayer.player.id}`} key={index}>
//               {singlePlayer.player.first_name + " " + singlePlayer.player.last_name}
//             </Link>
//           );
//         })}
//       </Card>
//     </div>
//   );
// };

// export default PlayerData;
