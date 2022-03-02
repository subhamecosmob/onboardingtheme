import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Grid, Box } from "@mui/material";
import NavBar from "../NavBar";
import Home from "../Home";
import Users from "../Users";
import SecuredRoutes from "../SecuredRoutes";
import Login from "../Login";
import Logout from "../Logout";

const App = () => {
	return (
		<BrowserRouter>
			<Box sx={{ height: "100vh" }}>
				<Grid container={{ marginTop: "0px" }}>
					<Routes>
						<Route path='login' element={<Login />} />
						<Route element={<SecuredRoutes />}>
							<Route
								path=''
								element={
									<Grid item xs={true} sx={{ padding: "0rem 5rem" }}>
										<Home />
									</Grid>
								}
							/>
							<Route
								path='Users'
								element={
									<Grid item xs={true} sx={{ padding: "0rem 5rem" }}>
										<Users />
									</Grid>
								}
							/>
							<Route path='Logout' element={<Logout />} />
						</Route>
					</Routes>
				</Grid>
			</Box>
		</BrowserRouter>
	);
};

export default App;
