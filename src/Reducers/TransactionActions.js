const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION='DELETE_TRANSACTION'



export const addTransaction = ({id,title,price}) => dispatch => {
  const newTransaction = {
    id,
    title,
    price,
  }
    dispatch({
      type: ADD_TRANSACTION,
      payload: newTransaction,
    });
  };

  export const deleteTransaction = (id) => (dispatch) => {
    dispatch({
      type: DELETE_TRANSACTION,
      payload: id,
      
    });
    
  };