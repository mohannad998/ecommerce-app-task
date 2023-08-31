import './App.css';
import AdvancedCarousel from './components/advancedcarousel/advancedcarousel';

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ImageCarousel from './components/imageCarousel/ImageCarousel';
import ContactForm from './components/contactform/ContactForm';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Ecommerce App', '1', <PieChartOutlined />),

];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        backgroundColor: 'white'
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout style={{ backgroundColor: 'white' }}
      >
        <Header
          style={{
            padding: 0,
            color: 'blue'
            , fontSize: '20px'
          }}
        >
          Product Slider
        </Header>

        <Content
          style={{
            width: '80% ', paddingLeft: '20%', marginTop: '5%'

          }}
        >

          <ImageCarousel />
          <ContactForm />
          <AdvancedCarousel />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ecommerce Task©2023 Created by Mohannad
        </Footer>
      </Layout>
    </Layout >
  );
};
export default App;