import React from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
// import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div class="contaier bg-white position-sticky top-0 shadow p-3 d-flex align-items-center justify-content-between" style={{zIndex:1500}}>
      <div>
        <DensityMediumIcon
          color="action"
          fontSize="small"
          sx={{ mr: "1rem" }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10%"
          height="10%"
          fill="none"
          viewBox="0 0 95 71"
        >
          <rect
            width="16.811"
            height="68.926"
            x="0.664"
            y="7.769"
            fill="#00AB55"
            stroke="#00AB55"
            rx="8.406"
            transform="rotate(-25 .664 7.77)"
          ></rect>
          <rect
            width="16.811"
            height="68.926"
            x="28.665"
            y="7.769"
            fill="#00AB55"
            stroke="#00AB55"
            rx="8.406"
            transform="rotate(-25 28.665 7.77)"
          ></rect>
          <rect
            width="16.811"
            height="16.81"
            x="78.769"
            y="0.664"
            fill="#00AB55"
            stroke="#00AB55"
            rx="8.405"
            transform="rotate(25 78.77 .664)"
          ></rect>
        </svg>
      </div>
      {/* <div class="d-flex align-items-center justify-content-between">
        <NightlightRoundOutlinedIcon
          color="success"
          transform="rotate(-25 .664 7.77)"
        />
        <Button variant="text" color="info">
          Home
        </Button>
        <Button variant="text" color="info">
          Documentation
        </Button>
        <Button variant="contained" color="success" disableElevation>
          Purchase now
        </Button>
      </div> */}
    </div>
  );
}
