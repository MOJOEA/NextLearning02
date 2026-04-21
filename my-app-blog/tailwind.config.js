/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",     // ครอบคลุมทุกไฟล์ในโฟลเดอร์ app
    "./components/**/*.{js,ts,jsx,tsx}", // ถ้ามีโฟลเดอร์ components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
