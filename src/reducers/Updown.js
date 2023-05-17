const initialstate = 0;

const ChangeTheNumer = (state=initialstate, action) => {
switch (action.type){
    case "Increment" : return state + action.payload;
    case "Decrement" : return state - 1
    default : return state;
}
}

export default ChangeTheNumer;