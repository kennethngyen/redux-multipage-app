import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./counterSlice";

import { OutlinedInput, Typography, createTheme,  } from "@mui/material";
import Button from "@mui/material/Button";
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ff0000',
//     },
//     play: {
//       main: '#ffffff',
//       contrastText: 'black'
//     },
//     moreInfo: {
//       main: '#6c6c6e',
//       contrastText: 'white'
//     },
//     tonalOffset: 0.2,
//   },
// });

// declare module '@mui/material/styles' {
//   interface Palette {
//       play?: Palette['primary'];
//       moreInfo?: Palette['primary'];
//   }
//   interface PaletteOptions {
//       play?: PaletteOptions['primary'];
//       moreInfo?: PaletteOptions['primary'];
//   }
// }


export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("0");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <Button
          sx={{
            color: 'black', // Dark purple color
            border: 1,
            bgcolor: 'rgb(112, 76, 182)', // Purple background color
            borderColor: '#800080', // Dark purple border color
            '&:hover': {
              bgcolor: 'rgb(122, 90, 192, 0.6)', // Purple background color on hover
              borderColor: '#800080', // Dark purple border color on hover
            },
          }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
        <Typography sx={{margin:3, fontSize:"60px",}}>
          {count}
        </Typography>
        
        <Button
          sx={{
            color: 'black', // Dark purple color
            border: 1,
            bgcolor: 'rgb(112, 76, 182)', // Purple background color
            borderColor: '#800080', // Dark purple border color
            '&:hover': {
              bgcolor: 'rgb(142, 120, 212, 0.6)', // Purple background color on hover
              borderColor: '#800080', // Dark purple border color on hover
            },
          }}
          
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
      <div className="input-container py-10 flex justify-center">
        <OutlinedInput
          aria-label="Set increment amount"
          value={incrementAmount}
          sx={{width:"80px", justifyContent:"center", display:"flex", border: 1, borderColor: '#800080'}}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}
          variant = "contained"
          sx={{
            marginLeft: 2,
            color: 'black', // Dark purple color
            border: 1,
            bgcolor: 'white', // Purple background color
            borderColor: '#800080', // Dark purple border color
            '&:hover': {
              bgcolor: 'rgb(142, 120, 212, 0.6)', // Purple background color on hover
              borderColor: '#800080', // Dark purple border color on hover
            },
          }}>
          Add Amount
        </Button>
      </div>
    </div>
  );
}