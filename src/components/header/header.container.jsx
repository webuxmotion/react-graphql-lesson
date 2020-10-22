import React from 'react';
import { Query } from 'react-apollo';

import { GET_CART_HIDDEN } from '../../graphql/constants';

import Header from './header.component';

const HeaderContainer = () => (
  <Query query={GET_CART_HIDDEN}>
    {
      ({ data: { cartHidden }}) => {
        console.log(cartHidden);

        return <Header hidden={cartHidden} />;
      }
    }
  </Query>
);

export default HeaderContainer;