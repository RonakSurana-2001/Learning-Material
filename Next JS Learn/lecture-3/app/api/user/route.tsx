import { NextRequest, NextResponse } from "next/server";
import client from "@/db"


export async function GET(){
    const user = await client.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    try{
        await client.user.create({
            data:{
                username:body.username,
                password:body.password
            }
        });
        return NextResponse.json({ username: body.username, password: body.password })
    } catch(e){

    }
}
