import React from "react";
import { Link, NavLink } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1]">
        <nav className="max-w-[1200px] mx-auto">
          <ul className="flex gap-6">
            <li>
              <NavLink className="block p-6" to={""}>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink className="block p-6" to={"/product/add"}>Thêm mới</NavLink>
            </li>
            <li>
              <NavLink className="block p-6" to={"/product-list"}>Sản phẩm</NavLink>
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
