
import {createSlice} from '@reduxjs/toolkit';


const cartSlice = createSlice({

    name: 'cart',

    intialState : {
        items : []
    },

    reducers: { // reducers are functions that take the current state and an action, and return a new state(basically changes the state)

        addCart : (state, action) => {
            let obj = action.payload; //whole data object is passed as payload in the action
            let cartObj = { dataObj: obj, quantity: 1 }; // creating a new object with the data and quantity
            state.items.push(cartObj); // pushing the new object to the items array in the state
        },

        removeCart : (state, action) => {
            let id = action.payload; // id of the product to be removed
            let itemIdx = state.items.findIndex(  (cartObj) => cartObj.dataObj.id === id); // finding the index of the item to be removed
            state.items.splice(itemIdx, 1); // removing the item from the items array using splice
        },

        clearCart : (state, action) => {
            // logic to clear the cart
            state.items = [];
        },
    }
})

export const { addCart, removeCart, clearCart } = cartSlice.actions; // exporting the actions to be used in components

export default cartSlice.reducer; // exporting the reducer to be used in the store