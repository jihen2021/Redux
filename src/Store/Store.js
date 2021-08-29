import {createStore} from 'redux';
import TodoReducer from '../Reducer/TodoReducer';
const devtool=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const Store=createStore(TodoReducer,devtool)
export default Store;

//combine
