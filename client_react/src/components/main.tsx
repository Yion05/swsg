import { Outlet } from "react-router";
import Footer from "./footer";
import Header from "./header";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Main;
