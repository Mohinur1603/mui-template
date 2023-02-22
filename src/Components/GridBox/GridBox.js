import { Box, Fab, Grid } from "@mui/material";
import React from "react";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";

export default function GridBox() {
  return (
    <div class="container p-5 ms-5 mt-5">
      <Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          direction="row"
          justifyContent="space-evenly"
        >
          <Grid item xs={2} sm={4} md={4}>
            <div class="text-center">
              <Fab disabled aria-label="like">
                <NorthWestIcon color="success" />
              </Fab>
              <h5 class="my-4" style={{ color: "rgb(45, 55, 72);" }}>
                Built for developers
              </h5>
              <p style={{ color: "rgb(100, 110, 115)" }}>
                Webbee is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </p>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div class="text-center">
              <Fab disabled aria-label="add">
                <DesignServicesOutlinedIcon color="success" />
              </Fab>
              <h5 class="my-4" style={{ color: "rgb(45, 55, 72);" }}>
                Designed to be modern
              </h5>
              <p style={{ color: "rgb(100, 110, 115)" }}>
                Designed with the latest design trends in mind. Webbee feels
                modern, minimal, and beautiful.
              </p>
            </div>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <div class="text-center">
              <Fab disabled aria-label="add">
                <CodeOffOutlinedIcon color="success" />
              </Fab>
              <h5 class="my-4" style={{ color: "rgb(45, 55, 72);" }}>
                Documentation for everything
              </h5>
              <p style={{ color: "rgb(100, 110, 115)" }}>
                We've written extensive documentation for components and tools,
                so you never have to reverse engineer anything
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
