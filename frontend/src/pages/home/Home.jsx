import React from "react";
import useLogout from "../../hooks/useLogout";

const Home = () => {
  const { loading, logout } = useLogout();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1>I am Home </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-4 h-8 rounded"
      >
        Logout
      </button>
    </div>
  );
};
export default Home;
