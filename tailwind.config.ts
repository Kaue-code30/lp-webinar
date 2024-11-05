import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#7DB058",
        secondColor:"#FBC709",
        thirdColor:"#001E15",
        textPrimaryColor:"#014C34",
        textSecondColor:"#FFF",
      },
      backgroundImage: {
        'custom-linear': 'linear-gradient(to bottom, #004C34 34%, #1B613C 61%, #458248 100%)', // Gradiente linear de cima para baixo (180 graus)
      },
      height: {
        h100:"100px",
        
      },
      
    },
  },
  plugins: [],
};
export default config;
