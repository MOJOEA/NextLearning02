// import type { Core } from '@strapi/strapi';
export default {
  register({ strapi }: { strapi: any }) {
  strapi.server.use(async (ctx: any, next: any) => {
    if (ctx.header.key) {
      // ตัวอย่าง: เช็คว่า key ตรงกับที่เราตั้งไว้ใน .env ไหม
      const validApiKey = process.env.MY_CUSTOM_API_KEY; 
      
      if (ctx.header.key === validApiKey) {
        // ถ้า key ถูกต้อง ให้ผ่านไปได้ (อาจจะจำลองเป็นสิทธิ์ Admin หรือ Public ตามใจคุณ)
        // ctx.header.authorization = 'Bearer ...'; 
      } else {
        // ถ้า key ไม่ถูกต้อง สั่งหยุดและตอบกลับ 401 ทันที
        // ctx.throw(401, 'Invalid API Key');
      }
    }
    await next();
  });
},
};
