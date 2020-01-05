import React, { Component } from 'react';
import { Tabs, Divider } from 'antd';
import FoodContainer from './FoodContainer';
import { FoodDetail } from '../Model/FoodDetail';

export interface Props {
  sideMenu: Array<FoodDetail>;
}

export interface State {}

class SideMenu extends Component<Props, State> {
  render() {
    return (
      <>
        <h1>Sides</h1>
        <FoodContainer menuList={this.props.sideMenu} />
        <Divider />
      </>
    );
  }
}

export default SideMenu;
