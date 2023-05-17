import {buy_book} from './Booktype'
const initialstate = {
    Numberofbooks:20
}
const bookreducer = (state=initialstate, action) =>{
 switch(action.type){
  case buy_book : return{
    ...state, numberofbooks : state.initialstate-1
  }
  default : return state
 }
}
export default bookreducer;