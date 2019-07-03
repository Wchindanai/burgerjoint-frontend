import React, { Component } from "react";
import { Tabs, Divider, Skeleton } from "antd";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { FoodDetail } from "../Model/FoodDetail";
import BurgerMenu from "./BurgerMenu";

export interface State {
  MenuList?: Array<FoodDetail>;
}

interface Props {
  Loading: Boolean;
  Menu: any;
}

interface Menu {
  Burger: Array<FoodDetail>;
  Chip: Array<FoodDetail>;
}

const getMenu = gql`
  {
    Menu {
      Burger {
        _id
        title
        type
      }
      Chip {
        _id
        title
      }
    }
  }
`;

const MenuListWithData = () => (
  <Query query={getMenu}>
    {({ data, loading }) => {
      if (loading) return <Skeleton active />;
      const { Menu }: { Menu: Menu } = data;
      return <MenuList Loading={loading} Menu={Menu} />;
    }}
  </Query>
);

class MenuList extends Component<Props, State> {
  render() {
    const { Burger }: Menu = this.props.Menu;
    return (
      <div>
        <BurgerMenu burgerMenu={Burger} />
        <h1>Mexicana</h1>
        <Divider />
        <h1>Sides</h1>
        <Divider />
        <h1>Chips And Wedges</h1>
        <Divider />
        <h1>Salad</h1>
      </div>
    );
  }
}

export default MenuListWithData;
