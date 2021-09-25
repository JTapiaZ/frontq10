import React from 'react';

import { Layout, Breadcrumb } from 'antd';

import SideMenu from './SideMenu';
import Footer from './Footer';
// import { useLocation } from 'react-router-dom';


const { Content, Header } = Layout;

const LayoutWithRoute = ({ children }) => {

  // const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu />
      <Layout>
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Q10</Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
        <Footer/>
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
