import {
  FaGoogle,
  FaLinkedinIn,
  FaPinterestP,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="bg-primary h-[60px] flex items-center">
      <div className="container flex md:flex-row flex-col items-center justify-center md:justify-between ">
        <div className="space-x-5 flex items-center text-[#878787] ">
          <span className="w-5 h-5 p-1 hover:text-white">
            <FaTwitter className="w-4 h-4" />
          </span>
          <span className="w-5 h-5 p-1 hover:text-white">
            <FaLinkedinIn className="w-4 h-4" />
          </span>
          <span className="w-5 h-5 p-1 hover:text-white">
            <FaGoogle className="w-4 h-4" />
          </span>
          <span className="w-5 h-5 p-1 hover:text-white">
            <FaPinterestP className="w-4 h-4" />
          </span>
        </div>
        <div className="flex space-x-5 items-center text-white font-inter">
          <span className="space-x-3 flex items-center">
            {" "}
            <FaRegEnvelope /> <span>info.pix@gmail.com</span>
          </span>
          <span className="space-x-3 flex items-center">
            {" "}
            <FiPhoneCall /> <span>(209) 555-0104</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
