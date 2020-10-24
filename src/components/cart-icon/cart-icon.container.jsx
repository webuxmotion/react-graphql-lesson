import React from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import CartIcon from './cart-icon.component';

import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/constants';

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <CartIcon 
    toggleCartHidden={toggleCartHidden}
    itemCount={itemCount}
  />
);

export default compose(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
)(CartIconContainer);