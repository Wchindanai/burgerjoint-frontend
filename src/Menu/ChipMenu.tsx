import React, { Component } from 'react';
import { Tabs, Divider } from 'antd';
import FoodContainer from './FoodContainer';
import { FoodDetail } from '../Model/FoodDetail';

export interface Props {
  chipMenu: Array<FoodDetail>;
}

export interface State {}

class ChipMenu extends Component<Props, State> {
  render() {
    return (
      <>
        <h1>Sides</h1>
        <FoodContainer menuList={this.props.chipMenu} />
        <Divider />
      </>
    );
  }
}

export default ChipMenu;
