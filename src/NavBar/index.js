import React from "react";
import { Link, NavLink } from "react-router-dom";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./style.css";
import { Grid } from "@mui/material";
import { Logout } from "@mui/icons-material";

const navBarStyle = {
	height: "100vh",
	display: "flex",
	justifyContent: "center",

	borderRight: "1px solid #cccccc94",
	paddingTop: "0px",
};

const NavBar = () => {
	return (
		<Grid item xs={2} md={2} sx={navBarStyle}>
			{" "}
			<div className='navbar'>
				<div className='heading'>
					<div className='dots-container'>
						<div className='dots'></div>
						<div className='dots'></div>
					</div>
				</div>
				<ul>
					<li>
						<NavLink
							to=''
							className={({ isActive }) =>
								isActive ? "navLink activeLink" : "navLink"
							}>
							<div className='navitem-container'>
								<HomeOutlinedIcon /> <span>Home</span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='Users'
							className={({ isActive }) =>
								isActive ? "navLink activeLink" : "navLink"
							}>
							<div className='navitem-container'>
								<PersonOutlinedIcon /> <span>Users</span>
							</div>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='Logout'
							className={({ isActive }) =>
								isActive ? "navLink activeLink" : "navLink"
							}>
							<div className='navitem-container'>
								<Logout /> <span>Logout</span>
							</div>
						</NavLink>
					</li>
				</ul>
			</div>
		</Grid>
	);
};

export default NavBar;
