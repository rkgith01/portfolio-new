"use client";

import React, { useEffect, useState } from "react";
import { bottomBtn } from "@/../contants/constant";
import { FaArrowCircleUp } from "react-icons/fa";
// import ScrollUpBtn from "./ScrollUpBtn";
import SmoothScroll from "./SmoothScroll";

const resumeData = {
  name: "Raj Kapadia",
  title: "Full-Stack Software Developer",
  // title: "Software Developer",
  // subtitle: "Full-Stack Developer",

  // paragraphs: [
  //   "I am a passionate and dedicated developer with a strong foundation in computer science and hands-on project experience. My educational journey has been enriched by actively engaging in collaborative academic work, innovative hackathons, and contributing to open-source projects, which has honed my programming skills and provided a deep understanding of the software development process.",
  //   "This practical exposure, though not within a corporate framework, showcases my ability to innovate and execute with precision from project inception to deployment. My commitment to personal and professional growth is evident through my participation in tech meetups and coding bootcamps, ensuring that my skills remain on the cutting edge, especially in areas such as cybersecurity. I am characterized by a tenacity to learn and adapt, applying theoretical knowledge to real-world scenarios, and a relentless pursuit of quality.",
  //   "With proficiency in multiple programming languages and development tools, I am eager to apply my skills in a dynamic work environment that values continuous improvement and technological excellence. As I stand on the threshold of my career, I am confident in my capability to be a valuable contributor to a team that prizes innovation, creativity, and a shared vision for success. I bring a blend of enthusiasm, adaptability, and a results-driven mindset, ready to embark on a journey with a company that encourages growth, values talent, and champions the development of superior software solutions. My goal is to integrate seamlessly into your team and together, build technology that makes an impact.",
  // ],

  paragraphs: [
    "As a dedicated developer, I thrive on crafting innovative solutions and embracing continual growth. With hands-on experience in software development and a passion for collaboration, I bring adaptability, enthusiasm, and a results-driven mindset to any team. Ready to integrate seamlessly and build impactful technology together",
  ],

  keySkills: [
    "Proficient in full-stack development, specializing in MERN and Next.js stacks for efficient application development.",
    "Experienced in creating AI-powered SaaS platforms, integrating technologies like OpenAI and Clerk for enhanced functionalities.",
    "Strong understanding of e-commerce development, proficient in payment integration with Stripe and user authentication with Clerk.",
    "Skilled in implementing real-time communication features using WebSockets, particularly in chat applications.",
    "Familiar with front-end technologies such as React, Bootstrap, and Tailwind, ensuring responsive and visually appealing user interfaces.",
    "Skilled in UI/UX design with frameworks like Tailwind CSS and Shadcn-UI, ensuring visually appealing and intuitive interfaces.",
    "Experienced in cloud-based deployments using Vercel and AWS S3, ensuring scalability and efficient application delivery.",
    "Knowledgeable in version control systems like Git and proficient in CI/CD pipelines for continuous integration and deployment.",
    "Effective problem solver with a proactive approach to troubleshooting and debugging.",
  ],

  projects: [
    {
      title: "Multipurpose AI SAAS application (Full-Stack)",
      date: "03/03/2024",
      description: [
        "Developed a comprehensive full-stack web application utilizing modern technologies such as Next.js, React, Prisma, and Supabase, offering various machine learning solutions.",
        "Implemented robust authentication and authorization mechanisms using Clerk and Stripe, ensuring secure access to sensitive data and transactions.",
        "Utilized Shadcn-UI for designing intuitive user interfaces and replicating AI functionalities to enhance user experience.",
        "Deployed the application using Vercel and github ensuring availability and scalability.",
      ],
      projectLink: "https://neura-ai-saas.vercel.app",
    },
    {
      title: "AI-SaaS Chatify-chat to any pdf document (Full-Stack)",
      date: "10/02/2024",
      description: [
        "Led the end-to-end development of Chatify, an AI-powered SaaS platform that allows users to chat with any PDF document, utilizing Next.js, React, and Pinecone.",
        "Implemented AI functionalities using OpenAI to extract and process content from PDFs, enabling users to initiate conversations based on document content.",
        "Utilized DrizzleORM for efficient data management and integration with AWS S3 for seamless file storage and retrieval.",
        "Ensured application security through integration with Clerk and Stripe for authentication and payment processing, respectively.",
      ],
      projectLink: "https://chatify-khaki.vercel.app",
    },
    {
      title: "Ecommerce project - LuxueLease (Full-Stack)",
      date: "01/01/2024",
      description: [
        "Developed Luxue-Lease, a fully-featured e-commerce platform using Next.js, React, and Redux, enabling seamless product selling and management.",
        "Integrated Strapi for efficient content management and Cloudinary for optimized media storage and delivery, enhancing platform performance.",
        "Utilized Tailwind CSS for responsive and visually appealing user interfaces, offering an engaging shopping experience.",
        "Implemented Stripe and Clerk for secure payment processing and user authentication, respectively, ensuring a safe and convenient shopping environment.",
      ],
      projectLink: "https://luxue-front.vercel.app",
    },
    {
      title: "Real-Time Chat Application (MERN-Stack)",
      date: "20/12/2023",
      description: [
        "Developed a real-time chat application, Chat-app, using the MERN stack (MongoDB, Express.js, React, Node.js) along with WebSockets for seamless communication.",
        "Utilized Tailwind CSS for responsive and visually appealing user interfaces, enhancing the user experience.",
        "Implemented WebSockets for real-time communication, allowing users to engage in instant messaging without page refreshes.",
      ],
      projectLink: "https://chat-app-front-five.vercel.app",
    },
  ],

  education: "Bachelor of Science",
  certifications: [
    "Responsive Web Design (11/2021)",
    "JavaScript Algorithms and Data Structures. (03/2022)",
    "Front End Development Libraries (05/2024)",
    "Back End Development and APIs Certification (05/2024)",
    "Data Visualization Certification (05/2024)",
  ],
  certificationLink: [
    "https://www.freecodecamp.org/certification/rkworld09/responsive-web-design",
    "https://www.freecodecamp.org/certification/rkworld09/javascript-algorithms-and-data-structures",
    "https://www.freecodecamp.org/certification/rkworld09/front-end-development-libraries",
    "https://www.freecodecamp.org/certification/rkworld09/back-end-development-and-apis",
    "https://www.freecodecamp.org/certification/rkworld09/data-visualization",
  ],
  certificatePageLink: "/certificate",
  cetificatePageText: "View certifications",
  certificationLinkText: ["certi-1", "certi-2"],

  // additionalExperience: {
  //   freeCodeCamp: {
  //     title: "FreeCodeCamp Coding Mentor and Contributor",
  //     description: [
  //       "Provided mentorship, code review, and career guidance to aspiring technologists.",
  //       "Organized events and contributed to the freeCodeCamp community.",
  //     ],
  //   },
  //   gitHubContributions: {
  //     title: "GitHub Contributions",
  //     description: [
  //       "Active contributor to open-source projects, demonstrating a commitment to collaborative development.",
  //     ],
  //   },
  // },

  contactInformation: {
    // email: "yourname@email.com",
    // linkedIn: "https://codepen.io/rkgith01",
    gitHub: "https://github.com/rkgith01",
    contactPage: "/contact",
  },

  otherLinks: {
    project: "/portfolio",
    aboutSite: "/site",
    aboutpage: "/about",
    pdfLink: "/cv/Raj-Kapadia-1.pdf",
  },
};

export const NavItem = ({ href, children }) => {
  const smoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <li className="relative">
      <a
        href={href}
        className="hover:bg-gray-200 dark:hover:bg-gray-700 py-1 px-1  rounded-md transition-colors duration-300"
        onClick={smoothScroll}
      >
        {children}
      </a>
    </li>
  );
};
export const Section = ({ title, content }) => {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div>{content}</div>
    </section>
  );
};

const Paragraph = ({ content }) => {
  return <p className="mt-4 md:text-md lg:text-lg">{content}</p>;
};

const List = ({ items }) => {
  return (
    <ul className="list-disc ml-6 mt-4 md:text-md lg:text-lg">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Link = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="text-white dark:text-blue-500  hover:font-semibold"
    >
      {text}
    </a>
  );
};

const ResumePage = () => {
  const [showScroll, setShowScroll] = useState(false);

  // smooth scroll
  useEffect(() => {
    const smoothScrollToAnchor = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };

    smoothScrollToAnchor();
  }, []);

  // scroll to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen">
      <nav
        className="w-64 md:block md:top-[20%] lg:fixed lg:top-[20%]
      block px-4 py-12"
      >
        <ul className="md:flex md:w-screen lg:w-full w-screen lg:block px-4 flex justify-center items-center flex-wrap lg:space-y-4 mr-6">
          <NavItem href="#software">#Software</NavItem>
          <NavItem href="#key-skills">#Key Skills</NavItem>
          <NavItem href="#projects">#Projects</NavItem>
          <NavItem href="#Education">#Education</NavItem>
          <NavItem href="#certifications">#Certifications</NavItem>
          <NavItem href="#contactInformation">#Contact Information</NavItem>
          {/* <NavItem href="#additionalExperience">#Additional Experience</NavItem> */}
        </ul>
      </nav>
      <div className="max-w-3xl mx-auto py-8 px-6 sm:px-12 text-black dark:text-gray-100">
        <article className="space-y-8">
          <h1 className="text-4xl font-bold">{resumeData.name}</h1>

          {/* intro */}
          <header>
            <h3 className="text-2xl font-bold" id="software">
              {resumeData.title}
            </h3>
            <h3 className="text-md font-light capitalize">
              {resumeData.subtitle}
            </h3>
            {resumeData.paragraphs.map((paragraph, index) => (
              <Paragraph key={index} content={paragraph} />
            ))}

            <div className="flex md:flex-row lg:flex-row flex-col gap-1">
              <p className="mt-3 flex gap-1">
                Do check out my projects
                <Link url={resumeData.otherLinks.project} text="here." />
              </p>
              <p className="mt-3 flex gap-1">
                Also check out
                <Link
                  url={resumeData.otherLinks.aboutSite}
                  text="how i built this site here."
                />
              </p>
            </div>
            <div className="flex gap-1 md:flex-row lg:flex-row flex-col flex-wrap">
              <p className="mt-3 flex gap-1">
                Learn more
                <Link url={resumeData.otherLinks.aboutpage} text="about me," />
              </p>
              <p className="mt-3 flex gap-1">
                You can also{" "}
                <Link
                  url={resumeData.otherLinks.pdfLink}
                  text="download my resume"
                />
              </p>
            </div>
          </header>

          {/* key skills */}
          <Section
            title={
              <a href="#key-skills" id="key-skills">
                Key Skills:
              </a>
            }
            content={<List items={resumeData.keySkills} />}
          />

          {/* projects */}
          <Section
            title={
              <a href="#projects" id="projects">
                Projects:
              </a>
            }
            content={resumeData.projects.map((project, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <span>{project.date}</span>
                <List items={project.description} />
                <span className="flex gap-1 m-2">
                  Related Link:
                  <Link url={project.projectLink} text="View Project" />
                </span>
              </div>
            ))}
          />

          {/* education */}
          <Section
            title={
              <a href="#Education" id="Education">
                Education:
              </a>
            }
            content={<Paragraph content={resumeData.education} />}
          />

          {/* certifications */}
          <Section
            title={
              <a href="#certifications" id="certifications">
                Certifications:
              </a>
            }
            content={
              <>
                <List items={resumeData.certifications} />

                <span className="flex space-x-1 gap-1">
                  Related Links:
                  <Link
                    url={resumeData.certificatePageLink}
                    text={resumeData.cetificatePageText}
                  />
                  {/* <Link
                    url={resumeData.certificationLink[1]}
                    text={resumeData.certificationLinkText[1]}
                  /> */}
                </span>
              </>
            }
          />
          {/* <Section
            title={
              <a href="#additionalExperience" id="additionalExperience">
                Additional Experience:
              </a>
            }
            content={
              <>
                <div>
                  <h3>{resumeData.additionalExperience.freeCodeCamp.title}</h3>
                  <List
                    items={
                      resumeData.additionalExperience.freeCodeCamp.description
                    }
                  />
                </div>
                <div>
                  <h3>
                    {resumeData.additionalExperience.gitHubContributions.title}
                  </h3>
                  <List
                    items={
                      resumeData.additionalExperience.gitHubContributions
                        .description
                    }
                  />
                </div>
              </>
            }
          /> */}

          {/* contact section */}
          <Section
            title={
              <a href="#contactInformation" id="contactInformation">
                Contact Information:
              </a>
            }
            content={
              <>
                {/* <span className="flex gap-1">
                  Linked In:
                  <Link
                    url={resumeData.contactInformation.linkedIn}
                    text="View Linked In Profile"
                  />
                </span> */}
                <span className="flex gap-1">
                  Github:
                  <Link
                    url={resumeData.contactInformation.gitHub}
                    text="View Github Profile"
                  />
                </span>
                <span className="flex gap-1">
                  Get in touch:
                  <Link
                    url={resumeData.contactInformation.contactPage}
                    text="Contact me"
                  />
                </span>
              </>
            }
          />
          {/* Additional sections can be added as needed */}
        </article>
        <div className="mt-8">{bottomBtn}</div>
      </div>
      {/* scroll btn */}
      {/* {showScroll && <ScrollUpBtn scrollToTop={scrollToTop} />} */}
      {showScroll && <SmoothScroll />}
    </div>
  );
};

export default ResumePage;
