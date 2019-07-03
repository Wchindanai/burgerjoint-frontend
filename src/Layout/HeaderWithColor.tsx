import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Layout, Icon } from 'antd'
import styled from 'styled-components'

import logo from '../assets/img/logotheburgerjoint.png'

const { Header } = Layout
const HeaderWithColor = styled(Header)`
  &&& {
    background-color: white;
  }
`

const Logo = styled.div`
  background-image: url(${logo});
  float: left;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  width: 5%;
  @media (max-width: 768px) {
    width: 25%;
  }
`

class HeaderWithStyled extends Component {
  render() {
    return (
      <HeaderWithColor>
        <Logo/>

        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <a href="javascript:void(0)">Menu</a>
          </Menu.Item>
          <Menu.Item>
            <a href="#contact_us">Contact Us</a>
          </Menu.Item>
          {/*<Menu.Item style={{ float: "right" }}>*/}
          {/*  <Icon type="shopping-cart" />*/}
          {/*</Menu.Item>*/}
        </Menu>
      </HeaderWithColor>
    )
  }
}

export default HeaderWithStyled
