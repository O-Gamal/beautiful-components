const SidebarPage = ({ params }: { params: { name: string[] } }) => {
  const { name } = params;
  return <div>[SidebarPage] {name?.join("/")}</div>;
};

export default SidebarPage;
