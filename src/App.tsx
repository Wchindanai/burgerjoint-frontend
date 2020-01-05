import React, { Component } from 'react';

import { Layout, Breadcrumb, Carousel } from 'antd';
import HeaderWithStyled from './Layout/HeaderWithColor';
import MenuList from './Menu/MenuList';
import { Switch, Route } from 'react-router-dom';
import { BackTop } from 'antd';
import Banner from './Layout/Banner';
import ContactUs from './ContactUs/ContactUs';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Banner />
        <HeaderWithStyled />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} />
          <div style={{ background: '#fff', minHeight: 280 }}>
            <Route exact path="/" component={MenuList} />
            <hr />
            <ContactUs />
          </div>
        </Content>
        <Footer />
        <BackTop />
      </Layout>
    );
  }
}

export default App;
