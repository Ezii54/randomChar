import "./globals.css";
import { Andika } from "next/font/google";

const font = Andika({ subsets: ["latin"], weight: "400" });

export const metadata = {
   title: "ezWebshit",
   description: "Powered by @ezProject-ID",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${font.className} bg-color-primary text-color-light`}
         >
            {children}
         </body>
      </html>
   );
}
