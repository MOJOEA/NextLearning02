'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers'
import axios from 'axios';

export async function loginAction(prevState, formData) {
    let loginSuccess = false;

    try {
        const email = formData.get("email");
        const password = formData.get("password");
        
        const res = await axios.post(`${process.env.STRAPI_BASE_URL}/api/auth/local`, {
            identifier: email,
            password
        })

        const cookieStore = await cookies();
        cookieStore.set('token', res.data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 3600,
            path: '/',
        })
        loginSuccess = true;
    } catch (err) {
        console.log('Login Error:', err.response?.data || err.message);
        return { message: err.response?.data?.error?.message || 'Login fail' };
    }
    if (loginSuccess) {
        redirect('/special-blogs'); 
    }
}
