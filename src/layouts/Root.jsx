import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-5 xl:px-5 2xl:px-0 xl:mx-auto">
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Root;