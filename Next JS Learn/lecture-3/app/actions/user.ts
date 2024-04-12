"use server"

import client from "@/db"

async function solve(userName:string,passwordP:string){
    try{
        await client.user.create({
            data:{
                username:userName,
                password:passwordP
            }
        });
        return "Signed Up"

    } catch(e){

    }
    return { username: userName, password: passwordP }
}

export default solve