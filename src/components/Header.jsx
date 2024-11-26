import React from "react";
import { navItems } from "./../constants/data";
import { Link } from "react-router-dom";
import profile from "../assets/profile.webp";

const Header = () => {
  const isLoggedIn = true;

  return (
    <div className="w-full shadow-custom py-4">
      <div className="container flex justify-between items-center">
        <div className="logo">
          <img src="/logo192.png" className="w-7 h-7" alt="" />
        </div>
        <div className="navi">
          <ul className="flex gap-8">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="info">
          <ul className="flex gap-4 items-center">
            {isLoggedIn ? (
              <>
                <li>
                  <img
                    src={profile}
                    className="w-7 h-7 rounded-full overflow-hidden"
                    alt=""
                  />
                </li>
                <li>서영님</li>
                <li>
                  <button className="btn">로그아웃</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="btn">
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
