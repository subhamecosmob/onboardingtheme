import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import useStore from "../hooks/useStore";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton, Stack } from "@mui/material";

export default function Users() {
	let store = useStore((state) => state);

	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 90,
			valueGetter: (params) => `${params.row.id}`,
		},
		{
			field: "fullName",
			headerName: "Full name",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) => `${params.row.name}`,
		},
		{
			field: "Username",
			headerName: "Username",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) => `${params.row.username}`,
		},
		{
			field: "Phone number",
			headerName: "phone No.",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			valueGetter: (params) => `${params.row.phone}`,
		},
		{
			field: "Actions",
			headerName: "Actions",
			description: "This column has a value getter and is not sortable.",
			width: 160,
			renderCell: (cellValues) => {
				return store.authenticatedUser.write ? (
					<IconButton
						color='primary'
						aria-label='upload picture'
						component='span'
						size='small'
						onClick={(event) => {
							event.stopPropagation();

							store.removeUser(cellValues.row.id);
						}}>
						<DeleteOutlinedIcon />
					</IconButton>
				) : (
					""
				);
			},
		},
	];

	return (
		<Stack
			sx={{ height: "100%" }}
			alignItems={"center"}
			direction='column'
			justifyContent={"center"}>
			<div style={{ height: "70%", width: "100%" }}>
				<DataGrid
					rows={store.users}
					columns={columns}
					pageSize={10}
					rowsPerPageOptions={[5]}
					checkboxSelection
					disableSelectionOnClick
				/>
			</div>
		</Stack>
	);
}
