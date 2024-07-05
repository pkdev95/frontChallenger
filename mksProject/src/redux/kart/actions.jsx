import { kartActionTypes } from "./actionsTypes"



export const productIncrease = (payload) => ({
 
    type: kartActionTypes.increaseProduct,
    payload


})

export const productDecrease = (payload) => ({

    type: kartActionTypes.decreaseProduct,
    payload
})


export const productdel = (payload) => ({

    type: kartActionTypes.delProduct,
    payload

})

export const productAdd = (payload) => ({

type: kartActionTypes.addProduct,
payload

})