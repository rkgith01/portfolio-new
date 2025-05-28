"use client";
import React from "react";
import {
  aboutImage,
  bottomBtn,
  dark,
  heroImg,
  light,
} from "@/../contants/constant";
import ModalForm from "./ModalForm";
import { User, Link } from "@heroui/react";
import Footer from "./Footer";
const contactPageContent = [
  {
    name: (
      <span className="text-black dark:text-white font-bold">Raj Kapadia</span>
    ),
    description: (
      <Link
        href="https://github.com/rkgith01"
        size="sm"
        isExternal
        className="text-white dark:text-amber-600 hover:font-semibold"
      >
        @rkgith01
      </Link>
    ),
    avatarProps: {
      src: heroImg,
      alt: "user image",
      className:
        "w-[80px] h-[80px] border-2 grayscale-[45%] dark:grayscale-[40%]",
      // src: "/otherlogo.png",
    },
  },
  {
    heading: "Hello! 👋 Your turn,",
    paragraph:
      "A dedicated developer with solid coding skills, seeks to contribute to challenging projects, actively engages in open-source communities, and values continuous learning.You can find my resume",
    paragraphTwo: "You can view my projects on this ",
    paragraphThree:
      "Also if you like to read some cool stuff do check out my  ",
    resumeLink: "/about/cv",
    projectLink: "/portfolio",
    blogLink: "/blog",
  },
  {
    siteLink: "/site",
    headingTwo: "Email is",
    // emailLink: "mailto:email@email.com",
    // emailText: "email@email.com",
    paragraphfour: "Learn about ",
    note: "Please note that I do not accept guest blog posts or requests for placing links in posts.",
  },
];

const ContactData = () => {
  return (
    <div className="text-black dark:text-white min-h-screen w-full overflow-auto flex flex-col justify-center">
      <div className={"p-6 sm:p-12" + (dark || light)}>
        {/* #edit and update form and email links */}
        <article>
          <div className="mt-3 space-y-[3rem]">
            {contactPageContent.map((item, index) => (
              <div className="space-y-4" key={index}>
                {/* User */}
                {item.name && (
                  <div className="flex items-center justify-center rounded-xl py-4 ">
                    <User
                      name={item.name}
                      description={item.description}
                      avatarProps={item.avatarProps}
                      className="w-[500px] h-[100px] bg-yellow-700 dark:bg-gray-700 "
                    />
                  </div>
                )}
                <h1 className="text-center text-2xl md-text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  mt-6 font-bold">
                  {item.heading}
                </h1>

                {item.paragraph && (
                  <p className="mt-3">
                    {item.paragraph}{" "}
                    <a
                      href={item.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white dark:text-blue-400 hover:font-semibold"
                    >
                      here.
                    </a>{" "}
                  </p>
                )}
                {item.paragraph && (
                  <p className="mt-3">
                    {item.paragraphTwo}{" "}
                    <a
                      href={item.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white dark:text-blue-400 hover:font-semibold"
                    >
                      page.
                    </a>
                  </p>
                )}
                {item.paragraph && (
                  <p className="mt-3">
                    {item.paragraphThree}{" "}
                    <a
                      href={item.blogLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white dark:text-blue-400 hover:font-semibold"
                    >
                      blog.
                    </a>
                  </p>
                )}
                {item.headingTwo && (
                  <div className="space-y-4">
                    <h2
                      className=" text-center text-2xl font-semibold"
                      id="email-me"
                    >
                      {item.emailLink ? (
                        <p>Say Hello On</p>
                      ) : (
                        // <a href="#email-me">
                        //   {item.headingTwo + " " + "coming soon..."}
                        // </a>
                        <ModalForm />
                      )}
                    </h2>
                    {item.emailLink ? (
                      <p>
                        You can say{" "}
                        <a
                          href={item.emailLink}
                          className="text-white  dark:text-blue-400 hover:font-semibold"
                        >
                          {item.emailText}
                        </a>
                      </p>
                    ) : (
                      <p className="mt-3">
                        Due to our current infrastructure setup, we&apos;re
                        utilizing a secure contact form instead of direct email
                        contact. Your messages are still received promptly!
                      </p>
                    )}

                    {item.paragraphfour && (
                      <p className="mt-3">
                        {item.paragraphfour}{" "}
                        <a
                          href={item.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white dark:text-blue-400 hover:font-semibold"
                        >
                          how i built this site?.
                        </a>
                      </p>
                    )}

                    <p>{item.note}</p>
                  </div>
                )}
              </div>
            ))}
            {/* <ModalForm /> */}
          </div>
        </article>
        <div>{bottomBtn}</div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactData;
