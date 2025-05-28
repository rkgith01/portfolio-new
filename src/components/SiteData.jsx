import React from "react";
import { bottomBtn } from "@/../contants/constant";

const SiteData = () => {
  const generateParagraph = (title, content, links) => {
    return (
      <div className="space-y-4">
        <h2
          className="text-2xl font-semibold"
          id={title.toLowerCase().replace(/\s+/g, "-")}
        >
          <a href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}>{title}</a>
        </h2>
        <p>
          {content}{" "}
          {links && (
            <span className="space-x-2">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="dark:text-blue-400 text-white hover:font-semibold "
                >
                  {link.text}
                </a>
              ))}
            </span>
          )}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full overflow-auto flex flex-col justify-center">
      <div className="p-6 sm:p-12 text-black dark:text-white">
        <article>
          <div className="mt-3 space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl mt-6 font-semibold">About this Site</h1>
              <h3 className="text-md mt-6 font-semibold">raj.dev</h3>
              <p>
                raj.dev is wholly created and owned by me, is my portfolio
                website. It has been built with{" "}
                <a
                  href="https://nextjs.org"
                  className="dark:text-blue-400 text-white hover:font-semibold"
                >
                  Next.js
                </a>{" "}
                and{" "}
                <a
                  href="https://tailwindcss.com"
                  className="dark:text-blue-400 text-white hover:font-semibold"
                >
                  Tailwind CSS.
                </a>{" "}
                I research, write, illustrate, design, code, and ship everything
                you’ll see here. Also sometimes you may find images displayed on
                the blog post from unsplash here.
              </p>
            </div>
            {/** Static site generator */}
            {generateParagraph(
              "Static site generator",
              "To ensure speed and efficiency, I've chosen NEXT-JS as the backbone of this site. Paired with GitHub and Vercel, updates are swiftly deployed, ensuring seamless transitions and minimal downtime.",
              null
            )}

            {/** Theme */}
            {generateParagraph(
              "Theme",
              "Trying to keep it simple since anything too is no good sometimes so the theme is a custom creation of mine built with NEXT UI user can swtich between two colors dark and bright one. The icons are being used from react-icons. Moreover some extent of framer-motion library usage is all done for animations.",
              [
                {
                  text: "React-Icons",
                  href: "https://react-icons.github.io/react-icons/",
                },
                {
                  text: "HERO UI/NEXT UI(prev)",
                  href: "https://www.heroui.com/",
                },
                { text: "Framer", href: "https://www.framer.com/motion/" },
              ]
            )}

            {/** My development tools */}
            {generateParagraph(
              "My development tools",
              "To build my projects i rely on VS code like most of the fellow devlopers in the world.",
              null
            )}

            {/** Maintenance */}
            {generateParagraph(
              "Maintenance",
              "With the simplicity of a static site architecture, upkeep is minimal. A well-documented Makefile serves as my Swiss Army knife for managing day-to-day tasks, keeping the site running smoothly.",
              null
            )}

            {/** Secrets and Easter Eggs */}
            {/* {generateParagraph(
              "Secrets and Easter Eggs",
              "While I can't confirm their existence, exploring every nook and cranny of the site may reveal hidden surprises. Transparency is key, so feel free to delve into the repository and discover the inner workings of this site.",
              null
            )} */}
          </div>
        </article>
        <div>{bottomBtn}</div>
      </div>
    </div>
  );
};

export default SiteData;
