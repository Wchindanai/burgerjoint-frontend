import React, { Component } from 'react';
import { Tabs, Divider } from 'antd';
import FoodContainer from './FoodContainer';
import { FoodDetail } from '../Model/FoodDetail';

export interface Props {
  mexicanaMenu: Array<FoodDetail>;
}

export interface State {}

class MexicanaMenu extends Component<Props, State> {
  render() {
    console.log(this.props);
    return (
      <>
        <h1>Mexicana</h1>
        <FoodContainer menuList={this.props.mexicanaMenu} />
        <Divider />
      </>
    );
  }
}

export default MexicanaMenu;
