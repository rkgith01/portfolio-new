// "use client";
// import { useEffect, useState } from "react";

// export default function ColorPicker() {
//   const [color, setColor] = useState("#eab308"); // default fallback color
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // we are now client-side

//     // Safely read localStorage only on client
//     const storedColor = localStorage.getItem("theme-color");
//     if (storedColor) {
//       setColor(storedColor);
//       document.documentElement.style.setProperty("--bg-color", storedColor);
//     } else {
//       document.documentElement.style.setProperty("--bg-color", color);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isClient) return; // only run on client

//     document.documentElement.style.setProperty("--bg-color", color);
//     localStorage.setItem("theme-color", color);
//   }, [color, isClient]);

//   if (!isClient) return null; // avoid rendering during SSR

//   return (
//     <div className="flex flex-col items-center fixed bottom-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 shadow rounded">
//       <label className="text-sm mr-2 text-black dark:text-white">
//         Theme Color:
//       </label>
//       <input
//         type="color"
//         value={color}
//         onChange={(e) => setColor(e.target.value)}
//         className="w-8 h-8 border-none cursor-pointer"
//       />
//     </div>
//   );
// }

// import React from "react";

// const ColorPicker = () => {
//   return <div>ColorPicker</div>;
// };

// export default ColorPicker;
