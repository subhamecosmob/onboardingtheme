import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import { Stack, Typography } from "@mui/material";

import "./home.css";
import { Box } from "@mui/system";
import OverView from "./OverView";
import Stats from "./Stats";

const Home = () => {
	return (
		<>
			<div className='header'>
				<Paper
					component='form'
					sx={{
						border: "1px solid #cccccc94",
						borderRadius: "15px 15px 15px 15px",
						boxShadow: "none",
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}>
					<IconButton sx={{ p: "10px" }} aria-label='menu'>
						<SearchOutlinedIcon />
					</IconButton>
					<InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' />
				</Paper>
			</div>

			<Stack direction={"column"} spacing={3}>
				<div className='second_heading'>
					<Stack
						direction='row'
						alignItems={"center"}
						justifyContent={"space-between"}
						className='secondary-heading'>
						<Box>
							<Typography
								variant='h4'
								sx={{ fontFamily: "unset", fontWeight: "900" }}>
								Hello shubham
							</Typography>
							<Typography
								variant='h6'
								sx={{ color: "#A7A7A7", fontWeight: "700" }}>
								Welcome Back !
							</Typography>
						</Box>
						<Box
							sx={{
								border: "1px solid #cccccc94",
								borderRadius: "15px 15px 15px 15px",
								boxShadow: "none",
								padding: ".1rem 1rem",
								display: "flex",
								alignItems: "center",
								width: 150,
							}}>
							<Stack
								width='100%'
								justifyContent='space-between'
								alignItems='center'
								direction={"row"}>
								<Typography
									variant='p'
									sx={{ color: "#A7A7A7", fontWeight: "700" }}>
									Filter
								</Typography>
								<IconButton aria-label='menu'>
									<TuneOutlinedIcon />
								</IconButton>
							</Stack>
						</Box>
					</Stack>
				</div>
				<div className='overview-container'>
					<OverView />
				</div>
				<div className='third-container'>
					<Stack direction={"column"} spacing={3}>
						<Stack
							direction={"row"}
							justifyContent='space-between'
							alignItems={"center"}
							spacing={2}>
							<Stats type='Sales' percentage={80} value={200} color='#EEFCEF' />
							<Stats
								type='Profit'
								percentage={70}
								value={3200}
								color='#FEEEE2'
							/>
						</Stack>
						<Stack
							direction={"row"}
							justifyContent='space-between'
							alignItems={"center"}
							spacing={2}>
							<Stats
								type='Orders'
								percentage={40}
								value={2200}
								color='#E5F5FA'
								isAmount={false}
							/>
							<Stats
								type='Visits'
								percentage={60}
								value={1200}
								color='#F4F5F9'
								isAmount={false}
							/>
						</Stack>
					</Stack>
				</div>
			</Stack>
		</>
	);
};

export default Home;
