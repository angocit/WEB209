import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const navigate = useNavigate()
  const items: MenuItem[] = [
    {
      key: 'sub1',
      label: 'Dashboard',
      icon: <MailOutlined />
    },
    {
      key: 'sub2',
      label: 'Quản lý sản phẩm',
      icon: <AppstoreOutlined />,
      children: [
        { key: 'productlist', label: 'Danh sách sản phẩm' },
        { key: 'addproduct', label: 'Thêm mới sản phẩm' },
        { key: 'variantsmanage', label: 'Quản lý thuộc tính' },
      ],
    },
    {
      type: 'divider',
    },
    {
      key: 'sub4',
      label: 'Quản lý đơn hàng',
      icon: <SettingOutlined />,
      children: [
        { key: '9', label: 'Option 9' },
        { key: '10', label: 'Option 10' },
        { key: '11', label: 'Option 11' },
        { key: '12', label: 'Option 12' },
      ],
    }
  ];
  const onClick: MenuProps['onClick'] = ({key}) => {
      switch(key)
      {
        case "addproduct":
          navigate("/dashboard/product-add")
          break;
        case "productlist":
          navigate("/dashboard/product-list") 
          break;
        default:
          navigate("/dashboard") 
          break;
      }
  };
  return (
    <div className='w-1/5 h-screen bg-white'>
      <Menu
      onClick={onClick}
      style={{ width: '100%' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
    </div>
  )
}

export default AdminSidebar