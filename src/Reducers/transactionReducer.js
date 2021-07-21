import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const ADD_TRANSACTION = "ADD_TRANSACTION";
const DELETE_TRANSACTION = "DELETE_TRANSACTION";

const INITIAL_STATE = {
  transactions: [
    { addedtime: 1576590342000, id: 2, title: "Books", price: -40 },
    { addedtime: 1576590342000, id: 3, title: "Paypal Income", price: 400 },
    { addedtime: 1274174256000, id: 4, title: "Bank Credit", price: 2000 },
    { addedtime: 1274174256000, id: 5, title: "Rice", price: -60 },
    { addedtime: 1274174256000, id: 6, title: "Transport fare", price: -10 },
    { addedtime: 779879856000, id: 7, title: "Make up", price: -20 },
    { addedtime: 779879856000, id: 9, title: "Hair", price: -200 },
    { addedtime: 779879856000, id: 10, title: "Salary", price: 2000 },
    { addedtime: 1613682000000, id: 11, title: "Charity", price: -10 },
  ],
};

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  transactions: transactionReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
