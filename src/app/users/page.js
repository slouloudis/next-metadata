import Link from "next/link"

export const metadata = {
    title: 'Userz user page',
    description: 'See all users on Userz!!!'
}

export default async function Page() {

    const data = await fetch(`https://dummyjson.com/users`)
    const {users} = await data.json()

    console.log(users)

    return (
        <div>
            <h2>Users page</h2>
            {users.map(user => (
                <div key={user.id}>
                    <Link href={`/users/${user.id}`}>{user.firstName}</Link>
                </div>
            ))}
        </div>
    )
}