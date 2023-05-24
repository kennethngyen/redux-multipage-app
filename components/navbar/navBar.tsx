import Link from "next/link";
import { Button } from "@mui/material";

type Props = {};//

const NavBar = (props: Props) => {
  return (
    <div className="py-3 bg-white text-l z-100 lg:text-xl m-0 flex items-center justify-center w-full px-4 gap-2 lg:gap-4 border border-gray-200 shadow-md">
      <Button variant="text" sx={{color: "black", fontWeight:"bold"}} href={"/"}>
        Home
      </Button>
      <Button variant="text" sx={{color: "black", fontWeight:"bold"}} href={"/counter"}>
      Counter
    </Button>
    <Button variant="text" sx={{color: "black", fontWeight:"bold"}} href={"/page2"}>
    Page2
  </Button>
  <Button variant="text" sx={{color: "black", fontWeight:"bold"}} href={"/page3"}>
  Page3
</Button>


      
    </div>
  );
};

export default NavBar;
