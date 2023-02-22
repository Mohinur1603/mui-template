import { Button } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Footer() {
  return (
    <div class="container-fluid mt-5 px-5 bg-light">
      <div class="container text-center pt-5">
        <h6 style={{ color: "rgb(100, 110, 115)" }}>GET STARTED</h6>
        <h1
          class="display-4"
          style={{ fontWeight: "700", color: "rgb(45,55,72)" }}
        >
          Get started with Webbee today
        </h1>
        <h5 style={{ color: "rgb(100, 110, 115)", margin: "30px 0px" }}>
          Build a beautiful, modern website with flexible, fully customizable,
          atomic Material-UI components.
        </h5>
        <Button
          variant="contained"
          color="success"
          endIcon={<ArrowRightAltIcon />}
        >
          Purchase now
        </Button>
        <hr style={{ margin: "3rem 0" }}></hr>
      </div>
      <div class="container-fluid">
        <div class="d-flex justify-content-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3%"
            height="3%"
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
          <div>
            <Button variant="text" color="success">
              Home
            </Button>
            <Button variant="text" color="success">
              Documentation
            </Button>
            <Button variant="outlined" color="success">
              Purchase now
            </Button>
          </div>
        </div>
        <div class="text-center mt-5 mb-0 text-secondary">
          <p  style={{fontSize:"13px"}}>© Webbee. 2021, Maccarian. All rights reserved</p>
          <p style={{fontSize:"12px"}}>
            When you visit or interact with our sites, services or tools, we or
            our authorised service providers may use cookies for storing
            information to help provide you with a better, faster and safer
            experience and for marketing purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
