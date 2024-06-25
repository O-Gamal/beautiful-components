import NavButton from "../_components/navButton";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { Profile } from "@/components/profile";
import { Card } from "@/components/card";
import { SidebarProps } from "./types";
import { CircleAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Sidebar = ({
  expanded,
  primaryNavItems,
  secondaryNavItems,
}: SidebarProps) => {
  return (
    <AnimatePresence mode="wait">
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
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
