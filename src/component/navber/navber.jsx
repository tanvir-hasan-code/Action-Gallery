import React from "react";
import NotificationBell from "./notificationBell";

const Navber = () => {
  return (
    <div className="shadow-sm">
      <div className="w-10/11 mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
            </div>
            <a className="btn btn-ghost text-3xl font-semibold text-[#003EA4]">
              Auction <span className="font-bold text-[#FFD337]">Gallery</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 items-center gap-3 text-xl">
              <li>
                <a>Home</a>
              </li>
              <li><a>Auctions</a></li>
              <li><a>Categories</a></li>
              <li>
                <a>How to Works</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-6">
			<NotificationBell></NotificationBell>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
