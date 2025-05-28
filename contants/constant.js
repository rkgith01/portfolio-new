import {
  RiCodepenFill,
  RiGithubFill,
  RiUser3Line,
  RiStarFill,
  RiCircleFill,
  RiChatSmile2Line,
  RiGithubLine,
} from "react-icons/ri";
import { CgToolbarRight } from "react-icons/cg";
import { TbWorld } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";

let links = [
  { url: "/", title: "Hello!", icon: RiStarFill },
  { url: "/about", title: "About", icon: RiUser3Line },
  { url: "/portfolio", title: "Portfolio", icon: CgToolbarRight },
  { url: "/contact", title: "Contact", icon: RiChatSmile2Line },
];

const solinks = [
  { url: "https://github.com/rkgith01", title: "Github", icon: RiGithubFill },
  { url: "https://codepen.io/rkgith01", title: "Codepen", icon: RiCodepenFill },
  {
    url: "https://buymeacoffee.com/rajkapadiat",
    title: "BuymeCoffee",
    icon: SiBuymeacoffee,
  },
];

// about image
// let navLogo = "/navlogo.png";
// let daLogo = "/hero/da.png";
// let daLogo2 = "/hero/da2.png";
// let footerLogo = "/logo4.png";
let heroImg3 = "/hero/heroImg3.png";
let heroImg1 = "/hero/heroImg1.png";
let heroImg2 = "/hero/heroImg2.png";
let heroImg = "/hero/heroImg.webp";
let favLogo = "/flogo.png";
let heroLogo = "/hero/heroLogo3.png";
let heroLogo2 = "/hero/herologo2.png";
let mainLogo = "/hero/mainlogo.png";
let mainLogo2 = "/hero/mainlogo2.png";

const icons = {
  commonIcon: RiGithubLine,
  webIcon: TbWorld,
};

let baseImageUrl =
  "https://raw.githubusercontent.com/rkgith01/media/refs/heads/main/All%20Folders/";

// theme color
let light =
  "bg-gradient-to-r from:bg-blue-200 via:bg-cyan-400 to:bg-yellow-500 text-gray-50";
// "bg-yellow-600 text-black"
let dark = "dark:bg-[#2c2c2c]  dark:text-gray-100";

const calculateReadingTime = (content) => {
  const words = content.split(/\s+/);

  const wordCount = words.length;

  const averageReadingSpeed = 125;

  const readingTime = Math.ceil(wordCount / averageReadingSpeed);

  return readingTime;
};
const getImages = (folder, filenames) =>
  filenames.map((name) => `${baseImageUrl}${folder}/${name}`);

const stringToRead = [
  "Raj Kapadia.",
  "a Software Developer.",
  "a Mobile App Developer.",
];

const bottomBtn = (
  <div className="flex justify-center gap-2 p-3">
    <RiCircleFill className="p-0.8" />
    <RiCircleFill className="p-0.8" />
    <RiCircleFill className="p-0.8" />
  </div>
);

// post footer data
const footer = {
  title: "Raj Kapadia",
  intro:
    "Raj Kapadia is an ambitious software developer, an enthusiastic learner, and a devoted team player. With a strong foundation in coding principles and a passion for innovation, Raj is eager to leverage his problem-solving skills to contribute to challenging projects. He is an active participant in several open-source communities and is dedicated to continuous learning and growth.",
  vLink1: "/",
  vLink2: "https://rajkapadia-dev.vercel.app/",
};

// certificate
const certificateData = [
  {
    title: "Responsive Web Design Certification",
    link: "https://freecodecamp.org/certification/rkworld09/responsive-web-design",
    src: `${baseImageUrl}certi/certi_1.png`,
  },
  {
    title: "JavaScript Algorithms and Data Structures Certification",
    link: "https://www.freecodecamp.org/certification/rkworld09/javascript-algorithms-and-data-structures",
    src: `${baseImageUrl}certi/certi_2.png`,
  },
  {
    title: "Front End Development Libraries Certification",
    link: "https://www.freecodecamp.org/certification/rkworld09/front-end-development-libraries",
    src: `${baseImageUrl}certi/certi_3.png`,
  },
  {
    title: "Back End Development and APIs Certification",
    link: "https://www.freecodecamp.org/certification/rkworld09/back-end-development-and-apis",
    src: `${baseImageUrl}certi/certi_4.png`,
  },
  {
    title: "Data Visualization Certification",
    link: "https://www.freecodecamp.org/certification/rkworld09/data-visualization",
    src: `${baseImageUrl}certi/certi_5.png`,
  },
];

// project data
const categories = [
  {
    title: "currency API",
    // subTitle: "currency-API",
    linkTitle: "currency-API",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "An API providing data on currencies and cryptocurrencies from various sources. Access currency and crypto data through different endpoints. Rate limits apply.",
    // images: [
    //   `${baseImageUrl}currency-api/currency_1.png`,
    //   `${baseImageUrl}currency-api/currency_2.png`,
    //   `${baseImageUrl}currency-api/currency_3.png`,
    // ],
    images: getImages("currency-api", [
      "currency_1.png",
      "currency_2.png",
      "currency_3.png",
    ]),

    category: "Back-End",
    technologies: [
      "Express",
      "Axios",
      "Cheerio",
      "Bootstrap",
      "Node.js",
      "RapidAPI",
    ],
    projectLink: "https://rapidapi.com/rkgith01/api/currency-api10",
    githubLink: "https://github.com/rkgith01/currency-api",
  },
  {
    title: "Stock API",
    // subTitle: "Stock-API",
    linkTitle: "Stock-API",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This API provides data on stocks list blog and canadian stock market best perfomrming stocks market data from tmx as source.",
    // images: [
    //   `${baseImageUrl}stock-api/stock_1.png`,
    //   `${baseImageUrl}stock-api/stock_2.png`,
    //   `${baseImageUrl}stock-api/stock_3.png`,
    // ],
    images: getImages("stock-api", [
      "stock_1.png",
      "stock_2.png",
      "stock_3.png",
    ]),
    category: "Back-End",
    technologies: [
      "Express",
      "Axios",
      "Cheerio",
      "Bootstrap",
      "Node.js",
      "RapidAPI",
    ],
    projectLink: "https://rapidapi.com/rkgith01/api/stock-api16",
    githubLink: "https://github.com/rkgith01/stock-api",
  },
  {
    title: "Time Stamp Microservice",
    // subTitle: "Stock-API",
    linkTitle: "time-stamp-microservice",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This is time stamp microserice project build with node-js, express, css and html, where valid date requests return Unix timestamps and UTC formatted dates",
    // images: [
    //   `${baseImageUrl}tsmc/tsmicro_2.png`,
    //   `${baseImageUrl}tsmc/tsmicro_3.png`,
    //   `${baseImageUrl}tsmc/tsmicro_1.png`,
    //   `${baseImageUrl}tsmc/tsmicro_4.png`,
    // ],
    images: getImages("tsmc", [
      "tsmicro_2.png",
      "tsmicro_3.png",
      "tsmicro_1.png",
      "tsmicro_4.png",
    ]),
    category: "Back-End",
    technologies: ["Express", "Node.js", "HTML", "CSS", "Render"],
    projectLink: "https://timestamp-microservice-udhe.onrender.com/",
    githubLink: "https://github.com/rkgith01/timestamp-microservice",
  },
  {
    title: "Url Shortner Microservice",
    // subTitle: "Stock-API",
    linkTitle: "url-shortner-microservice",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This is url shortner microserice project build with node-js, express, css and html, in which user can see a shortened url and redirect to the original url with valid url requests",
    // images: [
    //   `${baseImageUrl}url/url_1.png`,
    //   `${baseImageUrl}url/url_2.png`,
    //   `${baseImageUrl}url/url_3.png`,
    //   `${baseImageUrl}url/url_4.png`,
    // ],
    images: getImages("url", [
      "url_1.png",
      "url_2.png",
      "url_3.png",
      "url_4.png",
    ]),
    category: "Back-End",
    technologies: ["Express", "Node.js", "HTML", "CSS", "Render"],
    projectLink: "https://url-shortner-o1qb.onrender.com/",
    githubLink: "https://github.com/rkgith01/url-shortner",
  },
  {
    title: "Header Parser Microservice",
    // subTitle: "Stock-API",
    linkTitle: "header-parser-microservice",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This is Header parser microserice project build with node-js, express, css and html, in which user can see a parsed header information of the original Ip with valid url requests",
    // images: [`${baseImageUrl}HP/HP_1.png`, `${baseImageUrl}HP/HP_2.png`],
    images: getImages("HP", ["HP_1.png", "HP_2.png"]),
    category: "Back-End",
    technologies: ["Express", "Node.js", "HTML", "CSS", "Render"],
    projectLink: "https://header-parser-b4rp.onrender.com/",
    githubLink: "https://github.com/rkgith01/header-parser",
  },
  {
    title: "Exercise Tracker Microservice",
    // subTitle: "Stock-API",
    linkTitle: "exercise-tracker-microservice",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This is Exercise Tracker microserice project build with node-js, express, css, html and mongo-db in which user can create or add an user and following with the user id also add exercies and check the log of those exercies with valid url requests",
    // images: [
    //   `${baseImageUrl}ET/ET_2.png`,
    //   `${baseImageUrl}ET/ET_3.png`,
    //   `${baseImageUrl}ET/ET_1.png`,
    // ],
    images: getImages("ET", ["ET_2.png", "ET_3.png", "ET_1.png"]),
    category: "Back-End",
    technologies: ["Express", "Node.js", "HTML", "CSS", "Mongo-DB", "Render"],
    projectLink: "https://exercise-tracker-8cax.onrender.com/",
    githubLink: "https://github.com/rkgith01/exercise-tracker",
  },
  {
    title: "File Metadata Microservice",
    // subTitle: "Stock-API",
    linkTitle: "file-metadata-microservice",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This is File Metadata microserice project build with node-js, express, css, html and multer in which user can get the metadata value of the file uploaded, user will be able to see a json formate values on successful requests",
    // images: [
    //   `${baseImageUrl}FM/FM_2.png`,
    //   `${baseImageUrl}FM/FM_1.png`,
    //   `${baseImageUrl}FM/FM_3.png`,
    // ],
    images: getImages("FM", ["FM_2.png", "FM_1.png", "FM_3.png"]),

    category: "Back-End",
    technologies: ["Express", "Node.js", "HTML", "CSS", "Multer", "Render"],
    projectLink: "https://file-metadata-cn0x.onrender.com/",
    githubLink: "https://github.com/rkgith01/file-metadata",
  },
  {
    title: "Echo",
    // subTitle: "nerura-AI",
    linkTitle: "echo-video-calling",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "This Video calling app consists of Landing page a zoom clone made with Next-js, React, typescript, Tailwind css, shadcn-Ui, Stream API. Connect with your friends and colleagues effortlessly, anytime, anywhere.",
    // images: [
    //   `${baseImageUrl}echo/echo_1.png`,
    //   `${baseImageUrl}echo/echo_2.png`,
    //   `${baseImageUrl}echo/echo_3.png`,
    //   `${baseImageUrl}echo/echo_4.png`,
    //   `${baseImageUrl}echo/echo_5.png`,
    //   `${baseImageUrl}echo/echo_6.png`,
    //   `${baseImageUrl}echo/echo_7.png`,
    //   `${baseImageUrl}echo/echo_8.png`,
    // ],
    images: getImages("echo", [
      "echo_1.png",
      "echo_2.png",
      "echo_3.png",
      "echo_4.png",
      "echo_5.png",
      "echo_7.png",
      "echo_8.png",
      "echo_9.png",
    ]),
    category: "Full Stack",
    technologies: [
      "next-js",
      "React-js",
      "TypeScript",
      "Stream API",
      "shadcn-UI",
      "Tailwind CSS",
      "clerk",
    ],
    projectLink: "https://echo-video.vercel.app/",
    githubLink: "https://github.com/rkgith01/echo-video",
  },
  {
    title: "Neura AI",
    // subTitle: "nerura-AI",
    linkTitle: "nerura-AI",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "Neura AI: An AI-powered software-as-a-service platform that offers various machine learning solutions.",
    // images: [
    //   `${baseImageUrl}neura/neura_1.png`,
    //   `${baseImageUrl}neura/neura_4.png`,
    //   `${baseImageUrl}neura/neura_5.png`,
    // ],
    images: getImages("neura", ["neura_1.png", "neura_4.png", "neura_5.png"]),
    category: "Full Stack",
    technologies: [
      "next-js",
      "open ai",
      "TypeScript",
      "prisma",
      "supabase",
      "shadcn-UI",
      "replicate",
      "stripe",
      "clerk",
      "crisp",
    ],
    projectLink: "https://neura-ai-saas.vercel.app",
    githubLink: "https://github.com/rkgith01/neura-ai-saas",
  },
  {
    title: "Chatify",
    // subTitle: "AI-SAAS",
    linkTitle: "chatify",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "Chatify: Where you can start Conversations with any PDF Documents! AI-powered SaaS for transforming PDFs into polished chats. ",
    // images: [
    //   `${baseImageUrl}aipdf/chatify_1.png`,
    //   `${baseImageUrl}aipdf/chatify_3.png`,
    //   `${baseImageUrl}aipdf/chatify_4.png`,
    // ],
    images: getImages("aipdf", [
      "chatify_1.png",
      "chatify_3.png",
      "chatify_4.png",
    ]),
    category: "Full Stack",
    technologies: [
      "next-js",
      "pinecone",
      "open ai",
      "TypeScript",
      "DrizzleORM",
      "neon",
      "shadcn-UI",
      "aws-s3",
      "stripe",
      "clerk",
    ],
    projectLink: "https://chatify-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/chatify",
  },
  {
    title: "luxue-lease ecom",
    // subTitle: "AI-SAAS",
    linkTitle: "luxue-lease",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    description:
      "Luxue-lease: A fully featured e-commerce platform that allows you to sell your products with ease.",
    // images: [
    //   `${baseImageUrl}ecom/luxue_1.png`,
    //   `${baseImageUrl}ecom/luxue_2.png`,
    //   `${baseImageUrl}ecom/luxue_3.png`,
    //   `${baseImageUrl}ecom/luxue_4.png`,
    //   `${baseImageUrl}ecom/luxue_5.png`,
    //   `${baseImageUrl}ecom/luxue_6.png`,
    //   `${baseImageUrl}ecom/luxue_7.png`,
    //   `${baseImageUrl}ecom/luxue_8.png`,
    // ],
    images: getImages("ecom", [
      "luxue_1.png",
      "luxue_2.png",
      "luxue_3.png",
      "luxue_4.png",
      "luxue_5.png",
      "luxue_6.png",
      "luxue_7.png",
      "luxue_8.png",
    ]),
    category: "Full Stack",
    technologies: [
      "next-js",
      "redux",
      "React",
      "strapi",
      "cloudinary",
      "tailwindcss",
      "stripe",
      "clerk",
    ],
    projectLink: "https://luxue-front.vercel.app",
    githubLink: "https://github.com/rkgith01/luxue-front",
  },
  {
    title: "Chat-app",
    linkTitle: "chat-app",
    description:
      "Chat-app: A real-time chat application built with Mern Stack, tailwind and WebSockets.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}mern/chatapp_11.png`,
    //   `${baseImageUrl}mern/chatapp_1.png`,
    //   `${baseImageUrl}mern/chatapp_5.png`,
    //   `${baseImageUrl}mern/chatapp_9.png`,
    // ],
    images: getImages("mern", [
      "chatapp_11.png",
      "chatapp_1.png",
      "chatapp_5.png",
      "chatapp_9.png",
    ]),
    category: "Full Stack",
    technologies: [
      "Mongo-db",
      "express",
      "React",
      "Node.js",
      "jwt",
      "bcrypt",
      "Websockets",
      "tailwindcss",
      "render",
    ],
    projectLink: "https://chat-app-front-five.vercel.app",
    githubLink: "https://github.com/rkgith01/chat-app-front",
  },
  {
    title: "Bar Chart",
    linkTitle: "bar-chart-dv",
    description:
      "Bar Chart Data visualization build using D3.js, HTML, CSS and JavaScript",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}dv/dv_1.png`,
    //   `${baseImageUrl}dv/dv_2.png`,
    //   `${baseImageUrl}dv/dv_3.png`,
    // ],
    images: getImages("dv", ["dv_1.png", "dv_2.png", "dv_3.png"]),
    category: "Front-End",
    technologies: ["D3.js", "JavaScript", "HTML", "css"],
    projectLink: "https://bar-chart-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/Bar-Chart",
  },
  {
    title: "Scatterplot Graph",
    linkTitle: "scatterplot-graph-dv",
    description:
      "Scatterplot-Graph Data visualization build using D3.js, HTML, CSS and JavaScript",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}dv/dv_4.png`,
    //   `${baseImageUrl}dv/dv_5.png`,
    //   `${baseImageUrl}dv/dv_6.png`,
    // ],
    images: getImages("dv", ["dv_4.png", "dv_5.png", "dv_6.png"]),
    category: "Front-End",
    technologies: ["D3.js", "JavaScript", "HTML", "css"],
    projectLink: "https://scatterplot-graph-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/Scatterplot-Graph",
  },
  {
    title: "Heat Map",
    linkTitle: "heat-map-dv",
    description:
      "Heat Map Data visualization build using D3.js, HTML, CSS and JavaScript",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}dv/dv_7.png`,
    //   `${baseImageUrl}dv/dv_8.png`,
    //   `${baseImageUrl}dv/dv_9.png`,
    // ],
    images: getImages("dv", ["dv_7.png", "dv_8.png", "dv_9.png"]),
    category: "Front-End",
    technologies: ["D3.js", "JavaScript", "HTML", "css"],
    projectLink: "https://heat-map-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/heat-map",
  },
  {
    title: "Choropleth Map",
    linkTitle: "choropleth-map-dv",
    description:
      "Choropleth Map Data visualization build using D3.js, HTML, CSS and JavaScript",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [`${baseImageUrl}dv/dv_10.png`, `${baseImageUrl}dv/dv_11.png`],
    images: getImages("dv", ["dv_10.png", "dv_11.png"]),
    category: "Front-End",
    technologies: ["D3.js", "JavaScript", "HTML", "css"],
    projectLink: "https://choropleth-map-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/choropleth-map",
  },
  {
    title: "Tree-Map",
    linkTitle: "tree-map-dv",
    description:
      "Tree-Map Data visualization build using D3.js, HTML, CSS and JavaScript",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}dv/dv_12.png`,
    //   `${baseImageUrl}dv/dv_13.png`,
    //   `${baseImageUrl}dv/dv_14.png`,
    // ],
    images: getImages("dv", ["dv_12.png", "dv_13.png", "dv_14.png"]),

    category: "Front-End",
    technologies: ["D3.js", "JavaScript", "HTML", "css"],
    projectLink: "https://tree-map-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/tree-map",
  },
  {
    title: "Resume Builder",
    linkTitle: "resume-builder-app",
    description:
      "Resume build with landing page, Build Your resume pdf on the go",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}resume/resume_1.png`,
    //   `${baseImageUrl}resume/resume_2.png`,
    //   `${baseImageUrl}resume/resume_3.png`,
    //   `${baseImageUrl}resume/resume_4.png`,
    //   `${baseImageUrl}resume/resume_5.png`,
    // ],
    images: getImages("resume", [
      "resume_1.png",
      "resume_2.png",
      "resume_3.png",
      "resume_4.png",
      "resume_5.png",
    ]),
    category: "Front-End",
    technologies: ["Vite", "React", "tailwind-css", "shadcn-ui", "react-print"],
    projectLink: "https://resume-builder-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/resume-builder",
  },
  {
    title: "Quote Generator",
    linkTitle: "quote-generator-app",
    description:
      "Random quote generator made with quotable.io react and vite with tailwind css ",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}quote_gen/quote_3.png`,
    //   `${baseImageUrl}quote_gen/quote_2.png`,
    //   `${baseImageUrl}quote_gen/quote_1.png`,
    // ],
    images: getImages("quote_gen", [
      "quote_3.png",
      "quote_2.png",
      "quote_1.png",
    ]),
    category: "Front-End",
    technologies: ["Vite", "React", "tailwind-css", "quoteable.io"],
    projectLink: "https://quote-generator-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/quote-generator",
  },
  {
    title: "Markdown Previewer",
    linkTitle: "markdown-previewer-app",
    description:
      "Markdown previewer with landing page build using react, vite, tailwind css and marked ",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}markdown/markdown_1.png`,
    //   `${baseImageUrl}markdown/markdown_2.png`,
    //   `${baseImageUrl}markdown/markdown_3.png`,
    // ],
    images: getImages("markdown", [
      "markdown_1.png",
      "markdown_2.png",
      "markdown_3.png",
    ]),
    category: "Front-End",
    technologies: ["React", "Vite", "tailwind-css", "marked"],
    projectLink: "https://markdown-previewer-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/markdown-previewer",
  },
  {
    title: "Drum Machine",
    linkTitle: "drum-machine-app",
    description: "Drum machine build using react, vite and tailwind css ",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}drum/drum_1.png`,
    //   `${baseImageUrl}drum/drum_2.png`,
    //   `${baseImageUrl}drum/drum_3.png`,
    // ],
    images: getImages("drum", ["drum_1.png", "drum_2.png", "drum_3.png"]),
    category: "Front-End",
    technologies: ["React", "Vite", "tailwind-css"],
    projectLink: "https://drum-machine-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/drum-machine",
  },
  {
    title: "JavaScript Calculator",
    linkTitle: "javascript-calculator-app",
    description: "React-js calculator build using react, html and css ",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}cal/cal_1.png`,
    //   `${baseImageUrl}cal/cal_2.png`,
    //   `${baseImageUrl}cal/cal_3.png`,
    // ],
    images: getImages("cal", ["cal_1.png", "cal_2.png", "cal_3.png"]),
    category: "Front-End",
    technologies: ["React", "codepen", "html", "css"],
    projectLink: "https://codepen.io/rkgith01/full/bGJZMNe",
    githubLink: "https://github.com/rkgith01/react-calculator",
  },
  {
    title: "Pomodoro Clock",
    linkTitle: "pomodoro-clock-app",
    description: "React-js 25 + 5 clock build using react, html and css ",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}pomodoro/pomo_1.png`,
    //   `${baseImageUrl}pomodoro/pomo_2.png`,
    //   `${baseImageUrl}pomodoro/pomo_3.png`,
    //   `${baseImageUrl}pomodoro/pomo_4.png`,
    // ],
    images: getImages("pomodoro", [
      "pomo_1.png",
      "pomo_2.png",
      "pomo_3.png",
      "pomo_4.png",
    ]),
    category: "Front-End",
    technologies: ["React", "codepen", "html", "css"],
    projectLink: "https://codepen.io/rkgith01/full/dyLrLvB",
    githubLink: "https://github.com/rkgith01/pomodoro-clock",
  },
  {
    title: "weather app",
    linkTitle: "weather-app",
    description:
      "Experience the Local Weather: A sleek weather app that brings your current weather conditions to life. Toggle effortlessly between Fahrenheit and Celsius. Explore diverse backgrounds reflecting real-time weather conditions.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}weather/weather_1.jpg`,
    //   `${baseImageUrl}weather/weather_2.png`,
    //   `${baseImageUrl}weather/weather_3.png`,
    // ],
    images: getImages("weather", [
      "weather_1.jpg",
      "weather_2.png",
      "weather_3.png",
    ]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css", "fcc-api", "geolocator"],
    projectLink: "https://weather-app-rk.vercel.app/",
    githubLink: "https://github.com/rkgith01/weather-app",
  },
  {
    title: "Horse Race Game",
    linkTitle: "horse-race-game",
    description:
      "Horse Race Game: A fun and interactive game where you can race your horses. Your goal is to reach the finish line as fast as possible.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}horse/horse_1.jpg`,
    //   `${baseImageUrl}horse/horse_2.png`,
    //   `${baseImageUrl}horse/horse_3.png`,
    //   `${baseImageUrl}horse/horse_4.png`,
    //   `${baseImageUrl}horse/horse_5.png`,
    // ],
    images: getImages("horse", [
      "horse_1.jpg",
      "horse_2.png",
      "horse_3.png",
      "horse_4.png",
      "horse_5.png",
    ]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3"],
    projectLink: "https://horse-race-game.vercel.app",
    githubLink: "https://github.com/rkgith01/horse-race-game",
  },
  {
    title: "Todo app",
    linkTitle: "todo-app",
    description:
      "Todo App: A simple todo app that helps you keep track of your daily tasks. Add, edit, and delete tasks as you go.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}todo/todo_1.png`,
    //   `${baseImageUrl}todo/todo_2.png`,
    //   `${baseImageUrl}todo/todo_3.png`,
    //   `${baseImageUrl}todo/todo_4.png`,
    //   `${baseImageUrl}todo/todoapp.jpg`,
    // ],
    images: getImages("todo", [
      "todo_1.png",
      "todo_2.png",
      "todo_3.png",
      "todo_4.png",
      "todoapp.jpg",
    ]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3", "localstorage"],
    projectLink: "https://codepen.io/rkgith01/full/oNarzGm",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Dog breed",
    linkTitle: "dog-breed",
    description:
      "Dog Breed: A simple Dog Breed page that helps you find the perfect dog breed. learn about all the dog breeds as you like them.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}dog/dogbreed_1.jpg`,
    //   `${baseImageUrl}dog/dogbreed_2.png`,
    //   `${baseImageUrl}dog/dogbreed_3.png`,
    //   `${baseImageUrl}dog/dogbreed_4.png`,
    // ],
    images: getImages("dog", [
      "dogbreed_1.jpg",
      "dogbreed_2.png",
      "dogbreed_3.png",
      "dogbreed_4.png",
    ]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3", "localstorage"],
    projectLink: "https://codepen.io/rkgith01/full/WNYxzXq",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Iphone Calclulator",
    linkTitle: "iphone-calculator",
    description:
      "Iphone Calculator: A simple Iphone Calculator webapp that helps you do basic calculations.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}all/calc_3.jpg`,
    //   `${baseImageUrl}all/calc_1.png`,
    //   `${baseImageUrl}all/calc_2.png`,
    // ],
    images: getImages("all", ["calc_3.jpg", "calc_1.png", "calc_2.png"]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3"],
    projectLink: "https://codepen.io/rkgith01/full/LYgKbOp",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Product Landing Page",
    linkTitle: "product-landing-page",
    description:
      "Product Landing Page: A simple Product Landing Page that helps you show the perfect product.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [`${baseImageUrl}all/plp_1.jpg`, `${baseImageUrl}all/plp_2.png`],
    images: getImages("all", ["plp_1.jpg", "plp_2.png"]),
    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3"],
    projectLink: "https://codepen.io/rkgith01/full/bGQWgpw",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Portfolio Page",
    linkTitle: "portfolio-page",
    description:
      "Portfolio Page: A simple Portfolio Page that is best to begin with your portfolio.",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}all/portfolio_1.jpg`,
    //   `${baseImageUrl}all/portfolio_2.png`,
    // ],
    images: getImages("all", ["portfolio_1.jpg", "portfolio_2.png"]),

    category: "Front-End",
    technologies: ["javascript", "Bootstrap", "css3"],
    projectLink: "https://codepen.io/rkgith01/full/dyQZGJE",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
  {
    title: "Tribute Page",
    linkTitle: "tribute-page",
    description:
      "Tribute Page: this page is a tribute to a famous person who has well played a character that has become memorabel in a tv series",
    icon: icons.commonIcon,
    icon2: icons.webIcon,
    // images: [
    //   `${baseImageUrl}all/tribute_1.png`,
    //   `${baseImageUrl}all/tribute_2.png`,
    //   `${baseImageUrl}all/tribute_3.jpg`,
    // ],
    images: getImages("all", [
      "tribute_1.png",
      "tribute_2.png",
      "tribute_3.jpg",
    ]),

    category: "All",
    technologies: ["javascript", "HTML5", "Bootstrap", "css3"],
    projectLink: "https://codepen.io/rkgith01/full/gOxYRLW",
    // githubLink: "https://github.com/yourusername/neura-ai",
  },
];

// navLogo,
// daLogo,
// daLogo2,
// footerLogo,
export {
  heroImg1,
  heroImg2,
  heroImg3,
  links,
  solinks,
  heroImg,
  favLogo,
  heroLogo,
  heroLogo2,
  mainLogo,
  mainLogo2,
  light,
  dark,
  baseImageUrl,
  calculateReadingTime,
  stringToRead,
  bottomBtn,
  footer,
  certificateData,
  categories,
};
