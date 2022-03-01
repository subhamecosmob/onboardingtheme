import { Stack, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

const Stats = ({
	type = "sales",
	percentage,
	value = 200,
	color = "#EEFCEF",

	isAmount = true,
}) => {
	return (
		<Stack
			direction={"row"}
			alignItems={"center"}
			justifyContent={"center"}
			sx={{
				backgroundColor: color,
				borderRadius: "15px 15px 15px 15px",
				boxShadow: "none",
				alignItems: "center",
				width: "50%",
				height: "12rem",
			}}>
			<Stack
				direction={"row"}
				alignItems={"center"}
				justifyContent='space-between'
				spacing={15}>
				<Stack
					direction={"column"}
					alignItems={"center"}
					justifyContent={"space-between"}
					spacing={1}>
					<Typography
						variant='h4'
						sx={{ fontWeight: "700", fontFamily: "unset" }}
						color='#000000cc'>
						{type}
					</Typography>
					<Typography variant='p' color='#000000cc'>
						total {type} today
					</Typography>
					<Typography
						variant='h5'
						sx={{ fontWeight: "700", fontFamily: "unset" }}
						color='#000000cc'>
						{isAmount ? `$ ${value}` : value}
					</Typography>
				</Stack>

				<Box sx={{ position: "relative", display: "inline-flex" }}>
					<CircularProgress
						sx={{ color: "black" }}
						size={80}
						variant='determinate'
						value={percentage}
					/>
					<Box
						sx={{
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							position: "absolute",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}>
						<Typography variant='h7' fontWeight={900} color='black'>
							{`${percentage}%`}
						</Typography>
					</Box>
				</Box>
			</Stack>
		</Stack>
	);
};

export default Stats;
