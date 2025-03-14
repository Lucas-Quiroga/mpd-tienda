"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { IconType } from "react-icons/lib";
import { Button } from "@/components/ui/button";
import { useFetch } from "@/hooks/useFetch";
import { Spinner } from "./ui/spinner";
import { TfiPanel } from "react-icons/tfi";
import { MdAdd } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { MdOutlineLogout } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { FiBox } from "react-icons/fi";
import { FaQuestion } from "react-icons/fa";

const iconComponents = {
  TfiPanel,
  MdAdd,
  GoHome,
  SiSimpleanalytics,
  IoSettingsOutline,
  FiBox,
  FaQuestion,
};

interface NavLink {
  name: string;
  href?: string;
  icon: keyof typeof iconComponents;
  select: number;
}

interface NavProps {
  links: NavLink[];
  localStorageKey: string;
  isSession?: boolean;
}

interface LogOutResponse {
  url: string;
}

export const Nav: React.FC<NavProps> = ({
  links,
  localStorageKey,
  isSession,
}) => {
  const [selected, setSelected] = useState<number>(0);
  const [hydrated, setHydrated] = useState(false);
  const { execute: executeLogOut, isLoading } = useFetch<LogOutResponse>();

  const handleLogOut = async () => {
    try {
      const response = await executeLogOut("/api/auth/signout", {
        method: "GET",
      });

      if (response?.data.url) {
        window.location.assign(response.data.url);
      }
    } catch (error) {
      console.error("An error occurred while signing out", error);
    }
  };

  useEffect(() => {
    const savedSelected = localStorage.getItem(localStorageKey);
    if (savedSelected) {
      setSelected(parseInt(savedSelected, 10));
    }
    setHydrated(true);
  }, [localStorageKey]);

  const handleSelection = (select: number) => {
    setSelected(select);
    localStorage.setItem(localStorageKey, select.toString());
  };

  if (!hydrated) {
    return null;
  }

  return (
    <div className="flex flex-col h-full ">
      <nav className="flex flex-col flex-grow gap-y-2 overflow-auto px-2 ">
        {links.map((link) => (
          <a
            key={link.select}
            href={link.href}
            onClick={() => handleSelection(link.select)}
            className={cn(
              "flex justify-between items-center w-full",
              buttonVariants({
                variant: selected === link.select ? "default" : "secondary",
                size: "lg",
              }),
              selected === link.select &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white"
            )}
          >
            <span className="flex items-center w-6 h-6 mr-2">
              {link.icon &&
                React.createElement(iconComponents[link.icon], {
                  className: "w-full h-full",
                })}
            </span>
            <span className="flex-grow text-left">{link.name}</span>
          </a>
        ))}
      </nav>
      {isSession && (
        <div className="w-full mt-auto">
          <Button
            onClick={handleLogOut}
            disabled={isLoading}
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "lg",
              }),
              "dark:bg-muted dark:text-black dark:hover:bg-muted dark:hover:text-white cursor-pointer w-full"
            )}
          >
            <MdOutlineLogout size={24} />

            {isLoading ? <Spinner size={"medium"} /> : "Cerrar sesión"}
          </Button>
        </div>
      )}
    </div>
  );
};
