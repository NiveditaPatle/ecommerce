import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getLocalCartData = () => {
    let localCartData = localStorage.getItem("NPCart");
    if(localCartData == []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
}

const initialState = {
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addtoCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
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
        localStorage.setItem("NPCart", JSON.stringify(state.cart));
    },[ state.cart ])

    return <CartContext.Provider value={{ ...state, addtoCart, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };