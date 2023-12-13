import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="text-white bg-primary-800 h-24 rounded flex justify-between items-center p-8">
      <div className="flex w-2/6 gap-3">
        <input
          type="text"
          placeholder="What to you want to listen ?"
          className="bg-primary-700 focus:border-primary-700 w-full h-10 rounded p-3"
        />
        <div className=" mt-3 hover:cursor-pointer text-primary-600 hover:text-white duration-500 ease-in-out">
          <FaSearch style={{ fontSize: "20px" }} />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <h1>UserName</h1>
        <button>Logout</button>
      </div>
    </div>
  );
};
