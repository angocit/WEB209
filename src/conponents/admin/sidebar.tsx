import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/5 [&_ul]:pl-4 bg-white h-screen p-4 [&_*]:text-[1.1rem] [&_*]:font-[600]">
      <ul>
        <li>
          Danh mục
          <ul>
            <li>
              <Link to={"/dashboard/list-category"}>Các danh mục</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-category"}>Thêm mới danh mục</Link>
            </li>
          </ul>
        </li>
        <li>
          Sản phẩm
          <ul>
            <li>
              <Link to={"/dashboard/add-product"}>Danh sách sản phẩm</Link>
            </li>
            <li>
              <Link to={"/dashboard/add-product"}>Thêm mới sản phẩm</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
