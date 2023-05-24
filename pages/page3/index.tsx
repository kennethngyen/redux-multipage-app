import axios from "axios";
import PlayerData from "@/src/features/api-calls/playerData";
const Page1 = () => {

  return (
    <div className="text-black">
      <PlayerData/>
    </div>
  );
};

export default Page1;