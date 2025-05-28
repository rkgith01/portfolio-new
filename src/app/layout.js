// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Providers from "./providers";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "raj.dev",
//   description: "Software Engineer",
//   icons: {
//     icon: "/flogo.png",
//   },
// };
// export default function RootLayout({ children }) {
//   return (
//     // <html lang="en">
//     <html lang="en" className="dark">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Providers>{children}</Providers>
//       </body>
//     </html>
//   );
// }

import Providers from "@/components/providers";
import {
  lavishlyYours,
  lobster,
  inter,
  poppins,
  roboto,
  merriweather,
  montserrat,
  geistSans,
  geistMono,
} from "../utils/font";
import "./globals.css";

export const metadata = {
  title: "raj.dev",
  description: "Software Engineer",
  icons: {
    icon: "/flogo.png",
  },
};
const fontClasses = `${inter.variable} ${lobster.variable} ${lavishlyYours.variable} ${poppins.variable} ${roboto.variable} ${merriweather.variable} ${montserrat.variable} ${geistSans.variable} ${geistMono.variable}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className={fontClasses}>
      <body className={fontClasses}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
