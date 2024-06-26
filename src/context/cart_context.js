import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("NPCart");
    // if(localCartData == []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if (!Array.isArray(parsedData)) return [];
    return parsedData;
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addtoCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    // increment and decrement the product in cart 

    const setDecrease = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }

    const setIncrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id })
    }


    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    // to clear cart 
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART"})
    }

    // to add the data in localstorage 

    useEffect(() => {
        // dispatch({ type: "CART_TOTAL_ITEM" });
        // dispatch({ type: "CART_TOTAL_PRICE" });
        dispatch({ type: 'CART_ITEM_PRICE_TOTAL'})
        localStorage.setItem("NPCart", JSON.stringify(state.cart));
    },[ state.cart ])

    return <CartContext.Provider value={{ ...state, addtoCart, removeItem, clearCart, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };