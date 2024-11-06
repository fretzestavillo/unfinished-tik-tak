import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useBearStore } from "./store";
import { useState } from "react";

export function Button1() {
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);
  const [item, setItem] = useState("");

  const listD = [
    [1, 2, 3],
    [3, 2, 1],
    [4, 5, 6],
    [6, 5, 4],
    [7, 8, 9],
    [9, 8, 7],
    [1, 4, 7],
    [7, 4, 1],
    [2, 5, 8],
    [8, 5, 2],
    [3, 6, 9],
    [9, 6, 3],
    [1, 5, 9],
    [9, 5, 1],
    [3, 5, 7],
    [7, 5, 3],
  ];

  //   if (bears.length === 5) {
  if (bears.length > 5) {
    const xList = bears.filter((item) => item[item.length - 1] === "X");
    const final = xList.map((item) => Number(item[0]));
    // console.log(final);

    let arr1 = final.slice(0, 3);
    let arr2 = final.slice(0, 3);
    let arr3 = final.slice(0, 3);

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);

    // const oList = bears.filter((item) => item[item.length - 1] === "O");
    // console.log(oList);
  }

  //   if (bears.length === 6) {
  //     const xList = bears.filter((item) => item[item.length - 1] === "X");
  //     console.log(xList);
  //     const oList = bears.filter((item) => item[item.length - 1] === "O");
  //     console.log(oList);
  //   }

  //   if (bears.length === 7) {
  //     const xList = bears.filter((item) => item[item.length - 1] === "X");
  //     console.log(xList);
  //     const oList = bears.filter((item) => item[item.length - 1] === "O");
  //     console.log(oList);
  //   }

  //   if (bears.length === 8) {
  //     const xList = bears.filter((item) => item[item.length - 1] === "X");
  //     console.log(xList);
  //     const oList = bears.filter((item) => item[item.length - 1] === "O");
  //     console.log(oList);
  //   }

  //   if (bears.length === 9) {
  //     const xList = bears.filter((item) => item[item.length - 1] === "X");
  //     console.log(xList);
  //     const oList = bears.filter((item) => item[item.length - 1] === "O");
  //     console.log(oList);
  //   }

  function clickMe() {
    if (bears.length < 1) {
      increaseBears("1-X");
      setItem("X");
    }
    const stringLetter = bears[bears.length - 1];
    const finalData = stringLetter[stringLetter.length - 1];
    if (finalData === "X") {
      increaseBears("1-O");
      setItem("O");
    }
    if (finalData === "O") {
      increaseBears("1-X");
      setItem("X");
    }
  }

  return (
    <Button
      onClick={clickMe}
      sx={{
        backgroundColor: "#9e9e9e",
        color: "white",
        padding: 0,
        width: 228,
        height: 161,
      }}
    >
      <Typography sx={{ fontSize: 50 }}>{item}</Typography>
    </Button>
  );
}
