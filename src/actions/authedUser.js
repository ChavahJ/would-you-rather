export const GET_AUTHED_USER = "GET_AUTHED_USER";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function getAuthedUser(user) {
  return {
    type: GET_AUTHED_USER,
    user,
  };
}

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function removeAuthedUser(id) {
  return {
    type: REMOVE_AUTHED_USER,
    id,
  };
}
