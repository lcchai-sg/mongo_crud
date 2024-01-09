import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json(
            { message: "Topic is deleted." },
            { status: 200 }
        );
    } catch (error) {
        console.log("api/topics/route/[id]/DELETE error");
        console.log(error);
    }
}

export async function GET(req, { params }) {
    try {
        const { id } = params;
        await connectMongoDB();
        const topic = await Topic.findById(id);
        return NextResponse.json({ topic }, { status: 200 });
    } catch (error) {
        console.log("api/topics/route/[id]/GET error");
        console.log(error);
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = params;
        const { title, description } = await req.json();
        await connectMongoDB();
        const topic = await Topic.findByIdAndUpdate(id, { title, description });
        return NextResponse.json(
            { message: "Topic updated." },
            { status: 200 }
        );
    } catch (error) {
        console.log("api/topics/route/[id]/PUT error");
        console.log(error);
    }
}
