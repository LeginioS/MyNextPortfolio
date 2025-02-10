import { Poppins } from "next/font/google";
import "boxicons/css/boxicons.min.css";
import "./globals.css";
import {Header} from "../components/header"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "My NextJS Portifólio"
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
         
      <body className={`${poppins.variable} `}>
      <Header/>
         <main>{children}</main>
      </body>
    </html>
  );
}
