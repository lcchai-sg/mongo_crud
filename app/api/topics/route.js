import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { title, description } = await req.json();
        await connectMongoDB();
        await Topic.create({ title, description });
        return NextResponse.json(
            { message: "Topic created." },
            { status: 201 }
        );
    } catch (error) {
        console.log("api/topics/route/POST error");
        console.log(error);
    }
}

export async function GET() {
    try {
        await connectMongoDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics }, { status: 200 });
    } catch (error) {
        console.log("api/topics/route/GET error");
        console.log(error);
    }
}
