import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUser } from "../store/middlewares";
import { fetchUserList } from "../store/reducers/user";

const UserList = () => {
	const { isLoading, users, errorMessage } = useSelector(
		(storeState) => storeState.user,
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserList());
	}, []);
	return (
		<div>
			<h2>All Posts</h2>
			{isLoading && <h2>Loading....</h2>}
			{errorMessage && <p>{errorMessage}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
