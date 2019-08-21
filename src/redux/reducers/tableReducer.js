import { addTable } from "../actions/tableActions";

export const actionTypes = {
  ADD_TABLE: "@TableReducer->ADD_TABLE"
};

const defaultState = {
  importante: "NO ME BORRES",
  tables: [addTable("Salir a correr").data, addTable("Aprender React").data]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TABLE:
      return {
        ...state,
        tables: [...state.tables, action.data]
      };

    default:
      return state;
  }
};

export default reducer;
