import { useFetch } from "../hooks/useFetch";

const UserList = () => {
	const {
		data: users,
		isLoading,
		errorMessage,
	} = useFetch(`https://jsonplaceholder.typicode.com/users?_limit=5`, []);
	return (
		<div>
			<h2>All Users</h2>
			{isLoading && <h3>Loading....</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			<ul>
				{users.map((user) => (
					<li>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
