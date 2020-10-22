import React from 'react';
import { Mutation } from 'react-apollo';

import CartIcon from './cart-icon.component';

import { TOGGLE_CART_HIDDEN } from '../../graphql/constants';

const CartIconContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      toggleCartHidden => <CartIcon toggleCartHidden={toggleCartHidden} />
    }
  </Mutation>
);

export default CartIconContainer;