import React, { useReducer } from "react";
import ProductContext from "./ProductContext";

const initialState = {
  products: [
    {
      _id: 1,
      name: "Apple",
      description: "Healthy fruit",
      price: 100,
      inStock: 10,
    },
    {
      _id: 2,
      name: "Banana",
      description: "Rich in potassium",
      price: 50,
      inStock: 5,
    },
    {
      _id: 3,
      name: "Mango",
      description: "Tropical fruit",
      price: 150,
      inStock: 8,
    },
  ],
  cart: [],
};

// Reducer function
const productReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const productInCart = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (productInCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          products: state.products.map((product) =>
            product._id === action.payload._id
              ? { ...product, inStock: product.inStock - 1 }
              : product
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          products: state.products.map((product) =>
            product._id === action.payload._id
              ? { ...product, inStock: product.inStock - 1 }
              : product
          ),
        };
      }

    case "REMOVE_ONE_FROM_CART":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        products: state.products.map((product) =>
          product._id === action.payload
            ? { ...product, inStock: product.inStock + 1 }
            : product
        ),
      };

    case "REMOVE_ALL_FROM_CART":
      const productToRemove = state.cart.find(
        (item) => item._id === action.payload
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
        products: state.products.map((product) =>
          product._id === action.payload
            ? {
                ...product,
                inStock: product.inStock + productToRemove.quantity,
              }
            : product
        ),
      };

    default:
      return state;
  }
};

const ProductState = (props) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  
  // Function to add a product to the cart
  const addToCart = (product) => {
    if (product.inStock > 0) {
      dispatch({ type: "ADD_TO_CART", payload: product });
    }
  };

  // Function to remove one item from the cart
  const removeOneFromCart = (productId) => {
    dispatch({ type: "REMOVE_ONE_FROM_CART", payload: productId });
  };

  // Function to remove all items of a specific product from the cart
  const removeAllFromCart = (productId) => {
    dispatch({ type: "REMOVE_ALL_FROM_CART", payload: productId });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
