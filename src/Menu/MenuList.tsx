import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import { FoodDetail } from '../Model/FoodDetail';
import BurgerMenu from './BurgerMenu';
import MexicanaMenu from './MexicanaMenu';
import { foods } from '../assets/data/foods.json';
import SideMenu from './SideMenu';
import ChipMenu from './ChipMenu';
import SaladMenu from './SaladMenu';

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
const burgerList: Array<FoodDetail> = foods.filter(
  food => food.category === 'burger'
);
const mexicanaMenu: Array<FoodDetail> = foods.filter(
  food => food.category === 'mexicana'
);
const sideMenu: Array<FoodDetail> = foods.filter(
  food => food.category === 'side'
);
const chipMenu: Array<FoodDetail> = foods.filter(
  food => food.category === 'chip'
);
const saladMenu: Array<FoodDetail> = foods.filter(
  food => food.category === 'salad'
);

class MenuList extends Component<Props, State> {
  render() {
    return (
      <div>
        <LazyLoad>
          <BurgerMenu burgerMenu={burgerList} />
        </LazyLoad>
        <LazyLoad>
          <MexicanaMenu mexicanaMenu={mexicanaMenu} />
        </LazyLoad>
        <LazyLoad>
          <SideMenu sideMenu={sideMenu} />
        </LazyLoad>
        <LazyLoad>
          <ChipMenu chipMenu={chipMenu} />
        </LazyLoad>
        <LazyLoad>
          <SaladMenu saladMenu={saladMenu} />
        </LazyLoad>
      </div>
    );
  }
}

export default MenuList;
