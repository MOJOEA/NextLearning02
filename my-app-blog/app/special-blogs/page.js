import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { cookies, headers } from 'next/headers'

const fetchSpecialBlogs = async (token) => {
  try {
    const res = await axios.get(`${process.env.STRAPI_BASE_URL}/api/special-blogs?populate=*`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    )
    return res.data.data
  } catch (error) {
    console.log('error', error.response?.data || error.message)
    return []
  }
}

export default async function Home() {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')
  const headerList = headers()
  const user = JSON.parse((await headerList).get('users'))

  if (!token) {
    return (
      <div className="p-8 bg-gray-900 min-h-screen text-gray-200">
        <h1 className="text-2xl font-bold mb-4">Please Login</h1>
        <Link href="/login" className="text-blue-400 underline">Go to Login Page</Link>
      </div>
    )
  }

  const blogs = await fetchSpecialBlogs(token.value)
  
  return (
    <div className="p-8 bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-200">Home page Blogs</h1>
      <h1 className="text-2xl font-bold mb-6 text-gray-200">Hello {user.email}</h1>
      <div className="grid gap-6">
        {blogs.map((blog) => {
          const imageUrl = blog.thumbnail 
            ? `${process.env.STRAPI_BASE_URL}${blog.thumbnail.url}` 
            : null;

          return (
            <div key={blog.id} className="bg-white border text-gray-900 rounded-lg overflow-hidden flex flex-col w-full max-w-2xl shadow-sm">
              
              <div className="flex h-48 border-b border-gray-100">
                <div className="w-1/3 relative bg-gray-200">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </div>

                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <h2 className="text-xl font-bold text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{blog.description}</p>
                  
                  {blog.author && (
                    <span className="text-xs text-blue-500 mt-2 font-semibold">
                      By: {blog.author.name}
                    </span>
                  )}
                  <span className="text-[10px] text-gray-400 mt-1 font-mono">ID: {blog.documentId}</span>
                </div>
              </div>

              <div className="flex h-16 w-full border-t border-gray-100">
                <Link href={`/blog/${blog.documentId}`} 
                  className="flex-1 bg-gray-400 text-white text-sm font-medium flex items-center justify-center transition-colors hover:bg-gray-500 border-r border-white">
                  See more
                </Link>
                <button className="flex-1 bg-gray-400 text-white text-sm font-medium hover:bg-gray-500 border-r border-white">Button 2</button>
                <button className="flex-1 bg-gray-400 text-white text-sm font-medium hover:bg-gray-500">Button 3</button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}
