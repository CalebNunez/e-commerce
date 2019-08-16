import React from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from "../../redux/cart/cartSelectors";
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cartItem';

import './cartDropdown-styles.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(item =>
          <CartItem key={item.id} item={item} />
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
