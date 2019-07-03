import React, { Component } from "react";
import { Row } from "antd";
import FoodCard from "../FoodCard/FoodCard";
import { FoodDetail } from "../Model/FoodDetail";

export interface Props {
  menuList: Array<FoodDetail>;
}
class FoodContainer extends Component<Props> {
  render() {
    return (
      <Row gutter={24}>
        {this.props.menuList.map(detail => (
          <FoodCard foodDetail={detail} key={detail._id.toString()} />
        ))}
      </Row>
    );
  }
}

export default FoodContainer;
