import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const fetchBlog = async (id) => {
  try {
    const res = await axios.get(`${process.env.STRAPI_BASE_URL}/api/blogs/${id}?populate=*`)
    return res.data.data
  } catch (error) {
    console.log('error', error)
    return null
  }
}

export default async function Home({ params }) {
  const { id } = await params;
  const blog = await fetchBlog(id)

  if (!blog) return <div className="p-8 text-gray-900">Blog not found</div>

  const imageUrl = blog.thumbnail 
    ? `${process.env.STRAPI_BASE_URL}${blog.thumbnail.url}` 
    : null;

  return (
    <div className="p-8 bg-gray-900 min-h-screen flex justify-center text-gray-900">
      <div className="bg-white border border-blue-400 rounded-xl overflow-hidden flex flex-col w-full max-w-3xl shadow-lg">
        
        <div className="flex flex-col md:flex-row h-auto min-h-[400px]">
          <div className="w-full md:w-1/2 relative bg-gray-200 min-h-[250px]">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Image
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-8 flex flex-col justify-start">
            <span className="text-blue-500 text-xs font-semibold uppercase tracking-wider mb-2">Blog Detail</span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{blog.title}</h1>
            
            {blog.author && (
              <p className="text-sm text-blue-600 mb-4 font-medium">By: {blog.author.name}</p>
            )}

            <p className="text-gray-600 text-lg leading-relaxed mb-6">{blog.description}</p>
            
            <div className="mt-auto pt-6 border-t border-gray-100">
              <p className="text-xs text-gray-400 font-mono">Document ID: {blog.documentId}</p>
              <p className="text-xs text-gray-400">Published: {new Date(blog.publishedAt).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        <div className="flex h-16 w-full border-t border-gray-100">
          <Link href="/" className="flex-1 flex">
            <button className="w-full bg-gray-400 text-white font-bold transition-colors hover:bg-gray-500 border-r border-white">
              BACK TO HOME
            </button>
          </Link>
          <button className="flex-1 bg-gray-500 text-white font-bold transition-colors hover:bg-gray-600">
            SHARE BLOG
          </button>
        </div>

      </div>
    </div>
  );
}
