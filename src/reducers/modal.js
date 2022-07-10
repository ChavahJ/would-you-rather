import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal";

export function modalStore(state = true, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return true;
    case HIDE_MODAL:
      return false;
    default:
      return state;
  }
}
