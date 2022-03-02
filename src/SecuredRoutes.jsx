import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useStore from "./hooks/useStore";
import NavBar from "./NavBar";

const SecuredRoutes = () => {
	const { isLogin } = useStore((state) => state.authenticatedUser);

	console.log("rendering");
	return isLogin ? (
		<>
			<NavBar />
			<Outlet />
		</>
	) : (
		<Navigate to='/Login' />
	);
};

export default SecuredRoutes;
