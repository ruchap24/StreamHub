import { useState } from "react";
import { AiOutlineMenu, AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="flex justify-between fixed top-0 z-10 w-full bg-white px-6 py-2 shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          className="text-xl hover:bg-gray-100 p-2 rounded-full transition-colors"
          aria-label="Menu"
        >
          <AiOutlineMenu />
        </button>
      </div>

      <div className="flex w-[35%] items-center">
        <div className="w-full flex">
          <div className="w-full px-4 py-2 border border-gray-400 rounded-l-full focus-within:border-blue-500">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
              aria-label="Search input"
            />
          </div>
          <button
            className="px-6 py-2 border border-l-0 border-gray-400 bg-gray-100 rounded-r-full hover:bg-gray-200 transition-colors"
            onClick={() => searchQueryHandler("searchButton")}
            aria-label="Search"
          >
            <CiSearch className="text-xl" />
          </button>
          <button
            className="ml-3 p-2 border border-gray-400 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Voice search"
          >
            <IoMdMic className="text-xl" />
          </button>
        </div>
      </div>

      <div className="flex space-x-5 items-center">
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Create video"
        >
          <RiVideoAddLine className="text-2xl" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Notifications"
        >
          <AiOutlineBell className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;