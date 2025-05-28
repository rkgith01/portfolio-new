"use client";

import React, { useEffect } from "react";
import Footer from "./Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { AccAnimateImage } from "./AnimateImage";
import { bottomBtn } from "@/../contants/constant";
import { TbHandRingFinger } from "react-icons/tb";

// Custom Hook for Smooth Scroll
const useSmoothScroll = () => {
  useEffect(() => {
    const smoothScrollToAnchor = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(anchor.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
    };
    smoothScrollToAnchor();
  }, []);
};

// Section Component with hover effect
const HoverSection = ({ title, children, id }) => (
  <section
    id={id}
    className="relative p-4 border-2 border-yellow-700 rounded-lg shadow-lg dark:shadow-md dark:shadow-slate-500 transition-all hover:bg-opacity-100 group cursor-default"
  >
    {/* Large text that fades out on hover */}
    <div className="absolute inset-0 flex items-center justify-center text-2xl xl:text-5xl lg:text-4xl md:text-3xl drop-shadow-lg font-bold dark:text-gray-300 text-black group-hover:opacity-0 transition-opacity">
      {title}
    </div>

    {/* Actual content, visible on hover */}
    <div className="blur-2xl group-hover:blur-0 transition-all cursor-default">
      {children}
    </div>
    {/* Span with hand icon, visible only on small screens */}
    <span className="absolute right-0 bottom-0 rounded-full group-hover:opacity-0 transition-opacity duration-300 bg-black sm:hidden">
      <TbHandRingFinger size={30} color="white" />
      <span className="hidden hover:visible">hover me</span>
    </span>
  </section>
);

// External Link Component
const ExternalLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="dark:text-blue-400 text-white hover:text-gray-600  dark:hover:text-cyan-500 transition-colors"
  >
    {label}
  </a>
);

// Introduction Component
const Introduction = ({ name, introduction, resumeLink }) => (
  <div>
    <h1 className="text-2xl xl:text-5xl lg:text-4xl md:text-3xl mt-6 pb-6 font-semibold text-center">{`I'm ${name}`}</h1>
    <p className="mt-3 pt-6">
      {introduction} You can find my resume{" "}
      <ExternalLink href={resumeLink} label="here." />
    </p>
  </div>
);

// Write Me Component
const WriteMe = ({ contactLink, resumeLink, pdfLink }) => (
  <HoverSection title="Write Me" id="write-me">
    <p>
      You’re most welcome to{" "}
      <ExternalLink href={contactLink} label="say hello" />. You can also{" "}
      <ExternalLink href={resumeLink} label="read my resume" /> or{" "}
      <ExternalLink href={pdfLink} label="download a PDF version." />
    </p>
  </HoverSection>
);

// More Info Component
const MoreInfo = ({
  chessLink,
  siteLink,
  penLinks,
  githubLink,
  codepenLink,
  freeCodeCamp,
}) => (
  <HoverSection title="And there’s more.." id="and-there-more">
    <p>
      I like playing chess, feel free to{" "}
      <ExternalLink href={chessLink} label="challenge me" />.
    </p>
    <p>
      Learn about <ExternalLink href={siteLink} label="how I built this site" />
      . Check out my CodePen examples:
      <span className="space-x-2">
        {penLinks.map((link, index) => (
          <ExternalLink key={index} href={link.url} label={`#${link.label}`} />
        ))}
      </span>
    </p>
    <p>This site is my home, but you can also find me on:</p>
    <ul className="list-disc ml-8">
      <li>
        <ExternalLink href={githubLink} label="GitHub" />
      </li>
      <li>
        <ExternalLink href={codepenLink} label="CodePen" />
      </li>
      <li>
        <ExternalLink href={freeCodeCamp} label="freeCodeCamp" />
      </li>
    </ul>
  </HoverSection>
);

// Learning Component
const Learning = ({ certificateLink, githubLink }) => (
  <HoverSection title="I Love Learning" id="i-love-learning">
    <p>
      I am passionate about continuous learning. You can view my{" "}
      <ExternalLink
        href={certificateLink}
        label="FreeCodeCamp certifications"
      />
      .
    </p>
    <p>
      I actively engage in open-source work on{" "}
      <ExternalLink href={githubLink} label="GitHub" />.
    </p>
  </HoverSection>
);

// SkillBelt Component
const SkillBelt = () => {
  // const [isAccordionOpen, setAccordionOpen] = useState(false);

  return (
    <div title="Skill Belt" id="skill-belt" className="my-4">
      <AccAnimateImage />
    </div>
  );
};

// Main AboutData Component
const AboutData = () => {
  useSmoothScroll(); // Smooth scroll functionality

  return (
    <div className="min-h-screen w-full overflow-auto flex flex-col justify-center">
      <div className="p-8 sm:p-14 text-black dark:text-white">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <HoverSection title="My Intro" id="my-intro">
            <Introduction
              name="Raj Kapadia"
              introduction="As a driven software developer, I bring a strong foundation in coding principles, a fervent drive for innovation, and active engagement in open-source communities, eagerly applying my adept problem-solving skills to intricate projects."
              resumeLink="/about/cv"
            />
          </HoverSection>
          <MoreInfo
            chessLink="https://play.chess.com/X54Sq"
            siteLink="/site"
            penLinks={[
              {
                url: "https://codepen.io/rkgith01/pen/qBQRJWo",
                label: "font-picker",
              },
              {
                url: "https://codepen.io/rkgith01/pen/gOQLvEL",
                label: "image-rating",
              },
              {
                url: "https://codepen.io/rkgith01/pen/gOQMaqy",
                label: "range-slider",
              },
              {
                url: "https://codepen.io/rkgith01/pen/oNQgdxz",
                label: "mood-toggle",
              },
            ]}
            githubLink="https://github.com/rkgith01"
            codepenLink="https://codepen.io/rkgith01"
            freeCodeCamp="https://www.freecodecamp.org/rkworld09"
          />
          <WriteMe
            contactLink="/contact"
            resumeLink="/about/cv"
            pdfLink="/cv/Raj-Kapadia-1.pdf"
          />

          <Learning
            certificateLink="/certificate"
            githubLink="https://github.com/rkgith01"
          />
        </article>
        <SkillBelt />
        <div>{bottomBtn}</div>
      </div>
      <Footer />
      <SmoothScroll />
    </div>
  );
};

export default AboutData;
