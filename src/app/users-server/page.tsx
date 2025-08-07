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
            <h1 className="text-4xl mb-8 ">Users</h1>
            <ul className="bg-slate-900 p-8">
                {users.map((user) => (
                    <li key={user.id} style={{ marginBottom: "3rem" }}>
                        <h2 className="text-2xl">{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

