import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-lg mx-auto text-center p-10">
      <h1 className="text-4xl font-bold text-[#031633] mb-3">Welcome to Clio</h1>
      <p className="text-gray-600 mb-6">Your ultimate legal practice management software.</p>
      <div className="flex justify-center gap-4">
        <Link href="/signup">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold transition hover:bg-blue-600">
            Sign Up
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md font-semibold transition hover:bg-gray-400">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}