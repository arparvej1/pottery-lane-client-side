import { useContext } from "react";
import { FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <footer className="footer footer-center mt-10 p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col md:text-lg lg:text-xl">
        <Link to='/' className="link-hover">Home</Link>
        <div className="divider divider-horizontal w-1 mx-1"></div>
        <Link to='/all-art-craft' className="link-hover">All Art Craft</Link>
        <div className="divider divider-horizontal w-1 mx-1"></div>
        <Link to='/my-art-craft' className="link-hover">My Art Craft</Link>
        <div className="divider divider-horizontal w-1 mx-1"></div>
        {!user ?
          <Link to='/register' className="link-hover">Register</Link>
          : <Link to='/profile' className="link-hover">Profile</Link>}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-5">
          <Link><FaYoutube className="text-2xl text-[#FF0000]" /></Link>
          <Link><FaGithub className="text-2xl" /></Link>
          <Link><FaTwitter className="text-2xl text-[#1DA1F2]" /></Link>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by <Link to='/'><strong>PotteryLane</strong></Link></p>
      </aside>
    </footer>
  );
};

export default Footer;