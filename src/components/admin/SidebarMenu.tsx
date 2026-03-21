import { ProductOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const SidebarMenu = () => {
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
        } as MenuItem;
        }
    const items: MenuItem[] = [
        getItem('Quản lý sản phẩm', 'sub1', <ProductOutlined />, [
            getItem('Danh sách sản phẩm', 'products'),
            getItem('Thêm mới sản phẩm', 'products/add'),
        ]),
        getItem('Quản lý người dùng', 'user', <UserOutlined />),
        ];
        const navigate = useNavigate()
        const handleClickMenu =({key}:any)=>{
                navigate(key)                
        }
  return (
    <Menu onClick={handleClickMenu} theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items} />
  )
}

export default SidebarMenu