import Header from "../../components/header";
export default function ProjectLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export const metadata = {
  title: "Liam Palmer - Project",
};
