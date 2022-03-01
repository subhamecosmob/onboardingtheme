import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";

import Avatar from "@mui/material/Avatar";

import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";

const OverView = () => {
	return (
		<Stack
			direction='row'
			justifyContent={"space-around"}
			spacing={4}
			sx={{
				backgroundColor: "#F9F8F3",
				borderRadius: "15px 15px 15px 15px",
				boxShadow: "none",
				alignItems: "center",
				width: "100%",
				height: "12rem",
			}}>
			<Box
				sx={{
					boxShadow: "none",
					padding: ".1rem 1rem",
					display: "flex",
					alignItems: "center",

					height: "70%",
				}}>
				<Stack direction={"column"} spacing={1} justifyContent={"center"}>
					<Avatar sx={{ backgroundColor: "#cccccc94" }}>
						<SearchOutlinedIcon sx={{ color: "black" }} />
					</Avatar>
					<Typography variant='p' color='#000000cc'>
						views
					</Typography>
					<Typography
						variant='h3'
						sx={{ fontWeight: "700", fontFamily: "unset" }}
						color='#000000cc'>
						2000
					</Typography>
					<Typography variant='p' color='#000000cc'>
						per day
					</Typography>
				</Stack>
			</Box>
			<Box
				sx={{
					boxShadow: "none",
					padding: ".1rem 1rem",
					display: "flex",
					alignItems: "center",

					height: "70%",
				}}>
				<Stack direction={"column"} spacing={1} justifyContent={"center"}>
					<Avatar sx={{ backgroundColor: "#cccccc94" }}>
						<MyLocationOutlinedIcon sx={{ color: "black" }} />
					</Avatar>
					<Typography variant='p' color='#000000cc'>
						views
					</Typography>
					<Typography
						variant='h3'
						sx={{ fontWeight: "700", fontFamily: "unset" }}
						color='#000000cc'>
						1000
					</Typography>
					<Typography variant='p' color='#000000cc'>
						per day
					</Typography>
				</Stack>
			</Box>
			<Box
				sx={{
					boxShadow: "none",
					padding: ".1rem 1rem",
					display: "flex",
					alignItems: "center",

					height: "70%",
				}}>
				<Stack direction={"column"} spacing={1} justifyContent={"center"}>
					<Avatar sx={{ backgroundColor: "#cccccc94" }}>
						<HouseSidingOutlinedIcon sx={{ color: "black" }} />
					</Avatar>
					<Typography variant='p' color='#000000cc'>
						Orders
					</Typography>
					<Typography
						variant='h3'
						sx={{ fontWeight: "700", fontFamily: "unset" }}
						color='#000000cc'>
						5000
					</Typography>
					<Typography variant='p' color='#000000cc'>
						per day
					</Typography>
				</Stack>
			</Box>
		</Stack>
	);
};

export default OverView;
