const INIT_STATE = {
    carts: []
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case "ADD_CART":
            const IteamIndex = state.carts.findIndex(item => item.id === action.payload.id);
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1;
            } else {
                const temp = {...action.payload, qnty: 1};
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
        case "RMV_CART":
            const data = state.carts.filter(el => el.id !== action.payload);
            return {
                ...state,
                carts: data
            }
        case "RMV_ONE_ITEAM":
            const IteamIndexDecrement = state.carts.findIndex(iteam => iteam.id === action.payload.id);
            if (state.carts[IteamIndexDecrement].qnty >= 1) {
                const deleteItem = state.carts[IteamIndexDecrement].qnty -= 1;
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndexDecrement].qnty === 1) {
                const data = state.carts.filter(ele => ele.id !== action.payload);
                return {
                    ...state,
                    carts: data
                }
            }
        default: 
            return state;
    }
}