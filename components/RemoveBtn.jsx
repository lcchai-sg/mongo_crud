"use client";

import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

export default function RemoveBtn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
        try {
            const confirmed = confirm(`Are you sure to delete topic ${id}?`);
            console.log(`deleteing ${id}`);
            if (confirmed) {
                const res = await fetch(
                    `http://localhost:3000/api/topics/${id}`,
                    {
                        method: "DELETE",
                    }
                );
                if (res.ok) {
                    router.refresh();
                }
            }
        } catch (error) {
            console.log("components/RemoveBtn/RemoveBtn/removeTopic");
            console.log(error);
        }
    };
    return (
        <button onClick={removeTopic} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}
