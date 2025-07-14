
// it can also get params
export async function generateMetadata({params}) {
    const {id} = await params

    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const userDetials = await res.json()

    return {
        title: `${userDetials.firstName}'s page on Userz!`,
        description: `Wow this user has given us a lot of information. Please don't call them on ${userDetials.phone}`,
        openGraph: {
            description: `View ${userDetials.firstName} ${userDetials.lastName}'s profile on Userzs now. Sign up today!`
        } 
    }
}

export default async function Page({params}) {

    const {id} = await params

    const res = await fetch(`https://dummyjson.com/users/${id}`)
    const userDetials = await res.json()
    return (
        <div>
            <h2>{userDetials.firstName} {userDetials.lastName}</h2>
            <p>{userDetials.company.department}</p>
        </div>
    )
}