# NextLearning02
Strapi+ Next + React to web Blog 

# Project Name: Strapi + Next.js + React Web Blog
โปรเจคนี้คือเว็บแอปพลิเคชันรูปแบบบล็อก (Blog) ที่สร้างขึ้นด้วยการแยกส่วนระหว่าง Backend และ Frontend เพื่อประสิทธิภาพและความยืดหยุ่นในการจัดการเนื้อหา

# เทคโนโลยีที่ใช้
Strapi (Headless CMS): ทำหน้าที่เป็นระบบหลังบ้านสำหรับจัดการฐานข้อมูล บทความ หมวดหมู่ และระบบจัดการผู้เขียน มีอินเทอร์เฟซที่ใช้งานง่ายสำหรับ Admin
Next.js (React Framework): ทำหน้าที่เป็นระบบหน้าบ้าน ใช้คุณสมบัติ Server-side Rendering (SSR) หรือ Static Site Generation (SSG) เพื่อให้การโหลดหน้าเว็บรวดเร็วและดีต่อ SEO
React: ห้องสมุดหลักในการสร้าง User Interface (UI) ที่มีการตอบสนองแบบ Component-based

# คุณสมบัติหลัก
ระบบจัดการบทความ (สร้าง, อ่าน, แก้ไข, ลบ)
การคัดกรองบทความตามหมวดหมู่ (Categories) หรือแท็ก (Tags)
รองรับการทำ SEO เบื้องต้นด้วย Metadata จาก Next.js
การจัดการรูปภาพผ่าน Strapi Media Library
ดีไซน์ที่รองรับการใช้งานผ่านมือถือ (Responsive Design)

# การติดตั้งและเริ่มต้นใช้งาน
1. ส่วนของ Backend (Strapi)
เข้าไปในโฟลเดอร์ backend:
bash
cd backend
npm install
npm run develop

2. ส่วนของ Frontend (Next.js)
เข้าไปในโฟลเดอร์ frontend:
bash
cd frontend
npm install
npm run dev
