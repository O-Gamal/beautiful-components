"use client";

import { Switch } from "@/components/ui/switch";
import Sidebar from "./_components/sidebar";
import {
  Archive,
  CircleHelp,
  Files,
  Home,
  LineChart,
  Package,
  Settings,
} from "lucide-react";
import { useState } from "react";

const primaryNavItems = [
  {
    title: "Dashboard",
    href: "/sidebar",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Products",
    href: "/sidebar/products",
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: "Invoices",
    href: "/sidebar/invoices",
    icon: <Files className="h-4 w-4" />,
  },
  {
    title: "Analytics",
    href: "/sidebar/analytics",
    icon: <LineChart className="h-4 w-4" />,
  },
];

const secondaryNavItems = [
  {
    title: "Archive",
    href: "/sidebar/archive",
    icon: <Archive className="h-4 w-4" />,
  },
  {
    title: "Help Center",
    href: "/sidebar/help-center",
    icon: <CircleHelp className="h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/sidebar/settings",
    icon: <Settings className="h-4 w-4" />,
  },
];

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Sidebar
        expanded={expanded}
        primaryNavItems={primaryNavItems}
        secondaryNavItems={secondaryNavItems}
      />
      <main className="flex flex-col items-center justify-center gap-4 px-2 py-10 sm:px-10">
        <Switch checked={expanded} onCheckedChange={setExpanded} />
        {children}
      </main>
    </div>
  );
};

export default SidebarLayout;
