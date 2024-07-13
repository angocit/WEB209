import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1]">
        <nav className="max-w-[1200px] mx-auto">
          <ul className="flex gap-6">
            <li>
              <Link className="block p-6" to={""}>Trang chủ</Link>
            </li>
            <li>
              <Link className="block p-6" to={""}>Giới thiệu</Link>
            </li>
            <li>
              <Link className="block p-6" to={""}>Sản phẩm</Link>
            </li>
            <li>
              <Link className="block p-6" to={""}>Tin tức</Link>
            </li>
            <li>
              <Link className="block p-6" to={""}>Liên hệ</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
