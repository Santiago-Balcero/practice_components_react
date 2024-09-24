import "./stylesheets/app.scss";
import { Rally } from "./Rally";
import { Grid2 } from "@mui/material";

function App() {
  return (
    <>
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "12px",
          height: "auto",
          position: "absolute",
          boxSizing: "border-box",
        }}
      >
        <Rally />
      </Grid2>
    </>
  );
}

export default App;
