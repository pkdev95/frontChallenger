import { kartActionTypes } from "./actionsTypes";

const initialState = {
  products: [],

};

export const kartReducer = (state = initialState, action) => {
  switch (action.type) {
    case kartActionTypes.increaseProduct:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };

    case kartActionTypes.decreaseProduct:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ).filter(product => product.quantity > 0),
      };

    case kartActionTypes.delProduct:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case kartActionTypes.addProduct:

      const isAlreadyInToKart = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (isAlreadyInToKart) {
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }


      return {
        ...state,
        products: [...state.products, { ...action.payload, quantity: 1 }],
      };

    default:
      return state;
  }
};
