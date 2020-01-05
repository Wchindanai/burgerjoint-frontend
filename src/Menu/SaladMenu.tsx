import React, { Component } from 'react';
import { Tabs, Divider } from 'antd';
import FoodContainer from './FoodContainer';
import { FoodDetail } from '../Model/FoodDetail';

export interface Props {
  saladMenu: Array<FoodDetail>;
}

export interface State {}

class SaladMenu extends Component<Props, State> {
  render() {
    return (
      <>
        <h1>Salad</h1>
        <FoodContainer menuList={this.props.saladMenu} />
      </>
    );
  }
}

export default SaladMenu;
