import React, { Component, SFC } from "react";
import { Card, Col, Icon } from "antd";
import { FoodDetail } from "../Model/FoodDetail";
const { Meta } = Card;

interface Props {
  foodDetail: FoodDetail;
}

const FoodCard: SFC<Props> = ({ foodDetail }) => (
  <Col span={8}>
    <Card
      style={{ marginTop: 16 }}
      cover={<img alt={foodDetail.title} src={foodDetail.img} />}
      actions={[<Icon type="shopping-cart" onClick={e => console.log(e)} />]}
    >
      <Meta title={foodDetail.title} description={foodDetail.description} />
    </Card>
  </Col>
);

export default FoodCard;
