import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useBearStore } from "./store";
import { useState } from "react";

export function Button6() {
  const bears = useBearStore((state) => state.bears);
  const increaseBears = useBearStore((state) => state.increase);
  const [item, setItem] = useState("");

  function clickMe() {
    if (bears.length < 1) {
      increaseBears("6-X");
      setItem("X");
    }
    const stringLetter = bears[bears.length - 1];
    const finalData = stringLetter[stringLetter.length - 1];
    if (finalData === "X") {
      increaseBears("6-O");
      setItem("O");
    }
    if (finalData === "O") {
      increaseBears("6-X");
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
