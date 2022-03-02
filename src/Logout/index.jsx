import { NavigationSharp } from "@mui/icons-material";
import React from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../hooks/useStore";

const Logout = () => {
	let logout = useStore((state) => state.setAuthDetails);
	logout(false, null, false);
	return null;
};

export default Logout;
