"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ token }) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex gap-6 italic font-bold text-lg">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/" className="hover:text-blue-400 transition">Blog</Link>
        <Link href="/special-blogs" className="hover:text-blue-400 transition">Special Blogs</Link>
        <Link href="/login" className="hover:text-blue-400 transition">Login</Link>
      </div>

      <div className="flex gap-4 items-center font-medium text-white">
        {!token ? (
            <Link 
            href="/login" 
            className="bg-blue-600 px-4 py-1.5 rounded hover:bg-blue-700 transition"
            >
            Login
            </Link>
        ) : (
            <Link 
            href="/logout" 
            className="bg-red-500 px-4 py-1.5 rounded hover:bg-red-600 transition"
            >
            Logout
            </Link>
        )}
        </div>
    </nav>
  );
}
