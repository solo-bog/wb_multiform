import { ADD_FIELDS, TOGGLE_MODAL_IS_VISIBLE } from "./formActionTypes";

export const addFields = (data) => ({ type: ADD_FIELDS, payload: data });
export const toggleModalIsVisible = () => ({ type: TOGGLE_MODAL_IS_VISIBLE });
