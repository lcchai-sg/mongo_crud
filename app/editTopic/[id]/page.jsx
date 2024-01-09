import EditTopicForm from "@/components/EditTopicForm";

export default function EditTopic() {
    return (
        <form className="flex flex-col gap-3">
            <input
                type="text"
                name="title"
                placeholder="Enter topic title"
                className="border border-slate-500 px-5 py-2"
            />
            <textarea
                name="description"
                placeholder="Enter topic description"
                className="border border-slate-500 px-5 py-2"
                rows={5}
            />
            <button className="bg-green-600 font-bold text-white py-3 px-6 w-1/3 rounded-full">
                Update Topic
            </button>
        </form>
    );
}
