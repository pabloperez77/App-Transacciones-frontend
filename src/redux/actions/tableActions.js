import { actionTypes } from "../reducers/tableReducer";

export const addTable = text => {
  return {
    type: actionTypes.ADD_TABLE,
    data: {
      data: text,
      complete: false,
      createdAt: Date.now()
    }
  };
};
