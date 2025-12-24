// import HeroPage from "@/components/Hero";
// import HeroPosts from "@/components/HeroPosts";
// import Footer from "@/components/Footer";
// import NavbarPage from "@/components/Navbar";
// const HomePage = () => {
//   const theme = `
//     bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400
//     dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r
//   `;
//   // ${theme}
//   // style = "color:transparent";
//   return (
//     <section
//       className={`min-h-screen flex items-center justify-evenly flex-col overflow-hidden
//         `}
//     >
//       {" "}
//       <NavbarPage />
//       <HeroPage />
//       <HeroPosts />
//       <Footer />
//     </section>
//   );
// };

// export default HomePage;

import HeroPage from "@/components/Hero";
import HeroPosts from "@/components/HeroPosts";
import Footer from "@/components/Footer";
import NavbarPage from "@/components/Navbar";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col justify-evenly items-center overflow-hidden ">
      <NavbarPage />
      <HeroPage />
      <HeroPosts />
      <Footer />
    </main>
  );
};

export default HomePage;
