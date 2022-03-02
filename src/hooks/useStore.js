import create from "zustand";
import usersDetails from "../users.json";

const removeUser = (users, id) => users.filter((user) => user.id !== id);

const useStore = create((set) => ({
	users: usersDetails,
	authenticatedUser: { isLogin: false, name: null, write: false },
	removeUser: (id) =>
		set((state) => ({
			...state,
			users: removeUser(state.users, id),
		})),
	setAuthDetails: (isLogin, name, write = false) => {
		set((state) => ({
			...state,
			authenticatedUser: { isLogin, name, write },
		}));
	},
}));

export default useStore;
