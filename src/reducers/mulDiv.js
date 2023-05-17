const initialstate = 5;

const mulTheNumer = (state=initialstate, action) => {
switch (action.type){
    case "Mult" : return state *  action.payload;
    case "Divide" : return state / 5;
    default : return state;
}
}

export default mulTheNumer;