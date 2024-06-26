"use client";

import NavButton from "../_components/navButton";
import { Logo } from "@/components/Logo";
import { Profile } from "@/components/profile";
import { Card } from "@/components/card";
import { SidebarProps } from "./types";
import { CircleAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Handler from "./handler";
import { useState } from "react";

const Sidebar = ({ primaryNavItems, secondaryNavItems }: SidebarProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimatePresence initial={false}>
      <motion.aside
        animate={{ width: expanded ? "240px" : "56px" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-y-0  left-0 z-10 hidden flex-col border-r bg-background sm:flex space-y-2 justify-between overflow-hidden"
      >
        <div className="space-y-2 p-2">
          <div className="flex flex-col items-center justify-center gap-4 min-h-24">
            <Logo variant={expanded ? "full-lockup" : "icon-only"} />
          </div>
          <nav className="flex flex-col gap-1">
            {primaryNavItems.map((navItem) => (
              <NavButton key={navItem.title} {...navItem} expanded={expanded} />
            ))}
          </nav>
        </div>
        <div className="space-y-3 p-2">
          <nav className="flex flex-col gap-1">
            {secondaryNavItems.map((navItem) => (
              <NavButton key={navItem.title} {...navItem} expanded={expanded} />
            ))}
          </nav>
          <Card
            title="Store Balance"
            progress={65}
            balance="15,500"
            currency="USD"
            icon={<CircleAlert className="h-4 w-4" />}
            expanded={expanded}
          />
          <Profile
            name="Omar G."
            email="omar@example.com"
            image={{
              src: "/avatar.png",
              fallback: "OG",
            }}
            expanded={expanded}
          />
        </div>
        <Handler
          className="absolute top-1/2 right-0 -translate-y-1/2"
          width={5}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
