import { Button, Stack, TextField, Typography } from "@mui/material";

import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../hooks/useStore";

import "./style.css";

const fakeUsers = [
	{ username: "mayur", password: "12345", write: true },
	{ username: "subham", password: "12345", write: false },
];

const Login = () => {
	const setAuthDetails = useStore((state) => state.setAuthDetails);

	const [formDetails, setFormDetails] = useState({
		username: "",
		password: "",
	});
	let navigate = useNavigate();
	const onSubmit = (e) => {
		e.preventDefault();
		if (formDetails.username && formDetails.password) {
			const userdetails = fakeUsers.find(
				(fakeUser) =>
					fakeUser.password === formDetails.password &&
					fakeUser.username === formDetails.username.toLowerCase()
			);

			if (userdetails) {
				setAuthDetails(true, formDetails.username, userdetails.write);
				navigate("/");
				return;
			} else {
				window.alert(JSON.stringify(fakeUsers));
			}
		}
	};

	return (
		<Stack
			direction={"row"}
			sx={{ width: "100%", height: "100vh" }}
			justifyContent={"center"}
			alignItems={"center"}>
			<Box
				sx={{
					width: "30%",
					height: 300,
					border: "1px solid #cccccc94",
					borderRadius: "2rem",
					padding: "2rem",
				}}>
				<form onSubmit={onSubmit}>
					<Stack direction={"column"} spacing={2}>
						<Stack direction={"column"} spacing={1}>
							<label htmlFor='username'>
								<Typography variant='h7'>Username</Typography>
							</label>
							<input
								type='text'
								value={formDetails.username}
								onChange={(e) =>
									setFormDetails((state) => {
										return { ...state, username: e.target.value };
									})
								}
								placeholder='username'
							/>
						</Stack>
						<Stack direction={"column"} spacing={1}>
							<label htmlFor='username'>
								<Typography variant='h7'>Password</Typography>
							</label>
							<input
								value={formDetails.password}
								onChange={(e) =>
									setFormDetails((state) => {
										return { ...state, password: e.target.value };
									})
								}
								type='password'
								placeholder='password'
							/>
						</Stack>
						<Stack direction={"column"} spacing={1}>
							<Button
								sx={{
									borderRadius: "10px",
									border: "1px solid #cccccc94",
									backgroundColor: "#fff",
									color: "black",
									"&:hover": {
										color: "black",
										backgroundColor: "#cccccc94",
									},
								}}
								type='submit'
								disabled={
									formDetails.username && formDetails.password ? false : true
								}
								disableElevation
								name='login'
								variant='contained'>
								Login
							</Button>
						</Stack>
					</Stack>
				</form>
			</Box>
		</Stack>
	);
};

export default Login;
