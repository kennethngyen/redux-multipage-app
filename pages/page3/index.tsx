import axios from "axios";
import PlayerData from "@/src/features/api-calls/playerData";
const Page1 = () => {

  return (
    <div className="text-black">
      <div className="w-full grid">
      <PlayerData/>
      </div>
    </div>
  );
};

export default Page1;