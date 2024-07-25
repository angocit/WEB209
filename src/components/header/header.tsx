import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { cartCT } from "../../context/cart";
import { ActionCT } from "../../context/action";

type Props = {};

const Header = (props: Props) => {
  const {cart} = useContext(cartCT)
  const {dispatch} = useContext(ActionCT)
  return (
    <>
      <header className="bg-gradient-to-r from-[#4E7C32] to-[#b0b5a1]">
        <nav className="max-w-[1200px] mx-auto">
          <ul className="flex gap-6">
            <li>
              <NavLink className="block p-6" to={""}>Trang chủ</NavLink>
            </li>
            <li>
              <NavLink className="block p-6" to={"/dashboard/product/add"}>Thêm mới</NavLink>
            </li>
            <li>
              <NavLink className="block p-6" to={"/dashboard/product-list"}>Sản phẩm</NavLink>
            </li>
            <li>
              <Link className="block p-6" to={""}>Tin tức</Link>
            </li>
            <li>
              <Link className="block p-6" to={""}>Giỏ hàng ({cart})</Link>
            </li>
            <li>
              <button onClick={()=>{dispatch({type:'register',value:true});dispatch({type:'login',value:false})}} className="block p-6">Đăng ký</button>
            </li>
            <li>
            <button onClick={()=>{dispatch({type:'login',value:true});dispatch({type:'register',value:false})}} className="block p-6">Đăng nhập</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
