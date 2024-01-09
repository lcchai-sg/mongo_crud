import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>
                E2C2 Coding
            </Link>
            <Link
                className="bg-white p-2 rounded-full text-blue-800 font-bold"
                href={"/addTopic"}
            >
                Add Topic
            </Link>
        </nav>
    );
}
