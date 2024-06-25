export type NavButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type SidebarProps = {
  expanded: boolean;
  primaryNavItems: NavButtonProps[];
  secondaryNavItems: NavButtonProps[];
};
