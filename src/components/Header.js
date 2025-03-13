import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-amber-400">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-1 m-1">
          <li className="p-4 font-bold">Online Status: {onlineStatus ? "✅" : "⚫"}</li>
          <li className="p-4 font-bold hover:bg-amber-50 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-bold hover:bg-amber-50 rounded-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 font-bold hover:bg-amber-50 rounded-lg">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4 font-bold">Cart</li>
          <button
            className="p-1 m-1 font-bold rounded-lg bg-amber-50"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
