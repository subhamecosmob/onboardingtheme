import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import NavBar from "../NavBar";
import Home from "../Home";
import Users from "../Users";

const navBarStyle = {
	height: "100vh",
	display: "flex",
	justifyContent: "center",

	borderRight: "1px solid #cccccc94",
	paddingTop: "0px",
};

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ height: "100vh" }}>
				<Grid container={{ marginTop: "0px" }}>
					<Grid item xs={2} md={2} sx={navBarStyle}>
						<NavBar />
					</Grid>
					<Grid item xs={true} sx={{ padding: "0rem 5rem" }}>
						<Routes>
							<Route path='' element={<Home />} />
							<Route path='Users' element={<Users />} />
						</Routes>
					</Grid>

					<Grid item xs={3} md={3} sx={navBarStyle}>
						<NavBar />
					</Grid>
				</Grid>
			</Box>
		</BrowserRouter>
	);
};

export default App;
