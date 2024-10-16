import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex p-5 items-center justify-between relative">
        
        {/* Logo on the Left */}
        <a className="flex title-font font-medium items-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#d4a857" // Adjusted to gold color
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl font-bold text-black">Furniro</span>
        </a>

        {/* Navigation Links Centered */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-10 text-base">
          <Link to={"/"} className="hover:text-gray-900 font-semibold">Home</Link>
          <Link to={"/shop"} className="hover:text-gray-900 font-semibold">Shop</Link>
          <Link to={"/productcamperision"} className="hover:text-gray-900 font-semibold">About</Link>
          <Link to={"/checkout"} className="hover:text-gray-900 font-semibold">check out </Link>
          <Link to={"/cart"} className="hover:text-gray-900 font-semibold">cart </Link>


          <Link className="hover:text-gray-900 font-semibold">Contact</Link>
        </nav>

        {/* Icons on the Right */}
        <div className="flex items-center gap-6 text-lg ml-auto">
          <UserOutlined className="text-black" />
          <SearchOutlined className="text-black" />
          <HeartOutlined className="text-black" />
          <ShoppingCartOutlined className="text-black" />
        </div>
      </div>
    </header>
  );
}

export default Header;
