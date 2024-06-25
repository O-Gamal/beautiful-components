"use client";

import {
  Archive,
  CircleAlert,
  CircleHelp,
  Files,
  Home,
  LineChart,
  Package,
  Settings,
} from "lucide-react";
import NavButton from "../_components/navButton";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { Switch } from "@/components/ui/switch";
import { Profile } from "@/components/profile";
import { Card } from "@/components/card";
import RadialProgress from "@/components/ui/radialProgress";

const navItems = [
  {
    title: "Dashboard",
    href: "#dashboard",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Products",
    href: "#products",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Invoices",
    href: "#invoices",
    icon: <Files className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "#analytics",
    icon: <LineChart className="h-4 w-4" />,
  },
];

const secondaryNavItems = [
  {
    title: "Archive",
    href: "#archive",
    icon: <Archive className="h-4 w-4" />,
  },
  {
    title: "Help Center",
    href: "#help-center",
    icon: <CircleHelp className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "#settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const SidebarPage = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div>
      <aside
        className={cn(
          "fixed inset-y-0  left-0 z-10 hidden flex-col border-r bg-background sm:flex space-y-2 justify-between",
          expanded ? `w-[15rem]` : `w-14`
        )}
      >
        <div className="space-y-2 p-2">
          <div className="flex flex-col items-center justify-center gap-4 min-h-24">
            <Logo variant={expanded ? "full-lockup" : "icon-only"} />
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((navItem) => (
              <NavButton key={navItem.title} {...navItem} expanded={expanded} />
            ))}
          </nav>
        </div>
        <div
          className={cn("space-y-3 p-2", {
            "space-y-5": !expanded,
          })}
        >
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
      </aside>
      <main className="flex flex-col items-center justify-center gap-4 px-2 py-10 sm:px-10">
        <Switch checked={expanded} onCheckedChange={setExpanded} />
      </main>
    </div>
  );
};

export default SidebarPage;
