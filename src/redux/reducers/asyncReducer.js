import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_FINISH,
  ASYNC_ACTION_ERROR,
} from "utils/constants/asyncReducerConstants";

export const initialState = {
  isLoading: false,
  isError: false,
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case ASYNC_ACTION_START: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case ASYNC_ACTION_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default asyncReducer;
