type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
};

export default async function UsersServer() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await response.json();
    // console.log(users);

        return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id} style={{ marginBottom: "3rem" }}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

