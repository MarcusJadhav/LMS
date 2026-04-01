/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
'course-details-heading-small': { fontSize: '26px', lineHeight: '36px' },
'course-details-heading-large': { fontSize: '36px', lineHeight: '44px' },
'home-heading-small': { fontSize: '28px', lineHeight: '34px' },
'home-heading-large': { fontSize: '48px', lineHeight: '56px' },
      },
    },
  },
  plugins: [],
}
