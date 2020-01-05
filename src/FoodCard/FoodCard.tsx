import React, { Component, SFC } from 'react';
import { Card, Col, Icon } from 'antd';
import { FoodDetail } from '../Model/FoodDetail';
const { Meta } = Card;

interface Props {
  foodDetail: FoodDetail;
}

const FoodCard: SFC<Props> = ({ foodDetail }) => (
  <Col span={8}>
    <Card
      style={{ marginTop: 16 }}
      cover={<img alt={foodDetail.title} src={`/img/${foodDetail.img}`} />}
    >
      <Meta
        title={foodDetail.title}
        description={`${foodDetail.description} ${foodDetail.price}`}
      />
    </Card>
  </Col>
);

export default FoodCard;
