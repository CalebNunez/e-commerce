import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cart-dropdown/cartDropdown';
import { selectCartHidden } from "../../redux/user/userSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header-styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {
          currentUser ?
            <OptionLink as='div' onClick={() => auth.signOut()}>
              SIGN OUT
            </OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      {
        !hidden && <CartDropdown />
      }
    </HeaderContainer>
  );
};

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
