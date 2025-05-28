import {
  Inter,
  Poppins,
  Roboto,
  Merriweather,
  Montserrat,
  Lobster,
  Lavishly_Yours,
  Geist,
  Geist_Mono,
} from "next/font/google";

const lavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lavishly-yours",
  display: "swap",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lobster",
  display: "swap",
});

// Load fonts with CSS variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export {
  lavishlyYours,
  lobster,
  inter,
  poppins,
  roboto,
  merriweather,
  montserrat,
  geistSans,
  geistMono,
};
