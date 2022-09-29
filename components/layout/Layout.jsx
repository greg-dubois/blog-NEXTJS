import Footer from "./Footer";
import NavBar from "./NavBar";
const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
