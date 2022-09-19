import { createContext, useReducer } from 'react';
// import logger from 'use-reducer-logger';

/* i wanna use react context to save the cart items in a global state
   and use it in Components */

/* Create Store */ /*  */
/* get Store from createContext  */
export const Store = createContext();

/* define initialState */
const initialState = {
  // cart
  cart: {
    cartItems: localStorage.getItem(
      'cartItems' // pass parameter
    )
      ? // if it's true
        JSON.parse(
          localStorage.getItem(
            'cartItems' // pass parameter
          )
        )
      : // otherwise
        [], //
    shippingAddress: localStorage.getItem(
      'shippingAddress' // pass parameter
    ) /* if it's true */
      ? JSON.parse(
          localStorage.getItem(
            'shippingAddress' // pass parameter
          )
        )
      : // otherwise
        {
          location: {}, // set location to empty object
        },
    paymentMethod: localStorage.getItem('paymentMethod')
      ? localStorage.getItem('paymentMethod')
      : '',
  },
  // user info
  userInfo: localStorage.getItem(
    'userInfo' // parameter
  ) // if it's true
    ? JSON.parse(
        localStorage.getItem(
          'userInfo' // parameter
        )
      ) /*otherwise */
    : null,
};

/* define reducer that accept two parameters */
function reducer(
  state, // 1st param
  action // 2nd param
) {
  /* define switch case that accept one parameter */
  switch (
    action.type // parameter
  ) {
    /* case action.type is 'CART_ADD_ITEM' */
    case 'CART_ADD_ITEM': {
      /* get newItem from action.payload */
      const newItem = action.payload;

      /* get existItem from ... */
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id // 1st param
      );

      /* get cart items */
      const cartItems = existItem // if it's true
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name // if it's true
              ? newItem
              : // otherwise
                item
          )
        : // otherwise
          [
            ...state.cart.cartItems, // [0] - keep all values
            newItem, // [1]
          ];

      localStorage.setItem(
        'cartItems', // 1st param
        JSON.stringify(cartItems) // 2nd param
      );

      return {
        ...state, // keep all values in the field
        cart: {
          ...state.cart, // keep all values in the field
          cartItems, // update cartItems
        },
      };
    }
    /* case action.type is 'CART_REMOVE_ITEM' */
    case 'CART_REMOVE_ITEM': {
      // get catItems
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id // 1st param
      );
      localStorage.setItem(
        'cartItems', // 1st param
        JSON.stringify(cartItems) // 2nd param
      );
      return {
        ...state, // keep previous state
        cart: {
          ...state.cart, // keep previous state
          cartItems, // update cartItems
        },
      };
    }
    /* case action.type is 'SAVE_SHIPPING_ADDRESS' */
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state, // keep previous state
        cart: {
          ...state.cart, // keep previous state
          shippingAddress: {
            ...state.cart.shippingAddress, // keep previous state
            ...action.payload, // keep all values
          },
        },
      };
    /* case action.type is 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION' */
    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return {
        ...state, // keep previous state
        cart: {
          ...state.cart, // keep previous state.cart
          shippingAddress: {
            ...state.cart.shippingAddress, // keep previous state.cart.shippingAddress
            location: action.payload, // set location to action.payload
          },
        },
      };
    /* case action.type is 'SAVE_PAYMENT_METHOD' */
    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state, // keep previous state
        cart: {
          ...state.cart, // keep previous state.cart
          paymentMethod: action.payload, // set paymentMethod to action.payload
        },
      };
    /* case action.type is 'CART_CLEAR' */
    case 'CART_CLEAR':
      return {
        ...state, // keep previous state
        cart: {
          ...state.cart, // keep previous state
          cartItems: [],
        },
      };
    /* case action.type is 'USER_SIGNIN' */
    case 'USER_SIGNIN':
      return {
        ...state, // keep previous state
        userInfo: action.payload, // set userInfo to action.payload
      };
    /* case action.type is 'USER_SIGNOUT' */
    case 'USER_SIGNOUT':
      return {
        ...state, // keep previous state
        userInfo: null, // set userInfo to null
        cart: {
          cartItems: [], // set cartItems to an empty array
          shippingAddress: {
            location: {}, // set to location to an empty object
          },
          paymentMethod: '', // set paymentMethod to an empty string
        },
      };
    /* default case */
    default:
      /* return state as it is */
      return state;
  }
}

/* StoreProvider - is a Wrapper for React App and pass global props to children */
export function StoreProvider(props) {
  // get state and dispatch from useReducer
  const [
    state, // [0]
    dispatch, // [1]
    // define useReducer
  ] = useReducer(
    //process.env.NODE_ENV === 'development' ? logger(reducer) : reducer,
    reducer, // 1st parameter
    initialState // 2nd parameter
  );

  /* define value object
   the value contain current state in the context and
   the dispatch to update state in the context */
  const value = {
    state,
    dispatch,
  };

  // return Store ( is comming from react context )
  // get Provider from the Store object
  // render {props.children}
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
