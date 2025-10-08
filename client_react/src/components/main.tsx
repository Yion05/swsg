import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const Main = () => {
  return (
    <div className="px-4 lg:px-54">
      <Header></Header>
      <main className="px-12">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
