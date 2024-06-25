const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-screen h-screen overflow-hidden">{children}</div>;
};

export default SidebarLayout;