import React from 'react';
import { Query, Mutation } from 'react-apollo';

import CartDropdown from './cart-dropdown.component';

import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from '../../graphql/constants';

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDDEN}>
    {
      toggleCartHidden => (
        <Query query={GET_CART_ITEMS}>
          {
            ({ data: { cartItems } }) => (
              <CartDropdown toggleCartHidden={toggleCartHidden} cartItems={cartItems} />
            )
          }
        </Query>
      )
    }
  </Mutation>
);

export default CartDropdownContainer;