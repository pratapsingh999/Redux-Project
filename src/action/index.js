export const incNumber = (num ) =>{
    return{
        type:"Increment",
        payload : num
    }
}

export const decNumber = () =>{
    return{
        type:"Decrement"
    }
}


export const multNumber = (num ) =>{
    return{
        type:"Mult",
        payload : num
    }
}

export const divNumber = () =>{
    return{
        type:"Divide"
    }
}