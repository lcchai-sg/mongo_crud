"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ title, description });

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });
            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create new topic!");
            }
        } catch (error) {
            console.log("app/addTopic/page/AddTopic/handleSubmit error");
            console.log(error);
        }
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Enter topic title"
                className="border border-slate-500 px-5 py-2"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />
            <textarea
                name="description"
                placeholder="Enter topic description"
                className="border border-slate-500 px-5 py-2"
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
            />
            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-1/3 rounded-full"
            >
                Add Topic
            </button>
        </form>
    );
}
