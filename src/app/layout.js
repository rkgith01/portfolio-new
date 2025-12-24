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

// import Providers from "@/components/providers";
// import "./globals.css";
// import { inter, merriweather, montserrat, geistMono } from "../utils/font";
// // lobster,
// // poppins,
// // roboto,
// // geistSans,
// // lavishlyYours,
// // import ColorPicker from "@/components/ColorPicker";

// export const metadata = {
//   title: "raj.dev",
//   description: "Software Engineer",
//   icons: {
//     icon: "/flogo.png",
//   },
// };
// // ${lavishlyYours.variable}
// const fontClasses = `
// ${inter.variable}
// ${montserrat.variable}
// ${merriweather.variable}
// ${geistMono.variable}
// `;
// // ${roboto.variable}
// // ${poppins.variable}
// // ${lobster.variable}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" suppressHydrationWarning={true} className={fontClasses}>
//       <body className={fontClasses}>
//         <Providers>
//           {children}
//           {/* <ColorPicker /> */}
//         </Providers>
//       </body>
//     </html>
//   );
// }

import Providers from "@/components/providers";
import "./globals.css";
import { inter, merriweather, montserrat, geistMono } from "../utils/font";

export const metadata = {
  title: "raj.dev",
  description: "Software Engineer",
  icons: {
    icon: "/flogo.png",
  },
};

const fontClasses = [
  inter.variable,
  montserrat.variable,
  merriweather.variable,
  geistMono.variable,
].join(" ");

// console.log(fontClasses);

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontClasses}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
