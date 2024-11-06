import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button1 } from "./component/button1";
import { Button2 } from "./component/button2";
import { Button3 } from "./component/button3";
import { Button4 } from "./component/button4";
import { Button5 } from "./component/button5";
import { Button6 } from "./component/button6";
import { Button7 } from "./component/button7";
import { Button8 } from "./component/button8";
import { Button9 } from "./component/button9";

export default function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        alignContent: "center",
        backgroundColor: "#e0e0e0",
      }}
    >
      <Stack
        sx={{
          display: "grid",
          height: "500px",
          width: "700px",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 1,
          justifySelf: "center",
        }}
      >
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
      </Stack>
    </Box>
  );
}
