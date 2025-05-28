import GoBackBtn from "@/components/GoBackBtn";
import NavbarPage from "@/components/Navbar";
export const metadata = {
  title: "raj.dev",
  description: "Software Engineer",
  icons: {
    icon: "/flogo.png",
  },
};

const LandingLayout = ({ children }) => {
  const theme = `
    bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400   
    dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-600 dark:bg-gradient-to-r
  `;
  // theme
  // "bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 dark:from-gray-900 dark:via-purple-900 dark:to-black";
  return (
    <main
      className={
        "h-full text-gray-50 dark:text-gray-100 overflow-auto min-h-screen" +
        " " +
        ""
      }
    >
      <div className="flex items-center justify-between px-4 py-2 ">
        <GoBackBtn />
        <NavbarPage />
      </div>
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
