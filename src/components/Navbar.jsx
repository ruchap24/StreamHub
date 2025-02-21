import { AiOutlineMenu } from "react-icons/ai";

import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";

function Navbar() {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex items-centerspace-x-4 border border-black">
        <AiOutlineMenu className="text-xl cursor-pointer" />
        
      </div>
      <div className="flex w-[35%] border border-black">
        <div className="w-[100%]">
          <input type="text" placeholder="Search" className="outline-null " />
        </div>
        <button>
          <CiSearch />
        </button>
        <IoMdMic />
      </div>
      <div className="border border-black">3</div>
    </div>
  );
}

export default Navbar;