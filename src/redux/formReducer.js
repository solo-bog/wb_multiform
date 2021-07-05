import { ADD_FIELDS, TOGGLE_MODAL_IS_VISIBLE } from "./formActionTypes";

const initialState = {
  data: {},
  modalIsVisible: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELDS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    case TOGGLE_MODAL_IS_VISIBLE:
      return {
        ...state,
        modalIsVisible: !state.modalIsVisible,
      };
    default:
      return state;
  }
};

export default formReducer;
