import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const token = request.cookies.get('token');
    if (!token) {
      throw new Error('No token found');
    }

    const res = await fetch(`${process.env.STRAPI_BASE_URL}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token.value}`
      }
    });

    if (!res.ok) {
      throw new Error('Invalid login file');
    }
    const resJSON = await res.json();
    const reqHeaders = new Headers(request.headers);
    reqHeaders.set('users', JSON.stringify({ email: resJSON.email }));

    return NextResponse.next({
      request: {
        headers: reqHeaders
      }
    });
  } catch (error) {
    console.log('Middleware Error:', error.message);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/manage', '/special-blogs/:path*'],
};
