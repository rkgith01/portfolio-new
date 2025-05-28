"use client";

import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine, RiHome4Line } from "react-icons/ri";

const GoBackBtn = () => {
  const router = useRouter();

  const buttons = [
    {
      icon: <RiArrowLeftLine />,
      label: "Back",
      action: () => typeof window !== "undefined" && window.history.back(),
      variant: "bordered",
    },
    {
      icon: <RiHome4Line />,
      label: "Home",
      action: () => router.push("/"),
      variant: "flat",
    },
  ];

  return (
    <div className="flex gap-2 p-2">
      {buttons.map(({ icon, label, action, variant }) => (
        <Button
          key={label}
          size="sm"
          variant={variant}
          onPress={action}
          aria-label={`Go ${label}`}
          className="flex items-center gap-2"
        >
          {icon}
          {label}
        </Button>
      ))}
    </div>
  );
};

export default GoBackBtn;
