import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface layoutProps {
  children: ReactNode;
  search?: (searchText: any) => void;
}

const Layout = (props: layoutProps) => {
  const { children, search } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
