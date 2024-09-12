import "./globals.css";
import { Andika } from "next/font/google";

const andika = Andika({ subsets: ["latin"], weight: "400" });

export const metadata = {
   title: "ezWebshit",
   description: "",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${andika.className} bg-color-primary text-color-light`}
         >
            {children}
         </body>
      </html>
   );
}
