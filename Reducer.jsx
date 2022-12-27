export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket":
    return {
        ...state,
        basket: [...state.basket, action.item],
        user : null
      };

    case "Remove_From_Basket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id} as its not in the basket!)`
        );
      }
      return {
        ...state,
        // basket : basket.filter(item => item.id !== action.id)
        // This remove all elements at the same time of matching ID
        basket: newBasket,
      };

    case "Set_User":
      return {
        ...state,
        user : action.user
      }  

    default:
      return state;
  }
};

export default reducer;
