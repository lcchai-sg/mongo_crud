"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({ newTitle, newDescription });

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    title: newTitle,
                    description: newDescription,
                }),
            });
            if (!res.ok) {
                throw new Error("Failed to update topic!");
            } else {
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(
                "components/EditTopicForm/EditTopicForm/handleSubmit error"
            );
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                type="text"
                name="title"
                placeholder="Enter topic title"
                className="border border-slate-500 px-5 py-2"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
                name="description"
                placeholder="Enter topic description"
                className="border border-slate-500 px-5 py-2"
                rows={5}
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
            />
            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-1/3 rounded-full"
            >
                Update Topic
            </button>
        </form>
    );
}
