export type NavButtonProps = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

export type SidebarProps = {
  primaryNavItems: NavButtonProps[];
  secondaryNavItems: NavButtonProps[];
};
