"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const cookieStore = await cookies();
  
  cookieStore.delete("token");
  cookieStore.set("token", "", {
    path: "/",
    maxAge: 0, // สั่งให้ตายทันที
    expires: new Date(0),
  });

  // 3. บังคับให้ Next.js เคลียร์ Cache ของทุกหน้า
  redirect("/login");
}
