import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { cartCT } from "../../context/cart";
import { ActionCT } from "../../context/action";
import Register from "../user/register";
import Message from "../message";

type Props = {};

const Header = (props: Props) => {
  const {cart} = useContext(cartCT)
  const {userAction,dispatch} = useContext(ActionCT)
  const navigate = useNavigate()
  return (
    <>
    {console.log(userAction)
    }
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
            <button onClick={()=>{dispatch({type:'message',value:true,text:'Bạn vừa click',messtype:true})}} className="block p-6">Thông báo</button>
            </li>
            <li>
            <button onClick={()=>{dispatch({type:'message',value:true,text:'Bạn vừa click',messtype:false})}} className="block p-6">Thông báo lỗi</button>
            </li>
          </ul>
        </nav>
        <button onClick={()=>navigate('/search?keyword=ngoc')}>sdfsdf</button>
      </header>
      {(userAction.Message.status) &&
        <Message/>
      }
    </>
  );
};

export default Header;
