// add iteams
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item
    }
}

// remove iteams
export const DLT = (id) => {
    return {
        type: "RMV_CART",
        payload: id
    }
}

// remove individual iteams
export const REMOVE = (iteam) => {
    return {
        type: "RMV_ONE_ITEAM",
        payload: iteam
    }
}