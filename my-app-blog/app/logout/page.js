"use client"
import { useEffect } from "react";
import { logoutAction } from "./action";

export default function LogoutPage() {
  useEffect(() => {
    logoutAction();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <p className="animate-pulse">Logging out...</p>
    </div>
  );
}
