import { useState } from "react";

const Navbar = (props) => {
  const [count, setCount] = useState(9);
  const pageCountHandler = () => {
    if (count < 10 && count > 0) {
      const updatedPage = count - 1;
      setCount(updatedPage);
      props.refresh(count);
    } else {
      return alert("No Movies Found, Refresh the Page");
    }
  };

  return (
    <header className="sticky top-0 z-50 text-gray-600 body-font bg-violet-400">
      <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">
        <span className="ml-3 text-xl text-white">MovieStream</span>

        <button
          onClick={pageCountHandler}
          className="inline-flex items-center font-medium bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-400 hover:text-white rounded text-base mt-4 md:mt-0"
        >
          Click for new Movies list
        </button>
      </div>
    </header>
  );
};

export default Navbar;
