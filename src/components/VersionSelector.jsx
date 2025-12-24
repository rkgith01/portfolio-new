"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { FaCodeBranch } from "react-icons/fa";
import { footer } from "../../contants/constant";

const VersionSelector = () => {
  const handleVersionAction = (key) => {
    if (key === "new") {
      window.location.href = footer.vLink1;
    } else if (key === "old") {
      window.location.href = footer.vLink2;
    }
  };

  return (
    <Dropdown className="bg-yellow-300 dark:bg-gray-950 border-2 border-black dark:border-gray-500 rounded-lg shadow-lg">
      <DropdownTrigger>
        <Button
          variant="solid"
          size="sm"
          startContent={<FaCodeBranch />}
          className="rounded-full bg-yellow-600 dark:bg-[#282828] text-black dark:text-white"
        >
          Version
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Version Selector"
        onAction={handleVersionAction}
      >
        <DropdownItem key="new" className="text-green-700 dark:text-green-400">
          🚀 New Version (Next.js 15)
        </DropdownItem>
        <DropdownItem
          key="old"
          className="text-yellow-800 dark:text-yellow-300"
        >
          🕰️ Old Version (Legacy)
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default VersionSelector;
