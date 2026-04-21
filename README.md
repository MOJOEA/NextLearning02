NextLearning02
Strapi+ Next + React to web Blog 

# Strapi + Next.js (React) Web Blog Project
โปรเจคเว็บแอปพลิเคชันบล็อกแบบ Full-stack ที่รวมระบบจัดการเนื้อหา (CMS) เข้ากับหน้าบ้านที่รวดเร็วและรองรับระบบสมาชิก

# โครงสร้างโปรเจค (Project Structure)
โปรเจคนี้พัฒนาด้วยสถาปัตยกรรมแบบแยกส่วน:
Backend: Strapi Headless CMS (รันบนพอร์ต 1337)
Frontend: Next.js 15 (รันบนพอร์ต 3000)

# เทคโนโลยีที่ใช้
Next.js 15 (App Router): ใช้ Server Components ในการดึงข้อมูลเพื่อประสิทธิภาพสูงสุด
Strapi v5: จัดการ Content Types แบบ Collection (Blogs, Special Blogs, Authors)
Tailwind CSS: สำหรับการออกแบบ UI ที่เป็น Responsive และสะอาดตา
Axios: จัดการการเรียกใช้งาน API
Lucia/Cookies: จัดการระบบ Session และ Authentication

# คุณสมบัติหลัก (Key Features)
Public Blog List: หน้าแรกแสดงรายการบทความทั้งหมดพร้อมรูปภาพ (Thumbnail) และชื่อผู้เขียน (Author)
Dynamic Routing: ระบบหน้ารายละเอียดบล็อกรายตัวโดยใช้ documentId ของ Strapi v5
Special Blogs (Protected Route): หน้าบล็อกพิเศษที่ต้องทำการเข้าสู่ระบบก่อนเท่านั้นจึงจะเข้าถึงข้อมูลได้ (เรียกผ่าน Authorization Bearer Token)
Authentication System:
Login: ระบบล็อกอินที่เชื่อมกับ Strapi API ผ่าน Server Action
Session Management: เก็บ JWT Token ไว้ใน HTTP-only Cookies
Logout: ระบบล้างคุกกี้และเปลี่ยนหน้ากลับสู่หน้าล็อกอิน
Navigation Bar: แถบเมนูอัจฉริยะที่แสดงปุ่ม Login/Logout ตามสถานะการเข้าสู่ระบบจริง

# การติดตั้งและเริ่มใช้งาน
1. ส่วนหลังบ้าน (Strapi)
ติดตั้งด้วยคำสั่ง npx create-strapi@latest my-project --quickstart
ตั้งค่า Permissions ในหน้า Admin (Settings > Roles > Public/Authenticated)
ตรวจสอบให้แน่ใจว่า API ของ Blogs และ Special Blogs เปิดใช้งาน find และ findOne พร้อม populate=*

2. ส่วนหน้าบ้าน (Next.js)
ติดตั้ง Dependencies: npm install axios
ตั้งค่าไฟล์ .env.local:
env
STRAPI_BASE_URL=http://127.0.0.1:1337
รันโปรเจคด้วยคำสั่ง:
cd my-app-blog
npm run dev

3. รันส่วน Backend (Strapi)
เข้าไปในโฟลเดอร์ backend
cd my-strapi-blog
npm run develop

รันโปรเจคด้วยคำสั่ง:
bash
npm run dev

# การจัดการข้อมูลรูปภาพ
รูปภาพทั้งหมดจะถูกดึงมาจาก Strapi Media Library โดยการนำ STRAPI_BASE_URL มาต่อหน้า Path /uploads/... ที่ได้รับจาก API

# อ้างอิงฐานข้อมูลจาก Strapi CMS (ใช้ documentId สำหรับข้อมูลรายตัว):
1. หมวดบทความทั่วไป (Public Blogs)
Get All Blogs: GET /api/blogs?populate=*
ใช้แสดงรายการบล็อกทั้งหมดในหน้า Home
Get Blog Detail: GET /api/blogs/:documentId?populate=*
ใช้แสดงรายละเอียดบล็อกในหน้า /blog/[id]

2. หมวดบทความพิเศษ (Special Blogs - Protected)
Get Special Blogs: GET /api/special-blogs?populate=*
Header: Authorization: Bearer <JWT_TOKEN>
ใช้ดึงข้อมูลบทความสำหรับสมาชิกที่ล็อกอินแล้วเท่านั้น

3. ระบบจัดการสมาชิก (Authentication)
Login: POST /api/auth/local
Payload: { "identifier": "email/username", "password": "password" }
ผลลัพธ์จะได้รับ jwt เพื่อนำไปใช้ในหน้าบทความพิเศษ

# โครงสร้างหน้าเว็บ (Routes)
/ : หน้าหลักแสดงรายการบล็อกทั่วไป
/blog/[id] : หน้ารายละเอียดบทความแต่ละชิ้น
/special-blogs : หน้าบทความพิเศษ (ต้องใช้ Token)
/login : หน้าเข้าสู่ระบบ
/logout : หน้าสำหรับออกจากระบบและล้างคุกกี้