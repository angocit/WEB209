import { ProductOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, type MenuProps } from 'antd';
import React from 'react'

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
            getItem('Tom', '3'),
            getItem('Bill', '4'),
            getItem('Alex', '5'),
        ]),
        getItem('Quản lý người dùng', 'user', <UserOutlined />),
        ];
  return (
    <Menu theme="dark" defaultSelectedKeys={['sub1']} mode="inline" items={items} />
  )
}

export default SidebarMenu