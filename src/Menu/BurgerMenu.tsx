import React, { Component } from "react";
import { Tabs, Divider } from "antd";
import FoodContainer from "./FoodContainer";
import { FoodDetail } from "../Model/FoodDetail";

const { TabPane } = Tabs;

export interface Props {
  burgerMenu: Array<FoodDetail>;
}

export interface State {
  beef: Array<FoodDetail>;
  chicken: Array<FoodDetail>;
  fish: Array<FoodDetail>;
}

class BurgerMenu extends Component<Props, State> {
  public state:State = {
    beef: [],
    chicken: [],
    fish: []
  }
  public componentDidMount() {
    const { burgerMenu } = this.props;
    const beef = burgerMenu.filter(food => food.type === "beef");
    const chicken = burgerMenu.filter(food => food.type === "chicken");
    const fish = burgerMenu.filter(food => food.type === "fish");
    this.setState({
      beef,
      chicken,
      fish
    });
  }

  render() {
    const { chicken, beef, fish } = this.state;
    return (
      <>
        <h1>Burgers And Wraps</h1>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Beef And Lamb" key="1">
            <FoodContainer menuList={beef} />
          </TabPane>
          <TabPane tab="Chicken" key="2">
            <FoodContainer menuList={chicken} />
          </TabPane>
          <TabPane tab="Fish And Veggie" key="3">
            <FoodContainer menuList={fish} />
          </TabPane>
        </Tabs>
        <Divider />
      </>
    );
  }
}

export default BurgerMenu;
