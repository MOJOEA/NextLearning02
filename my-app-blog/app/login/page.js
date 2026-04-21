"use client"
import { useActionState } from "react";
import { loginAction } from "./action";

export default function LoginPage() {
    const [state, formAction] = useActionState(loginAction, { message: null });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <form action={formAction} className="p-6 bg-white border border-blue-400 rounded-xl shadow-md w-full max-w-sm text-gray-900">
                <h1 className="text-xl font-bold mb-4 text-center">LOGIN SYSTEM</h1>
                
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded focus:outline-blue-400"
                    required
                />
                
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 mb-2 border rounded focus:outline-blue-400"
                    required
                />

                {state?.message && <p className="text-red-500 text-xs mb-3">{state.message}</p>}

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded font-bold hover:bg-blue-600 transition-colors">
                    SIGN IN
                </button>
            </form>
        </div>
    );
}
