export const initialState = {
  basket: [],
  user: null,
};

export default function reducer(state, action) {
  console.table(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      // Logic for add
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // remove item if found
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't Remove Product With ID: ${action.id}`);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
