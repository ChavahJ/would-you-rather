export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export function showModal(action) {
  return {
    type: SHOW_MODAL,
    action,
  };
}

export function hideModal(action) {
  return {
    type: HIDE_MODAL,
    action,
  };
}
