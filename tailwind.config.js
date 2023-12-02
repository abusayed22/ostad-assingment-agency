/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        lemon: "#d7f5dc",
        green: "#20b15a",
        red: "#f55f1d",
      },
    },
    
    screens: {
      "xl": "1200px",
      "v_lg": "1024px",
      "lg": "900px",
      "md": "768px",
      "v_md": "600px",
      "sm": "480px",
      "v_sm":"320px"
    },
  },
  
  plugins: [],
}
