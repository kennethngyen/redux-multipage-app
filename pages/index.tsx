import React from "react";
import GameData from "@/src/features/api-calls/grabPostSeasonTeams";

type Props = {};

const Home = (props: Props) => {
    return <div><GameData/></div>
}

export default Home