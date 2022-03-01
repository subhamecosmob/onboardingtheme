import React from "react";
import { Link, NavLink } from "react-router-dom";

import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import "./style.css";

const NavBar = () => {
	return (
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
			</ul>
		</div>
	);
};

export default NavBar;
