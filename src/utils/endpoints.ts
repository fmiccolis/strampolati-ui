export const DOMAIN = process.env.REACT_APP_API_URL;
export const API_PATH = `${DOMAIN}/api/v1`;
export const AUTH_PATH = `${DOMAIN}/auth`;
export const REGISTRATION_PATH = `${AUTH_PATH}/registration`;

// items
export const ITEM_BASE = `${API_PATH}/item`;
export const CREATE_ITEM = `${ITEM_BASE}/create`;
export const GET_ITEMS = `${ITEM_BASE}/all`;
export const GET_BY_OWNER = (ownerId: number) => `${ITEM_BASE}/get-by-owner/${ownerId}`;
export const GET_ITEM = (itemId: number) => `${ITEM_BASE}/${itemId}/`;
export const UPDATE_ITEM = (itemId: number) => `${ITEM_BASE}/${itemId}/update`;
export const DELETE_ITEM = (itemId: number) => `${ITEM_BASE}/${itemId}/delete`;

// auth
export const LOGIN = `${AUTH_PATH}/login/`;
export const LOGOUT = `${AUTH_PATH}/logout/`;
export const CHANGE_PASSWORD = `${AUTH_PATH}/password/change/`;
export const RESET_PASSWORD = `${AUTH_PATH}/password/reset/`;
export const REGISTRATION = `${REGISTRATION_PATH}/`;
export const RESEND_EMAIL = `${REGISTRATION_PATH}/resend-email/`;
export const VERIFY_EMAIL = `${REGISTRATION_PATH}/verify-email/`;
export const REFRESH = `${AUTH_PATH}/token/refresh/`;