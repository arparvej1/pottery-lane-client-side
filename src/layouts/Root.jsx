import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-5 xl:px-5 2xl:px-0 xl:mx-auto">
      </div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default Root;