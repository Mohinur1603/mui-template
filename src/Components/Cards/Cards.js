import React from "react";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Box } from "@mui/system";
import { Fab, Grid, Paper } from "@mui/material";

export default function Cards() {
	return (
		<div class='container my-5'>
			<Box sx={{ marginTop: "30px" }}>
				<Grid
					container
					spacing={1}
					direction='row'
					justifyContent='space-evenly'>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<DesignServicesIcon sx={{ zIndex: 1000 }} />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Themeable
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								Customize any part of our components to match your design needs.
							</p>
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<NightlightRoundIcon />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Light/Dark
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								Optimized for multiple color modes. Use light or dark, your
								choice.
							</p>
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<SettingsInputCompositeIcon />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Composable
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								Designed with composition in mind. Compose new components with
								ease.
							</p>
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}
					>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<ElectricBoltOutlinedIcon />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Experience
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								Guaranteed to boost your productivity when building your app or
								website.
							</p>
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}
						sx={{ mt: "25px" }}>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<UpdateOutlinedIcon />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Continuous Updates
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								We continually deploy improvements and new updates to Webbee.
							</p>
						</Paper>
					</Grid>
					<Grid
						item
						xs={6}
						sm={6}
						md={6}
						sx={{ mt: "25px" }}>
						<Paper sx={{ p: "1rem", mr: "20px" }}>
							<Fab
								color='success'
								aria-label='add'>
								<FavoriteBorderOutlinedIcon />
							</Fab>
							<h5
								style={{ color: "rgb(45,55,72" }}
								class='my-3'>
								Free support
							</h5>
							<p style={{ color: "rgb(100,110,115" }}>
								6 months of free technical support to help you build your
								website faster.
							</p>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
