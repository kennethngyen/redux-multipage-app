import React from "react";
import Image from "next/image";
import { Counter } from "@/src/features/counter/Counter";
import { Card } from "@mui/material";
import { Box } from "@mui/system";
import "./counter.css"

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <header className="App-header">
      <div className="logo-container">
        <Image
          src={`/logo.svg`}
          className="App-logo drop-shadow-xl saturate-200 shadow-white"
          alt="logo"
          width={450}
          height={200}
        />
        </div>
        
        <Counter />
      </header>

    </Box>
  );
};

export default Home;
