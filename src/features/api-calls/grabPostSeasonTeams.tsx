import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Box, Card, Grid, CardContent, CardMedia, Typography } from "@mui/material";

interface Game {
  id: number;
  date: string;
  home_team: Team;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: Team;
  visitor_team_score: number;
}

interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

const gameData: Game[] = [
  // ... (your game data array here)
];

const GameData = () => {
  const [games, setGames] = useState<Game[] | null>(null); //????a game array or NULL, start w/ null
  const [teamsArray, setTeamsArray] = useState<string[]>([]);
  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(
          "https://www.balldontlie.io/api/v1/games",
          {
            params: {
              per_page: "100",
              "seasons[]": "2022",
              postseason: "true",
            },
          }
        );
        const gameData: Game[] = response.data.data;
        setGames(gameData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGameData();
  }, []);

  useEffect(() => {
    if (games) {
      const uniqueTeams: string[] = games.reduce(
        (accumulator: string[], game: Game) => {
          const homeTeamFullName = game.home_team.full_name;
          const visitorTeamFullName = game.visitor_team.full_name;

          if (!accumulator.includes(homeTeamFullName)) {
            accumulator.push(homeTeamFullName);
          }
          if (!accumulator.includes(visitorTeamFullName)) {
            accumulator.push(visitorTeamFullName);
          }

          return accumulator;
        },
        []
      );

      setTeamsArray(uniqueTeams);
    }
  }, [games]); //[games] array is provided as the second argument. By doing this, you're telling React that the effect should run whenever the games state changes

  return (
    <Grid container spacing={3} justifyContent="center">
      {teamsArray.map((team: string) => (
        <Grid item xs={6} sm={4} md={4}>
        <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <CardContent sx={{}}>
              <Typography component="div" variant="h5">
                {team}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {team}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png"
              alt="Live from space album cover"
            />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{}}>
              <Typography component="div">PLAYER NAME</Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                component="div"
              >
                PLAYER SUBSTATS
              </Typography>
            </CardContent>
          </Box>
        </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameData;

//games accessible now?

//     const [teamsArray, setTeamsArray] = useState<string[]>([]);

//     const [uniqueInstances, setUniqueInstances] = useState<Game[] | null>(null); //so i have uniqueInstances
//     useEffect(() => {
//         const accumulator: string[] = [];
//         {games && games.map(singleGame, index) =>{

//         const homeTeamFullName = game.home_team.full_name;
//         const visitorTeamFullName = game.visitor_team.full_name;

//         if (!accumulator.includes(homeTeamFullName)) {
//           accumulator.push(homeTeamFullName);
//         }
//         if (!accumulator.includes(visitorTeamFullName)) {
//           accumulator.push(visitorTeamFullName);
//         }
//     }

//         setUniqueInstances(accumulator);
//       }, []);

//       setTeamsArray(uniqueTeams);
//     }, []);

// }

// const TeamsComponent= () => {

//   return (
//     <div>
//       {teamsArray.map((team: string) => (
//         <div key={team}>{team}</div>
//       ))}
//     </div>
//   );
// };
