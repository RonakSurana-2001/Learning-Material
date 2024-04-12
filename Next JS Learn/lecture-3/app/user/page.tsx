import axios from "axios";
import client from "@/db"



async function fetchuser() {
    const user = await client.user.findFirst({});
    return { name: user?.username, email: user?.username }
}

export default async function User(){
    const data=await fetchuser();
    return (
        <>
        <div>
            {data.name}
            {data.email}
        </div>
        </>
    )
}